const fs = require('fs')
const util = require('util')
let charSet;

const encode = (string, key) => {
  return string.split('').map(char => {
    let number = (parseInt(charSet[char]) + key) % 99
    console.log(`this is the number: ${number}`)
    return number.toString().padStart(2, '0')
  }).join('')
}

const parseCharacterSet = (data) => {
  let result = {}
  data.split('\n').map(pair => pair.split(', ')).forEach(splitPair => result[splitPair[0]] = splitPair[1])
  console.log(result)
  return result
}

fs.readFile('char-set.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  charSet = parseCharacterSet(data)
  console.log(`this is the character set: ${charSet}`)
  console.log(charSet)
  console.log(util.inspect(encode('Hi, mse-2103-a!', 4)))
})