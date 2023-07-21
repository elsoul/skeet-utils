import fetch from 'node-fetch'
import * as dotenv from 'dotenv'
dotenv.config()

export type QueryType = 'query' | 'mutation'
export type GraphQLResponse<T> = {
  data: {
    [key: string]: T
  }
}

const ACCESS_TOKEN = process.env.ACCESS_TOKEN || ''

export const sendGraphqlRequest = async <
  T extends Record<string, any>,
  R extends Record<string, any>,
>(
  queryType: QueryType,
  queryName: string,
  params: T,
  returnParams = ['id'],
) => {
  try {
    const body = graphqlString(queryType, queryName, params, returnParams)

    const baseUrl = 'http://localhost:3000/graphql'
    const res = await fetch(baseUrl, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    const result: GraphQLResponse<R> = await res.json()
    return result
  } catch (error) {
    throw new Error(`sendGraphqlRequest failed: ${error}`)
  }
}

export const graphqlString = <T extends Record<string, any>>(
  queryType: QueryType,
  queryName: string,
  params: T,
  outputString = ['id'],
) => {
  try {
    const inputString = Object.entries(params)
      .map(([key, value]) => {
        if (value === undefined || value === null) {
          return `${key}: ""`
        } else if (typeof value === 'number' || typeof value === 'boolean') {
          return `${key}: ${value}`
        } else {
          return `${key}: "${value}"`
        }
      })
      .join(', ')

    const returnParams = outputString.join(' ')

    const graphql = JSON.stringify({
      query: `${queryType} { ${queryName}(${inputString}) { ${returnParams} } }`,
      variables: {},
    })
    return graphql
  } catch (error) {
    throw new Error(`graphqlString failed: ${error}`)
  }
}
