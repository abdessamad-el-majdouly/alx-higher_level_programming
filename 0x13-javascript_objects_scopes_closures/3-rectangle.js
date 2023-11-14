#!/usr/bin/node
// JS script to define a class, creates an instance method to print rectangle
class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      throw new Error('Invalid rectangle dimensions');
    }

    this.width = w;
    this.height = h;
  }

  print() {
    for (let count = 0; count < this.height; count++) {
      console.log('X'.repeat(this.width));
    }
  }
}
module.exports = Rectangle;
