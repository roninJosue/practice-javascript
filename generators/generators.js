function* generator(){
  yield 'Hello';
  yield 'World';

}

function* idMakerWithReset(){
  let id = 1;
  let reset
  while (true){
    debugger;
    reset = yield id;
    if (reset){
      id = 1
    }else{
      id++
    }

  }
}

function* fibGenerator(){
  let a  = 1;
  let b= 1;
  while (true){
    const nextNumber = a + b
    a = b
    b= nextNumber
    yield nextNumber
  }
}

const gen = generator();
const idMaker = idMakerWithReset();
const fib = fibGenerator()
