/**
 * JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate
 */

const myObj = {name: "Turbo", age: 31, city: "Mashhad"};
const myJSON = JSON.stringify(myObj, null, 2);

console.log(myJSON)


const myJSON2 = '{"name":"Turbo","age":31,"city":"Mashhad"}'
const myObj2 = JSON.parse(myJSON2)

console.log(myObj2)
