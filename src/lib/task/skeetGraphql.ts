import fetch from 'node-fetch'
import * as dotenv from 'dotenv'
import { GraphQLResponse, QueryType, graphqlString } from './sendGraphqlRequest'
dotenv.config()

const endpoint = process.env.SKEET_GRAPHQL_ENDPOINT_URL || ''

export const skeetGraphql = async <
  T extends Record<string, any>,
  R extends Record<string, any>,
>(
  accessToken: string,
  queryType: QueryType,
  queryName: string,
  params: T,
  returnParams = ['id'],
) => {
  try {
    const body = graphqlString(queryType, queryName, params, returnParams)
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
