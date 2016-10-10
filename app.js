
var fromCar = require('./car')

var yellowCar = new fromCar('yellow', true)
var redCar = new fromCar('red', true)

// yellowCar.accelerate(20)

// console.log('yellowCar speed is ' + yellowCar.speed)

yellowCar.accelerate(50)
console.log('yellowCar new speed is ' + yellowCar.speed)

yellowCar.setColor('black')
console.log('yellowCar new color is ' + yellowCar.color)

console.log('yellow car is' + yellowCar.convertible)

yellowCar.stopNow();
console.log(yellowCar.speed);

console.log(yellowCar.convertible);
