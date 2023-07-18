type QueryType = 'query' | 'mutation'

export const toGraphqlQuery = <
  T extends {
    [key: string]: any
  },
>(
  queryType: QueryType,
  queryName: string,
  query: T,
) => {
  try {
    const inputString = Object.entries(query)
      .map(([key, value]) => {
        if (value === undefined || value === null) {
          return `${key}: \"\"` // Convert undefined or null to an empty string
        } else if (typeof value === 'number' || typeof value === 'boolean') {
          return `${key}: ${value}`
        } else {
          return `${key}: "${value}"`
        }
      })
      .join(', ')

    const body = JSON.stringify({
      query: `${queryType} { ${queryName}(input: { ${inputString} }) { response }}`,
      variables: {},
    })
    const graphQlBuffer = Buffer.from(body)
    return graphQlBuffer
  } catch (error) {
    throw new Error(`Error in toGraphqlQuery: ${error}`)
  }
}
