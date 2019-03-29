const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
// function to calculate average price
function average(prices)
{
let total = 0;
for(let i in prices)
total += prices[i];
let average = total / prices.length;
console.log("average is"+average);
return average;
}
average(housePrices);

// Function to calculate Median price
function median(prices)
{
 let sortPrices = prices.sort(); // sorting the array
 let  pricesLength = prices.length;
 if (pricesLength % 2 === 0) {
     // average of two middle numbers
   let median = prices[((pricesLength / 2) + ((pricesLength / 2) - 1)) / 2]; // (n/2 + (n/2)-1) / 2
    console.log("Median for even number length is : " + " " + median);
 }else {
     // middle number only
     median = prices[(pricesLength - 1) / 2]; // (n-1)/2
     console.log("Median for odd number length is : " + " " + median);
 }
    return median;
}
median(housePrices);

// function to return average and median values

function medianAverage(average,median){
    let objMedianAvg = {average,median};
    console.log(objMedianAvg);
    return objMedianAvg;
}
medianAverage(average,median);

//




