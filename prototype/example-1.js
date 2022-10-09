/*
const zelda = {
  name: 'Zelda'
}

zelda.greet = function (){
  console.log(`Hello I'm ${this.name}`)
}

const link = {
  name: 'Link'
}

link.greet = function (){
  console.log(`Hello I'm ${this.name}`)
}

zelda.greet()
link.greet()
*/

/*
function Hero(name){
  const hero = {
    name: name
  }

  hero.greet = function (){
    console.log(`Hello I'm ${this.name}`)
  }

  return hero
}

const zelda = Hero('zelda')
zelda.greet()

const link = Hero('link')
link.greet()*/

const heroMethods = {
  greet: function () {
    console.log(`Hello my name is ${this.name}`)
  }
}

/*
function Hero(name){
  const hero = {
    name: name
  }

  hero.greet = heroMethods.greet

  return hero
}

const zelda = Hero('Zelda')
zelda.greet()*/

/*
function Hero(name){
  const hero = Object.create(heroMethods)
  hero.name = name

  return hero
}

const zelda = Hero('Zelda')
zelda.greet()*/

/*
function Hero(name){
  const hero = Object.create(Object.create(Hero.prototype))
  hero.name = name

  return hero
}

Hero.prototype.greet = function () {
  console.log(`I'm a superhero called ${this.name}`)
}

const zelda = Hero('Zelda')
zelda.greet()*/


function Hero(name){
  this.name = name}

Hero.prototype.greet = function () {
  console.log(`I'm a new superhero called ${this.name}`)
}

const zelda = new Hero('Zelda')
zelda.greet()

const link = new Hero('Link')
link.greet()