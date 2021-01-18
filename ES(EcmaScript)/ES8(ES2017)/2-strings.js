/**
 * New Features:
 *
 *  - String.padStart()
 *  - String.padEnd()
 */


// ===========================
//       String.padStart()
//       String.padEnd()
// ===========================

console.log({
  startWithSpace: 'abc'.padStart(10),
  startWithStar: 'abc'.padStart(10, '*'),
  startWithText: 'abc'.padStart(10, 'foo'),
  alreadyFilled: 'abc'.padStart(1),
})

console.log({
  startWithSpace: 'abc'.padEnd(10),
  startWithStar: 'abc'.padEnd(10, '*'),
  startWithText: 'abc'.padEnd(10, 'foo'),
  alreadyFilled: 'abc'.padEnd(1),
})
