/**
 * If you want to use a fallback value, you have to use a logical operator (“||”). It applies to almost all cases, but there are exceptions in some scenarios.
 */

let theNumber = 7
let number = theNumber || 5
let number2 = theNumber ?? 5
console.log({ number , number2 })
