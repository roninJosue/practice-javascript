function Hero(name) {
  this.name = name
}

Hero.prototype.greet = function () {
  console.log(`Hello I'm ${this.name}`)
}

const zelda = new Hero('Zelda')
zelda.greet()

const link = new Hero('Link')

zelda.poder = 'Triforce'

console.log(zelda.hasOwnProperty('poder'))
/*
console.log(zelda)
zelda.prototype.omg = function () {
  console.log('omg')
}

console.log(Object.getPrototypeOf(zelda))
console.log(zelda.poder)
console.log(zelda.omg())
console.log(link.poder)*/
