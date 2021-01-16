/**
 * New Features:
 *
 * - Object.assign()
 * - Array.find()
 * - Array.findIndex()
 * - String.repeat()
 * - String.startsWith()
 * - String.endWith()
 * - String.includes()
 * - Number.isNaN()
 */

// ===========================
//      Object.assign()
// ===========================

const dest = { first: 0 }
const src1 = { foo: 1, bar: 2 }
const src2 = { foo: 3, baz: 4 }
Object.assign(dest, src1, src2)

console.log(dest)

// ===========================
//      Array.find()
//      Array.findIndex()
// ===========================

// const numbers = [ 1, 3, 4, 2, 5 ]
// const biggerThanThree = numbers.find(x => x > 3)
// const biggerThanThreeIndex = [ 1, 3, 4, 2, 5 ].findIndex(x => x > 3)

// console.log({ biggerThanThree, biggerThanThreeIndex });

// ===========================
//     String.repeat()
//     String.endWith()
//     String.includes()
//     String.startsWith()
// ===========================

// const repeatTurbo = "Turbo ".repeat(3)
// const startText = "TurboFront".startsWith("urbo", 1)
// const endText = "TurboFront".endsWith("Front")
// const includesText = "TurboFront".includes("boFr")

// console.log({ repeatTurbo, startText, endText, includesText })

// ===========================
//     Number.isNaN()
// ===========================

// const checkNumber = Number.isNaN(42) === false
// const checkNaN = Number.isNaN(NaN) === true

// console.log({ checkNumber, checkNaN })
