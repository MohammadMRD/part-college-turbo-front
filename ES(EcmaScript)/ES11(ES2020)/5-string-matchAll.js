/**
 * If you run a Google search for javascript string match all the first result will be something like: How do I write a regular expression to “match all”?
 */

let string = "Hello";
let matches = string.match("l");
let matches2 = string.matchAll("l");

console.log({ matches })

for (const match of matches2)
  console.log(match);

