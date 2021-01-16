/**
 * Arrows are a function shorthand using the => syntax.
 * They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript.
 * They support both statement block bodies as well as expression bodies which return the value of the expression.
 * Unlike functions, arrows share the same lexical this as their surrounding code.
 */

// const evens = [0, 2, 4, 6]
// const odds = evens.map(num => num + 1);
// const pairs = evens.map(num => ({ even: num, odd: num + 1 }));

// console.log({ evens, odds, pairs })


const mahdi = {
  name: "Mahdi",
  friends: ["Mohammad", "Ali"],

  printFriends() {
    this.friends.forEach(function(friend) {

      console.log(this.name + " knows " + friend)
    });
  }
}

mahdi.printFriends()
