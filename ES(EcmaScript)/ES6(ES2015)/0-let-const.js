/**
 *  Block-scoped binding constructs. let is the new var. const is single-assignment.
 *  Static restrictions prevent use before assignment.
 */

let x1 = 'x1'
const x2 = 'x2'
var x3 = 'x3'

{
  let y1 = 'y1'
  const y1 = 'y2'
  var y3 = 'y3'
}

console.log({ x, y, z,  Z })
