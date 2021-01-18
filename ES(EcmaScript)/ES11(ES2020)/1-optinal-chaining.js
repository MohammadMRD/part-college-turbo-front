/**
 * As a JavaScript developer, you must have come across this error a thousand times.
 * TypeError: Cannot read property ‘z’ of undefined
 * It happens because you tried to access a property on something that is not an object.
 */


// Accessing an Object Property
const smartphones = {
  brands: {
    apple: true
  }
}

console.log(smartphones.brands.apple)
console.log(smartphones.companies.motorola)
// console.log(smartphones.companies?.motorola)


// Accessing an Array

// let smartphones =  ['apple', 'samsung', 'motorola']
// console.log(smartphones[1])

// smartphones = null
// console.log(smartphones[1])
// // console.log(smartphones?.[1])


// Calling a Function

// let phoneApple = () => {
//   return '11 Pro Max'
// }

// console.log(phoneApple())

// phoneApple = null
// console.log(phoneApple())
// // console.log(phoneApple?.())
