const checkValidJson = (json) => {
    try {
         JSON.parse(json)
    } catch (e) {
        return false;;
    }
    return true;
}

let response = [];

const getValue = (json, requiredKey) => {
    let result = false;
    if(typeof json === 'string' || json instanceof String) result = checkValidJson(json);
    else result = checkValidJson(JSON.stringify(json));
    if(!result) return 'Not a valid json!! Please check again'
else {
            for (let key in json) {
            if (typeof json[key] === 'object') {
              if (Array.isArray(json[key])) {
                for (let i = 0; i < json[key].length; i++) {
                  getValue(json[key][i], requiredKey);
                }
              } else {
                getValue(json[key], requiredKey);
              }
            } else {
                if(key === requiredKey) {
                    response.push(json[key])
                } 
            }
        }
    }
    return response;
}
 
module.exports = getValue