const car = require('./module1');

let start = car.startEngine;
let driving = car.drive;
let stopCar = car.breaks;

start();
driving();
stopCar();
