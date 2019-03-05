/*Declaring variables with number data type*/ 
let dogYearOfBirth = 2015;
let dogYearFuture = 2045;
let dogYear = dogYearFuture - dogYearOfBirth;
let humanYear = dogYear * 7;
/*Declaring variable with Boolean type*/
let shouldShowResultInDogYears = false;

/*checking if dogs age is in dog age or in humans age*/
 if(shouldShowResultInDogYears === true)
    console.log("your dog will be" + " "+ dogYear +" "+ "years old in" + " "+ dogYearFuture);
    else
    console.log("your dog will be" + " "+ humanYear +" "+ "years old in" + " "+ dogYearFuture);
 