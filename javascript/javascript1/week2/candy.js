function candyPrice(type)
{
    if(type === "sweet")
    {
        return 0.5;
    }
    else if (type === "chocolate")
    {
        return 0.7;
    }
    else if ( type === "toffee")
    {
        return 1.1;
    }
    else if ( type === "chewing-gum")
    {
        return 0.03;
    }
console.log(type);
}

let boughtCandyPrices = [];
function addCandy (candyType, weight)
{
    let price = candyPrice(candyType);
    boughtCandyPrices.push(price * weight);
}

addCandy("toffee",10);
addCandy("sweet",15);
addCandy("chocolate",6);

function canBuyMoreCandy(){
    let total = 0;
    let amountToSpend = Math.random() * 100;
    for ( let i = 0; i< boughtCandyPrices.length; i++)
     {
      total =  boughtCandyPrices[i] + total; 
     }
    if(total < amountToSpend)
    {
        console.log("You can buy more, so please do!");
    }else
    {
        console.log("Enough candy for you!");
    }
}
canBuyMoreCandy();
