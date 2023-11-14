#!/usr/bin/node

// JS script to define a class, creates an instance method to print rectangle
class Rectangle {
  constructor(w, h) {
    if (w === undefined || h === undefined || w <= 0 || h <= 0) {
      return; // create an empty object
    } else {
      this.width = w;
      this.height = h;
    }
  }

  print() {
    if (this.width && this.height) {
      for (let count = 0; count < this.height; count++) {
        console.log('X'.repeat(this.width));
      }
    }
  }
}

module.exports = Rectangle;
