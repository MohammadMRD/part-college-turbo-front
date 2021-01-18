/**
 * The trimStart() and trimEnd() methods are technically the same as trimLeft() and trimRight()
 */

const str = "   string   ";

// es2019
console.log(str.trimStart());
console.log(str.trimEnd());

// the same as
console.log(str.trimLeft());
console.log(str.trimRight());
