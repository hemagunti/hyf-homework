const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomNumber = parseInt(Math.random() * 11);
for (let i = 0; i < numbersArray.length; i++) {
    if (randomNumber === numbersArray[i]) {
        numbersArray.splice(i, 1); //  index number and the number of elements to be removed
    }
}
console.log("Random number is"+" "+randomNumber);
console.log("Array after remove the item"+" "+numbersArray);
