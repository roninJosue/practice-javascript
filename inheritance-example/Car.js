import Vehicle from "./Vehicle.js";

function Car(make) {
  Vehicle.call(this, 'Car')
  this.make = make
}

Car.prototype = Object.create(Vehicle.prototype)

Car.prototype.noOfWheels = 4

Car.prototype.accelerator = function (){
  console.log('Accelerating Car')
}

Car.prototype.brake = function (){
  console.log('Braking Car')
}

export default Car