import { v2beta3 } from '@google-cloud/tasks'
import * as dotenv from 'dotenv'

dotenv.config()

type SkeetOptions = {
  name: string
  projectId: string
  region: string
  appDomain: string
  lbDomain: string
  nsDomain: string
}

export const createHttpTaskWithToken = async (
  queue: string = 'my-queue',
  payload: string,
  inSeconds: number = 0,
  skeetOptions: SkeetOptions,
) => {
  const { projectId, region, lbDomain } = skeetOptions
  let url = ''
  let oidcToken = {}
  if (process.env.NODE_ENV === 'development') {
    url = `http://localhost:3000/graphql`
  } else {
    const serviceAccountEmail = `${projectId}@${projectId}.iam.gserviceaccount.com`
    url = `https://${lbDomain}/graphql`
    oidcToken = {
      serviceAccountEmail,
    }
  }
  const client = new v2beta3.CloudTasksClient()
  const parent = client.queuePath(projectId, region, queue)
  const convertedPayload: string = JSON.stringify(payload)
  const body: string = Buffer.from(convertedPayload).toString('base64')

  const task = {
    httpRequest: {
      httpMethod: 'POST' as const,
      url,
      oidcToken,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    },
    scheduleTime: {},
  }

  if (inSeconds) {
    task.scheduleTime = {
      seconds: parseInt(String(inSeconds)) + Date.now() / 1000,
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
