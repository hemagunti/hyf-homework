function checkTemperature (temperature)
{
    if (temperature > 18)
    {
        return "Shorts and T-shirts";
    }else if (temperature < 18 && temperature > 5)
    {
        return "Jacket";
    }else {
        return "Winter jacket with hat, gloves and scarf";
    }
};
const clothesToWear = checkTemperature(-10);
console.log(clothesToWear);