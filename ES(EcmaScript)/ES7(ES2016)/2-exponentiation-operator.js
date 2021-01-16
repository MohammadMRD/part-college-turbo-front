/**
 * The exponential operator (**) is an infix operator for exponentiation.
 */

const powUsingMath = Math.pow(2, 3)
const powUsingExOperator = 2 ** 3

let powUsingExOperator2 = 5
powUsingExOperator2 **= 3

console.log({
  powUsingMath,
  powUsingExOperator,
  powUsingExOperator2,
})
