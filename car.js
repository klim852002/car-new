
var Car = function (color, convertible) {
  this.speed = 0;
  this.color = color;
  this.convertible = convertible;

  this.accelerate = function (num) {
    this.speed += num
  }
  this.setColor = function (newColor) {
    this.color = newColor
  }

  this.decelerate = function (decelRate) {
      this.speed -= decelRate
  }

  this.stopNow = function () {
     this.speed = 0;
  }

}

// this is possible also:
// Car.prototype.accelerate = function (num) {
//   this.speed += num
// }

module.exports = Car
