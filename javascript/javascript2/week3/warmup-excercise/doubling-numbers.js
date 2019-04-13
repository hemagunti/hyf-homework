let numbers = [1, 2, 3, 4];
let newNumbers = [];
//using filter
newNumbers = numbers.filter(number => number % 2 !== 0);
console.log(newNumbers); // [1,3]
//using map 
doubledNumbers = newNumbers.map(number => number * 2);
console.log(doubledNumbers); //[2,6]

