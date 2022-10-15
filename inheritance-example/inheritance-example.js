import Bus from "./Bus.js";
import Car from "./Car.js";
import MotorBike from "./MotorBike.js";


const myBus = new Bus('Mercedes')
const myCar = new Car('BMW')
const myMotorBike = new MotorBike('Honda')

console.log(myBus)
console.log(myCar)
console.log(myMotorBike.toString())
myMotorBike.blowHorn()
myMotorBike.accelerator()
myMotorBike.brake()