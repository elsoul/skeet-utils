import { access } from 'fs'
import { createGraphqlTask } from './createGraphqlTask'
import { GraphQLResponse, sendGraphqlRequest } from './sendGraphqlRequest'
import * as dotenv from 'dotenv'
dotenv.config()

export type CloudTaskResponse = { id: string; env: string }

export const createCloudTask = async <
  T extends {
    [key: string]: any
  },
>(
  accessToken: string,
  queryName: string,
  params: T,
  endpoint = 'http://localhost:3000/graphql',
  returnParams = ['id'],
  inSeconds = 0,
) => {
  try {
    if (process.env.NODE_ENV !== 'production') {
      const postResponse = await sendGraphqlRequest<T, { id: string }>(
        'mutation',
        queryName,
        params,
      )
      const result: GraphQLResponse<CloudTaskResponse> = {
        data: {
          cloudTask: {
            id: postResponse.data[queryName].id,
            env: 'development',
          },
        },
      }
      return result
    } else {
      const result = await createGraphqlTask(
        accessToken,
        queryName,
        params,
        endpoint,
        returnParams,
        inSeconds,
      )
      return result
    }
  } catch (error) {
    throw new Error(`Error in createCloudTask: ${error}`)
  }
}
