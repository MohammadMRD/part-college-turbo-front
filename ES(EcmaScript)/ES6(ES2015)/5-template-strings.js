/**
 * Template strings provide syntactic sugar for constructing strings.
 * This is similar to string interpolation features in Perl, Python and more.
 * Optionally, a tag can be added to allow the string construction to be customized,
 * avoiding injection attacks or constructing higher level data structures from string contents.
 */

const name = "Mohammad", time = "today";
console.log(`Hello ${name}, how are you ${time}?`)

// const calc = (strings, ...values) => {
//   const op = strings[0]

//   switch(op) {
//     case 'Add: ':
//       return `A + B = ${values[0] + values[1]}`
//     case 'Sub: ':
//       return `A - B = ${values[0] - values[1]}`
//     case 'Multi: ':
//       return `A * B = ${values[0] * values[1]}`
//     case 'Div: ':
//       return `A / B = ${values[0] / values[1]}`
//   }
// }

// console.log({
//   add: calc`Add: ${2} ${3}`,
//   sub: calc`Sub: ${2} ${3}`,
//   multi: calc`Multi: ${2} ${3}`,
//   div: calc`Div: ${2} ${3}`,
// })
