/**
 * Regular expressions are patterns used to match character combinations in strings.
 * In JavaScript, regular expressions are also objects.
 */

 // =======================
 // Numbered capture groups
 // =======================

const RE_DATE = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj[1]; // 1999
const month = matchObj[2]; // 12
const day = matchObj[3]; // 31

console.log({ year, month, day })


// const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;

// const matchObj = RE_DATE.exec('1999-12-31');
// const year = matchObj.groups.year; // 1999
// const month = matchObj.groups.month; // 12
// const day = matchObj.groups.day; // 31
