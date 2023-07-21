import { v2beta3 } from '@google-cloud/tasks'
import { graphqlString } from './sendGraphqlRequest'

export const createGraphqlTask = async <T extends Record<string, any>>(
  projectId: string,
  region: string,
  queryName: string,
  params: T,
  endpoint: string,
  inSeconds = 0,
) => {
  try {
    const client = new v2beta3.CloudTasksClient()
    const parent = client.queuePath(projectId, region, queryName)
    const graphql = graphqlString('mutation', queryName, params)
    const body: string = Buffer.from(graphql).toString('base64')
    const serviceAccountEmail = `${projectId}@${projectId}.iam.gserviceaccount.com`
    const oidcToken = {
      serviceAccountEmail,
    }
    const task = {
      httpRequest: {
        headers: {
          'Content-Type': 'application/json',
        },
        httpMethod: 'POST' as const,
        url: endpoint + '/graphql',
        oidcToken,
        body,
      },
      scheduleTime: {},
    }
    if (inSeconds) {
      task.scheduleTime = {
        seconds: parseInt(String(inSeconds)) + Date.now() / 1000,
      }
    }
    const request = { parent, task }
    const [response] = await client.createTask(request)
    console.log(`Created task ${response.name}`)
    return response.name
  } catch (error) {
    throw new Error(`createGraphqlTask: ${error}`)
  }
}
