var Car = function (color, convertible) {
  this.speed = 0;
  this.color = color;
  this.convertible = convertible;

  this.decelerate = function (decelRate) {
    this.speed -= decelRate
  }

 this.stopNow = function () {
   this.speed = 0;
 }

}

module.exports = Car;
