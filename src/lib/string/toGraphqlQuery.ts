type QueryType = 'query' | 'mutation'

export const toGraphqlQuery = <
  T extends { [key: string]: string | number | boolean },
>(
  queryType: QueryType,
  queryName: string,
  query: T,
) => {
  try {
    const inputString = Object.entries(query)
      .map(([key, value]) =>
        typeof value === 'number' || typeof value === 'boolean'
          ? `${key}: ${value}`
          : `${key}: \"${value.toString()}\"`,
      )
      .join(', ')

    const body = JSON.stringify({
      query: `${queryType} { ${queryName}(input: { ${inputString} }) { response }}`,
      variables: {},
    })
    return body
  } catch (error) {
    throw new Error(`Error in toGraphqlQuery: ${error}`)
  }
}
