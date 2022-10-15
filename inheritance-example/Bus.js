import Vehicle from "./Vehicle.js";

function Bus(make) {
  console.log(this)
  Vehicle.call(this, 'Bus')
  this.make = make
}

Bus.prototype = Object.create(Vehicle.prototype)

Bus.prototype.noOfWheels = 6

Bus.prototype.accelerator = function () {
  console.log('Accelerating Bus')
}

Bus.prototype.brake = function () {
  console.log('Braking Bus')
}

export default Bus