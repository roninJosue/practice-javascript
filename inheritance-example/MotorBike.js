import Vehicle from "./Vehicle.js";

function MotorBike(make) {
  Vehicle.call(this, 'MotorBike')
  this.make = make
}

MotorBike.prototype = Object.create(Vehicle.prototype)

MotorBike.prototype.noOfWheels = 2

MotorBike.prototype.accelerator = function () {
  console.log('Accelerating MotorBike')
}

MotorBike.prototype.brake = function () {
  console.log('Braking MotorBike')
}

export default MotorBike