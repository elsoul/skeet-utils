import { v2beta3 } from '@google-cloud/tasks'

const MAX_SCHEDULE_LIMIT = 30 * 60 * 60 * 24 // Represents 30 days in seconds.

export const createHttpTaskWithToken = async (
  projectId: string = 'my-project-id',
  queue: string = 'my-queue',
  location: string = 'us-central1',
  url: string = 'https://example.com/taskhandler',
  email: string = '<member>@<project-id>.iam.gserviceaccount.com',
  payload: string = 'Hello, World!',
  date: Date = new Date(),
) => {
  const client = new v2beta3.CloudTasksClient()
  const parent = client.queuePath(projectId, location, queue)
  const convertedPayload: string = JSON.stringify(payload)
  const body: string = Buffer.from(convertedPayload).toString('base64')

  const task = {
    httpRequest: {
      httpMethod: 'POST' as const,
      url,
      oidcToken: {
        serviceAccountEmail: email,
        audience: url,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    },
    scheduleTime: {},
  }

  const convertedDate: Date = new Date(date)
  const currentDate: Date = new Date()

  // Schedule time can not be in the past.
  if (convertedDate < currentDate) {
    throw new Error('Scheduled date in the past.')
  } else if (convertedDate > currentDate) {
    const date_diff_in_seconds =
      (convertedDate.getTime() - currentDate.getTime()) / 1000
    // Restrict schedule time to the 30 day maximum.
    if (date_diff_in_seconds > MAX_SCHEDULE_LIMIT) {
      throw new Error('Schedule time is over 30 day maximum.')
    }
    // Construct future date in Unix time.
    const date_in_seconds =
      Math.min(date_diff_in_seconds, MAX_SCHEDULE_LIMIT) + Date.now() / 1000
    task.scheduleTime = {
      seconds: date_in_seconds,
    }
  }

  try {
    // Send create task request.
    const request = { parent, task }
    const [response] = await client.createTask(request)
    console.log(`Created task ${response.name}`)
    return response.name
  } catch (error) {
    throw new Error(`createHttpTaskWithToken: ${error}`)
  }
}
