# Writing Readme samples 
Homework for Javascript week2 :
1. Flight booking fullname function :
   Formal fullname
On the flight website the user has the possibility to check a checkbox that indicates if the user wants to be adressed formally. Lets also change getFullname to include support for formal name.

Create an extra parameter useFormalName that is a boolean. If it is true the function should add a Lord in front of the name.

2. Event application

Another customer has contacted us. He works for a secret company that rimes with foogle. The customer works on their calendar application. They need some functionality to help with writing what weekday an event is held.

You specify how many days from today an event is being held. The function then figures out what weekday the event is being held. Here is an example:

Today is Sunday and the event is in 5 days. Therefore the event will be held on a friday.

3. Weather wear

Create a function (that you have to name) that has temperature as parameter. Based on the temperature it should return a string with what the user should wear. You decide what the user should wear based on the temperature.

An example is:

const clothesToWear = youCreateThisFunctionName(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

4. addStudentToClass function

The addStudentToClass should add the studentName to the class07Students array.

But there are some other requirements:

There can be only 6 students in a class. If more students are tried to be added, log out the following: "Cannot add more students to class 07".
The same person cannot be added to the class. If the same person is added to the class, log out the following: 'Student Benjamin is already in the class' where Benjamin is substituted for the studentName.
We are very fond of our Queen in Denmark, so if the Queen is added to the class she should always get a space. Even if the class has been filled out.
You cannot add an empty string to a class
getNumberOfStudents function

getNumberOfStudents should simply return the number of students in the class.

5. addCandy function

Create a function called addCandy. It has two parameters:

candyType - specifies the candy type. Could be 'sweet, chocolate, toffee or chewing-gum'
weight - specifies the weigth of the candy in grams
The function should add the price of the candy to an array called boughtCandyPrices using push
Can i buy more?

Now create a variable called amountToSpend and assign it to Math.random() * 100. You can read about Math.random here

Create a new function called canBuyMoreCandy. This function returns a boolean indicating if the user can buy more candy using the boughtCandy array.

Try use the function by adding some pieces of candy and checking if you can buy more. If the user can buy more candy the console.log the following: "You can buy more, so please do!". If the user cant buy more console.log the following: "Enough candy for you!"

