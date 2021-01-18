/**
 * Many programming languages have classes that allow defining class properties, such as protected, private, and public. Public properties can be accessed both from outside a class and its subclasses; whereas, protected classes can be accessed only by its subclasses. On the other hand, private properties can only be accessed from inside of a class. Since ES6, JavaScript started supporting class syntax, but private fields are now supported. To define a private property in JavaScript, it should have the hashtag symbol in the prefix.
 */


class Smartphones {
  #phone_color = "silver";

  designer(name) {
    this.name = name;
  }

  get_color() {
    return this.#phone_color;
  }
}
const iPhone = new Smartphones("iPhone");
console.log(iPhone.get_color());
// console.log(iPhone.#phone_color)
