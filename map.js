const numbers = [4, 6, 3, 2, 7, 9]


// step -01; 

// function doubleit (num){
//     console.log('num now' , num);
//     return num *2 ;
// }

// const result = numbers.map(doubleit);
// console.log(result);

// step -02 

// const double2 = n => n*2;

// const result = numbers.map(double2);
const result = numbers.map(n => n*2);

console.log(result);



// step -03

// const doubled =[];
// for( const num of numbers){
//     const double = num *2;
//     doubled.push(double);
// }
// console.log(doubled)