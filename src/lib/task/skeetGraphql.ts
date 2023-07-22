import fetch from 'node-fetch'
import * as dotenv from 'dotenv'
import { GraphQLResponse, QueryType, graphqlString } from './sendGraphqlRequest'
dotenv.config()

export const skeetGraphql = async <
  T extends Record<string, any>,
  R extends Record<string, any>,
>(
  accessToken: string,
  endpoint: string,
  queryType: QueryType,
  queryName: string,
  params: T,
  returnParams = ['id'],
) => {
  try {
    const body = graphqlString(queryType, queryName, params, returnParams)
    console.log({ graphqlString: body })
    const res = await fetch(endpoint, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const result: GraphQLResponse<R> = await res.json()
    return result
  } catch (error) {
    throw new Error(`skeetGraphql failed: ${error}`)
  }
}
