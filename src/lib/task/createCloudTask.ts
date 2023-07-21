import { createGraphqlTask } from './createGraphqlTask'
import { sendGraphqlRequest } from './sendGraphqlRequest'
import * as dotenv from 'dotenv'
dotenv.config()

export const createCloudTask = async <
  T extends {
    [key: string]: any
  },
>(
  projectId: string,
  region: string,
  queryName: string,
  params: T,
  endpoint: string,
  inSeconds = 0,
) => {
  try {
    if (process.env.NODE_ENV !== 'production') {
      const result = await sendGraphqlRequest('mutation', queryName, params)
      return result
    } else {
      const result = await createGraphqlTask(
        projectId,
        region,
        queryName,
        params,
        endpoint,
        inSeconds,
      )
      return result
    }
  } catch (error) {
    throw new Error(`Error in createCloudTask: ${error}`)
  }
}
