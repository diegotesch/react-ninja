'use strict'

console.log('Arrow Function')

// function sum (x, y) {
//   return x + y
// }

// Arrow Function - Tradicional
// let sum = (x, y) => {
//   return x, y
// }

let sum = (x, y) => x + y

let add1 = x => sum(x, 1)

console.log(add1(5))
