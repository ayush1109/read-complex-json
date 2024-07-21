const fs = require('fs')
const checkValidJson = json => {
  try {
    parseJson(json)
  } catch (e) {
    return false
  }
  return true
}

const parseJson = json => JSON.parse(json)
let response = []

const getValues = (json, requiredKey) => {
  let result = false
  if (typeof json === 'string' || json instanceof String)
    result = checkValidJson(json)
  else result = checkValidJson(JSON.stringify(json))
  if (!result) return 'Not a valid json!! Please check again'
  else {
    for (let key in json) {
      if (typeof json[key] === 'object') {
        if (Array.isArray(json[key])) {
          if (key === requiredKey) response.push(json[key])
          else {
            for (let i = 0; i < json[key].length; i++)
              getValues(json[key][i], requiredKey)
          }
        } else {
          if (key === requiredKey) response.push(json[key])
          else getValues(json[key], requiredKey)
        }
      } else {
        if (key === requiredKey) {
          response.push(json[key])
        }
      }
    }
  }
  return response
}

const getValuesFromFile = (filePath, requiredKey) => {
  const data = fs.readFileSync(filePath).toString()
  if (checkValidJson(data)) return getValues(JSON.parse(data), requiredKey)
  else return 'Not a valid json file!! Please check again'
}

module.exports = { getValues, getValuesFromFile }
