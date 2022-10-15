function Vehicle(vehicleType) {
  console.log(`vehicleType`)
  console.log(vehicleType)
  console.log(this)
  this.vehicleType = vehicleType
}

Vehicle.prototype.blowHorn = function () {
  console.log('Honk! Honk! Honk!')
}

export default Vehicle