import { SkeetOptions, createGraphqlTask } from './createGraphqlTask'
import { sendGraphqlRequest } from './sendGraphqlRequest'

export const createCloudTask = async <
  T extends {
    [key: string]: any
  },
>(
  skeetOptions: SkeetOptions,
  queryName: string,
  params: T,
  inSeconds = 0,
) => {
  try {
    if (process.env.NODE_ENV !== 'production') {
      const result = await sendGraphqlRequest('mutation', queryName, params)
      return result
    } else {
      const result = await createGraphqlTask(
        skeetOptions,
        queryName,
        params,
        inSeconds,
      )
      return result
    }
  } catch (error) {
    throw new Error(`Error in createCloudTask: ${error}`)
  }
}
