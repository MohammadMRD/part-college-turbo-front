/**
 * Callee-evaluated default parameter values.
 * Turn an array into consecutive arguments in a function call.
 * Bind trailing parameters to an array. Rest replaces the need for arguments and addresses common cases more directly.
 *
 */

function add(x, y = 12) {
  return x + y;
}

function multi(x, ...y) {
  return x * y.length;
}

console.log({
  default: add(1),
  multi: multi(2, 1, 1, 1),
  spread: multi(2, ...[1, 1, 1])
})
