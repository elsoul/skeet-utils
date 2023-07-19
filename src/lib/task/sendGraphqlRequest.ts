import fetch from 'node-fetch'
type QueryType = 'query' | 'mutation'

export const sendGraphqlRequest = async <T extends Record<string, any>>(
  queryType: QueryType,
  queryName: string,
  query: T,
) => {
  try {
    const inputString = Object.entries(query)
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

    const graphql = JSON.stringify({
      query: `${queryType} { ${queryName}(${inputString}) { id } }`,
      variables: {},
    })

    const baseUrl = 'http://localhost:3000/graphql'
    const res = await fetch(baseUrl, {
      method: 'POST',
      body: graphql,
      headers: { 'Content-Type': 'application/json' },
    })

    return res
  } catch (error) {
    throw new Error(`sendGraphqlRequest failed: ${error}`)
  }
}
