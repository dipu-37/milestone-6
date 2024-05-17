

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

// for of use -> array and string ;
// for in use -> Object


// data acces 

const data = [ { id : 1, name : 'dipu ' , address : 'jashore'}]
console.log(data)
console.log(data[0])
console.log(data[0].address)

//
const product ={
    count : 500,
    data :[
        {id : 1 ,  name : 'lenavo laptop', price : 674999 },
        {id : 1 ,  name : 'macbook', price : 1674999 }
    ]
}

console.log( product)
console.log( product.data)
console.log( product.data[1])
console.log( product.data[1].name)

const user = {
    id : 5001,

    name : 'dipu',
    address : {
        first: ' navaron rod ',
        second: 'jashore rod' , 
        thied : 'khulna rode '
    },
    city : 'dakha '

}

const user2 = {
    id : 5001,

    name : 'dipu',
    address : {
        first: ' navaron rod ',
        second: 'jashore rod' , 
        thied : 'khulna rode '
    },
    city : 'dakha '

}

console.log(user)
console.log(user.address.first)
console.log(user2.address.first)