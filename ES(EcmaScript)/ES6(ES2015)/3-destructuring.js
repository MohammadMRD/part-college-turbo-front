/**
 * Destructuring allows binding using pattern matching, with support for matching arrays and objects.
 * Destructuring is fail-soft, similar to standard object lookup foo["bar"], producing undefined values when not found.
 *
 */

// list matching
const [a, , b, c] = [1,2,3];

// object matching
const obj = { x: 'x', y: 'y', z: { z1: 'z1', z2: 'z2' } };

const { x, y, z: { z1, z2, z3, z4 = 'z4' } } = obj;

// Can be used in parameter position
function getName({ name }) {
  return name
}

const name = getName({ name: 'TurboFront' })

console.log({ a, b, c, x, y, z1, z2, z3, z4, name })
