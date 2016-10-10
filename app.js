var car = require('./car.js')

var redCar = new car()

var yellowCar = new car (100, 'yellow', false)

yellowCar.stopNow();
console.log(yellowCar.speed);

console.log(yellowCar.convertible);
