function sayHello(name, age){
  console.log('Hello!', name);
  console.log('age:', age);

  console.log(`Hello ${name} you are ${age} years old\n`);

  return (`Hello ${name} you are ${age} years old\n`);
}   //function

const calculator = {
  plus: function(a,b){
    return a + b;
  },
  minus: function(a,b){
    return a - b;
  },
  mul: function(a,b){
    return a * b;
  },
  div: function(a,b){
    return a / b;
  },
  power: function(a,b){
    return a ** (b);
  },
}   //object

sayHello('Jun', 17);
sayHello('Amy', 22);

const greetFriends = sayHello("Nahyun", 23);

console.log(greetFriends);

const plus = calculator.plus(5, 7);
const minus = calculator.minus(5, 7);
const mul = calculator.mul(5, 7);
const div = calculator.div(7, 5);
const power = calculator.power(5, 3);
console.log(plus, minus, mul, div, power);