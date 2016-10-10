var Car = function (color, convertible) {
  this.speed = 0;
  this.color = color;
  this.convertible = convertible;
<<<<<<< HEAD
  this.accelerate = function (num) {
    this.speed += num
  this.setColor = function (newColor){
    this.color = newColor
  }
}}
// this is possible also:
// Car.prototype.accelerate = function (num) {
//   this.speed += num
// }

module.exports = Car
=======

  this.decelerate = function (decelRate) {
    this.speed -= decelRate
  }

 this.stopNow = function () {
   this.speed = 0;
 }

}

module.exports = Car;
>>>>>>> 78fba86a424579973ab24d7fa3c245b429774e66
