
function resolveType(type){
  return type === String ? "string" : "other"
}

export function parseContract(contract){
  const transformedPairs = _.pairs(contract).map( p => {
    const k = p[0]
    const v = p[1]
    const body = {
      name: k,
      type: resolveType(v.type),
      required: v.required
    }
    return [k,body]
  })
  return _.object(transformedPairs)
}
