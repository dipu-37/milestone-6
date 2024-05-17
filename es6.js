

// template string 

const a =56 ;
const number = [ 3,4,6];
const person = {
    name : 'sakin khan '
}

const message = ` hi , ${person.name} has a: ${a} access to ${number[2]}`
console.log(message)

// arrow function 
const square = x => x*x ;
const sum = (a,b) => a+b;

// destructuring and spread 

const { age, z , ...other } ={ x: 2 ,  y: 5 , z : 3 , name : 'dipu', age: 25 }

const [first, second, ...remaining] = [ 'ram ', 'sam ', ' jadu' , 'modu']