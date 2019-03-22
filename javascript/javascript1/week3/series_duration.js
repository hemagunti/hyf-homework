const seriesDurations = [
    {
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: 'Sopranos',
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: 'The Wire',
        days: 2,
        hours: 12,
        minutes: 0,
    }
]
// Adding My favourite series into the list//
function addSeries(title, days, hours, minutes) {
    let addNewSeries = { title, days, hours, minutes };
    seriesDurations.push(addNewSeries);
}
addSeries("Little Mermaid", 4, 7, 0);
addSeries("Jungle Book", 5, 21, 0);
console.log(seriesDurations);

//Calculating percentage of average span of 80years //
let totalCalcPercent = 0;
let totalpercentFixed;
let eachseriesFixed;
function seriesDurationOfLife(avgLifeSpan)
{
let totalMin = avgLifeSpan * 365 * 24 * 60; // average days taken
    for (let i = 0; i < seriesDurations.length; i++) {
        // calculating min per series
        let seriesInMins = ((seriesDurations[i].days * 24) * 60) + seriesDurations[i].hours * 60 + seriesDurations[i].minutes;
        // calculating percent of total hours with hours of watched series
        seriesInPercent = (seriesInMins /totalMin) * 100 ;
        eachseriesFixed = seriesInPercent.toFixed(3);
        console.log(seriesDurations[i].title + "  " + "took" + " " + eachseriesFixed +" "+ "%"+" "+ "of my life");
        totalCalcPercent = totalCalcPercent + seriesInPercent;
        totalpercentFixed = totalCalcPercent.toFixed(3);
    }
    return totalpercentFixed;
}
let eachCalcPercent = seriesDurationOfLife(80);
console.log("In total that is"+" "+eachCalcPercent +" "+ "%"+" "+ "of my life");



