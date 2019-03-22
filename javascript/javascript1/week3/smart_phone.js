// Adding activity
let activities = [];

function addActivity(date, activity, duration) {
    activities.push({ date, activity, duration })
}
addActivity("23/7-18", "Youtube", 30);
showStatus(activities);
addActivity("24/7-18", "Netflix", 20);
addActivity("25/7-18", "AmazonPrime", 28);
console.log(activities);
// status
function showStatus(activities) {
    let totalMin = 0;
    let usageLimit = 100;
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
        return;
    }
    else {
        for (let i = 0; i < activities.length; i++) {
            totalMin = totalMin + activities[i].duration;
        }
        console.log("You have added" + " " + activities.length + " " + "activities. They amount to" + " " + totalMin + " " + "min. of us.");
        if (totalMin > usageLimit) {
            console.log("You have reached your limit, no more smartphoning for you!");
        }else 
        {
            console.log("Still you have time to use smart phone");
        }
    }
}

showStatus(activities);