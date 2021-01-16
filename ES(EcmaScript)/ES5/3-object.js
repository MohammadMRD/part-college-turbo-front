/**
 * New Features:
 *
 * - Object.keys()
 * - Object.freeze()
 * - Object.defineProperty()
 * - Property Getters and Setters
 *
 */

// ===========================
//       Object.keys()
// ===========================

// const obj = { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }

// console.log({ keys: Object.keys(obj) })

// ===========================
//       Object.freeze()
// ===========================

// const config = Object.freeze({ name: 'Config', path: '../file.json' })

// config.name = 'Config2'
// config.version = 1
// delete config.path

// console.log(config)

// ===========================
//   Object.defineProperty()
// ===========================

// const course = {}

// Object.defineProperty(course, 'name', {
//   value: 'Turbo',
//   writable: true,
// })

// console.log(course.name)

// ============================
// Property Getters and Setters
// ============================

// const person = {
//   firstName: 'Turbo',
//   lastName: 'Front',
//   language: 'FA',
//   _age: 1,

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   },

//   get lang() {
//     return this.language.toLowerCase()
//   },

//   set lang(value) {
//     this.language = value.toUpperCase()
//   },

//   get age() {
//     return this._age
//   },

//   set age(value) {
//     this._age = value > 0 ? value : 0
//   },
// }
