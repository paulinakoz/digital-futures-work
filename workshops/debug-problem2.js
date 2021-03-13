const fs = require('fs')
const util = require('util')
let charSet;

const decode = (string, key) => {
  let invertedCharSet = invert(charSet)
    //console.log(`this is inverted chatacter set: ${invertedCharSet}`)
  return chunk(string.split(''), 2).map(pair => {
    let cipherPair = parseInt(pair.join(''))
    let number = (99 + (cipherPair - key)) % 99
    return invertedCharSet[number.toString()]
  }).join('')
}

const chunk = (array, chunk_size) => {
  let chunks = [];

  while (array.length) {
      chunks.push(array.splice(0, chunk_size));
  }

  return chunks
}

const invert = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach(key => {
      //console.log(key)
      //console.log(obj[key]);
      newObj[obj[key]] = key
    })
  return newObj;
}

const parseCharacterSet = (data) => {
  let result = {}
  data.split('\n').map(pair => pair.split(', ')).forEach(splitPair => result[splitPair[0]] = splitPair[1])
  return result
}

fs.readFile('char-set.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  charSet = parseCharacterSet(data)
  //console.log(charSet)
  console.log(util.inspect(decode('391482051824106893920294680658', 4)))

})