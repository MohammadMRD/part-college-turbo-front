/**
 * New Features:
 *
 *  - Array.flat()
 *  - Array.flatMap()
 *  - َArray.sort()
 */

const multi = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]];
const flatLevel1 = multi.flat();

console.log(flatLevel1)


// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map(x => [x, x * 2]);
// const newNumbers2 = numbers.flatMap(x => [x, x * 2]);

// console.log({ newNumbers, newNumbers2 })


// var fruit = [
//   { name: "Apple",      count: 13, },
//   { name: "Pear",       count: 12, },
//   { name: "Banana",     count: 12, },
//   { name: "Strawberry", count: 11, },
//   { name: "Cherry",     count: 11, },
//   { name: "Blackberry", count: 10, },
//   { name: "Pineapple",  count: 10, }
// ];

// let customSort = (a, b) => a.count - b.count;
// let sorted = fruit.sort(customSort);
// console.log(sorted);
