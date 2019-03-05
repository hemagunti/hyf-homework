/* Declaring house1 variables*/
house1_width = 8;
house1_length = 10;
house1_height = 10;
house1_garden_size = 100;
/* Declaring house2 variables*/
house2_width = 5;
house2_length = 11;
house2_height = 8;
house2_garden_size = 70;

/*Calculating volume with width,height and length*/
peter_volume = house1_width * house1_length * house1_height;
julia_volume = house2_width * house2_length * house2_height;

/* Calculating house price*/
let peter_housePrice = peter_volume * 2.5 * 1000 + house1_garden_size * 300;
console.log(peter_housePrice);
let julia_housePrice = julia_volume * 2.5 * 1000 + house2_garden_size * 300;
console.log(julia_housePrice);

/*Checking if they are paying too much or too little */
if(peter_housePrice < 2500000)
    console.log("Peter is paying too little ");
    else
   console.log("Peter is paying too high");

   if(julia_housePrice < 1000000)
   console.log("Julia is paying too little ");
   else
  console.log("Julia is paying too high");


