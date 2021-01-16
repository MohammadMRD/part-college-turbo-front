/**
 * The includes() method determines whether an array includes a certain value among its entries,
 * returning true or false as appropriate.
 */

const names = ["turbo", "front", "part"]

console.log({
  turbo: names.includes("turbo"),
  Turbo: names.includes("Turbo"),
  part3: names.includes("part", 3),
  partLastIndex: names.includes("part", -1),
})
