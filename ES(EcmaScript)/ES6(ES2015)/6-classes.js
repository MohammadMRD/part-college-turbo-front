/**
 * ES6 classes are a simple sugar over the prototype-based OO pattern.
 * Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability.
 * Classes support prototype-based inheritance, super calls, instance and static methods and constructors.
 */

class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  static printNameOfClass() {
    console.log('Shape');
  }
}

// class Circle extends Shape {
//   constructor(id, x, y, radius) {
//     super(id, x, y);
//     this.radius = radius;
//   }
// }

// class Rectangle extends Shape {
//   constructor(id, x, y, width, height) {
//     super(id, x, y);
//     this._width = width;
//     this._height = height;
//   }

//   set width(width) {
//     this._width = width;
//   }

//   get width() {
//     return this._width;
//   }

//   set height(height) {
//     this._height = height;
//   }

//   get height() {
//     return this._height;
//   }

//   get area() {
//     return this._width * this._height;
//   }
// }
