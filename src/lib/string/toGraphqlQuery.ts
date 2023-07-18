type QueryType = 'query' | 'mutation'

type Query = { [key: string]: string | number | boolean }

export const toGraphqlQuery = (
  queryType: QueryType,
  queryName: string,
  query: Query,
) => {
  try {
    const inputString = Object.entries(query).map(([key, value]) =>
      typeof value === 'number' || typeof value === 'boolean'
        ? `${key}: ${value}`
        : `${key}: \"${value.toString()}\"`,
    )
    const body = JSON.stringify({
      query: `${queryType} { ${queryName}(input: { ${inputString} }) { response }}`,
      variables: {},
    })
    return body
  } catch (error) {
    throw new Error(`Error in toGraphqlQuery: ${error}`)
  }
}
