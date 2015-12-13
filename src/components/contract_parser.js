
function resolveType(type){
  switch (type) {
    case String:
      return "String-field"
    case Number:
      return "Numeric-field"
    case Boolean:
      return "Boolean-field"
    default:
      // Function/Object/Array
      return "Other-field"
  }
  //return type === String ? "String-field" : "Other-field"
}

export function parseContract(contract){
  const transformedPairs = _.pairs(contract).map( p => {
    const k = p[0]
    const v = p[1]
    const body = {
      name: k,
      type: resolveType(v.type),
      required: v.required,
      value: "aloha"
    }
    return [k,body]
  })
  return _.object(transformedPairs)
}
