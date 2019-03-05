/*Declaring variables with Array */ 
let firstWords = ["Cascade","Fireball","Fusion","Hades","Indigo","Jupiter","Omega","Awesome","Skyhawks","Titan"];
let secondWords = ["Vikings","Voyager","Gemini","Eagle","Cyclone","Darwin","Casanova","Peacocks","Mango","Matadoors"];
/*Calculating random number*/ 
const randomNumber = Math.floor(Math.random() * 10);
let startupName = (firstWords[randomNumber] + secondWords[randomNumber]).length;
console.log("The startup name is:" + firstWords[randomNumber ] + " " + secondWords[randomNumber] + " "+"contains"+" "+startupName+" "+"characters" );

