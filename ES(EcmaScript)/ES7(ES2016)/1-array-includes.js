/**
 * The includes() method determines whether an array includes a certain value among its entries,
 * returning true or false as appropriate.
 */

const fruits = ["turbo", "front", "part"]

console.log({
  turbo: fruits.includes("turbo"),
  Turbo: fruits.includes("Turbo"),
  part3: fruits.includes("part", 3),
  partLastIndex: fruits.includes("part", -1),
})
