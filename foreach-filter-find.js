const numbers = [4, 6, 3, 2, 7, 9]

// foreach -> no return  map is return value 


const result = numbers.forEach(n => console.log(n));


// filer -> condition 

const player = [ 30, 34 , 56, 67, 78, 20 ];
const  selected = player.filter(p => p > 40);
console.log(selected);

// find ->  condition is fullfil  - > only one 

const player2 = [ 30, 34 , 56, 67, 78, 20 ];
const  selected2 = player2.find(p => p > 40);
console.log(selected2)