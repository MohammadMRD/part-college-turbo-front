/**
 * New Features:
 *
 *  - Array.isArray()
 *  - Array.forEach()
 *  - Array.map()
 *  - Array.filter()
 *  - Array.reduce()
 *  - Array.every()
 *  - Array.some()
 *  - Array.indexOf()
 *  - Array.lastIndexOf()
 */

// ===========================
//       Array.isArray()
// ===========================

console.log(typeof [1, 2, 3])

// console.log('[1, 2, 3]: ', Array.isArray([1, 2, 3]))
// console.log('{ key: value }: ', Array.isArray({ key: 'value' }))
// console.log('\'text\': ', Array.isArray('text'))
// console.log('undefined: ', Array.isArray(undefined))


// ===========================
//       Array.forEach()
// ===========================

// ['a', 'b', 'c'].forEach(element => console.log(element) /*, [thisArg] */)

// ===========================
//       Array.map()
// ===========================

// [1, 2, 3].map(element => console.log(element) /*, [thisArg] */)

// ===========================
//       Array.filter()
// ===========================

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7]
// const filteredNumbers = numbers.filter(element => element % 2 === 0 /*, [thisArg] */)

// const values = [null, undefined, 'TurboFront', 1, true, NaN, false, '']
// const truthyValues = values.filter(Boolean)

// console.log({ filteredNumbers, truthyValues })

// ===========================
//       Array.reduce()
// ===========================

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7]
// const reducer = (accumulator, currentValue) => Math.max(accumulator, currentValue)

// const max = numbers.reduce(reducer)

// console.log({ max })

// ===========================
//       Array.every()
// ===========================

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7]

// const isBelowEight = numbers.every(num => num < 8)

// numbers.every(num => {
//   numbers.shift()

//   return num < 5
// })

// console.log({ isBelowEight, numbers })

// ===========================
//       Array.some()
// ===========================

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7]

// const hasTwo = numbers.some(num => num === 2)
// const odd = numbers.some(num => num % 2 !== 0)
// const biggerThanTen = numbers.some(num => num > 10)

// console.log({ hasTwo, odd, biggerThanTen })


// ===========================
//       Array.indexOf()
// ===========================

// const strings = ['Turbo', 'Part', 'Software', 'Part', 'Group']

// const indexOfPart1 = strings.indexOf('Part')
// const indexOfPart2 = strings.indexOf('Part', 2)

// console.log({ indexOfPart1, indexOfPart2 })

// ===========================
//       Array.lastIndexOf()
// ===========================

// const strings = ['Turbo', 'Part', 'Software', 'Part', 'Group']

// const indexOfPart1 = strings.lastIndexOf('Part')
// const indexOfPart2 = strings.lastIndexOf('Part', 2)

// console.log({ indexOfPart1, indexOfPart2 })
