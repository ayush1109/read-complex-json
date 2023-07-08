# read-complex-json

Introducing a compact and lightweight library, with an unpacked size of just 1.8kB, that offers an efficient and streamlined approach to handling JSON data. _This library empowers developers to effortlessly retrieve the values associated with any key, regardless of its location within the JSON structure_. With its minimal footprint, it provides a powerful tool for working with JSON data in a highly optimized manner.

# How to Use - 

```javascript
const jsonReader = require('read-complex-json')
//data: your json data(either json string or json object, both will work)
//key: for which you want to find value/values of
const values = jsonReader(data, key)
//Do something with values
```

## Examples - 

```javascript
const jsonData = {
  "name": "Ram",
  "age": 30,
  "address": {
    "street": "Cannaught Place",
    "city": "New Delhi",
    "state": "New Delhi",
    "pin": "123456"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": 999
    },
    {
      "type": "work",
      "number": 888
    }
  ]
};

console.log(jsonReader(jsonData, 'name'))
//Output: ["Ram"]

console.log(jsonReader(jsonData, 'number'))
//Output: [999, 888]

console.log(jsonReader(jsonData, 'city'))
//Output: ["New Delhi"]

console.log(jsonReader(jsonData, 'keyNotExists'))
//Output: []
```

### What if json object is not valid

```javascript
const jsonData = 'Just a string'; //invalid data
console.log(jsonReader(jsonData, 'someKey'))
//Output: Not a valid json!! Please check again
```

For any inquiries, questions, or clarifications regarding this library, we encourage you to reach out to us via email at **gargayush308@gmail.com**. We are here to provide prompt assistance and address any doubts you may have about the library's functionality, implementation, or any other related concerns. Your feedback is valuable to us, and we are committed to ensuring a seamless experience with our library. Please don't hesitate to contact us; we look forward to assisting you. 

