/**
 * The rest operator (...) in object destructuring. At the moment, this operator only works for Array destructuring and in parameter definitions.
 * The spread operator (...) in object literals. At the moment, this operator only works in Array literals and in function and method calls.
 */

// =====================
//        REST
// =====================

const obj = {foo: 1, bar: 2, baz: 3};

// const {foo, ...rest} = obj;

// const {...rest, foo} = obj; // SyntaxError
// const {foo, ...rest1, ...rest2} = obj; // SyntaxError

// const obj = {
//   foo: {
//       a: 1,
//       b: 2,
//       c: 3,
//   },
//   bar: 4,
//   baz: 5,
// };
// const {foo: {a, ...rest1}, ...rest2} = obj;


// =====================
//        SPREAD
// =====================

const obj2 = { ...obj, qux: 4 }
const obj3 = { foo: true, ...obj }
