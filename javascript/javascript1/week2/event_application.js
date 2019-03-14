function findDay(eventDay)
{
let dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let today = new Date();
console.log(today);
let todayDay = today.getDay();
var newDate = (todayDay + eventDay) % 7; 
return dayNames[newDate];
}
console.log(findDay(4));


