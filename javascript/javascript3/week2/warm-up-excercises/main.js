//get array of movies
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(response => response.json())
.then(movies => {
console.log(movies);
getBadMovies(movies);
});

//Array of bad movies
function getBadMovies(movies){
    let badMovies = movies.filter((movie) => {
        return movie.rating < 4;
    })
    console.log("bad movies are :")
    console.log(badMovies);
    getBadMoviesSince2000(badMovies);
}

// Array of Bad movies since year 2000
function getBadMoviesSince2000(badMovies){
    let badMoviesSince2000 = badMovies.filter((badMovie) => {
        return badMovie.year >= 2000;
    })
    console.log("Bad movies since 2000 are :");
    console.log(badMoviesSince2000);
    titlesOfBadMoviesSince2000(badMoviesSince2000);
}

//Array of titles of bad movies since 2000
function titlesOfBadMoviesSince2000(badMoviesSince2000)
{
    let badMovieTitle = badMoviesSince2000.map((badMovieSince2000) => {
        return badMovieSince2000.title;
    })
    console.log("Bad movies titles since 2000");
    console.log(badMovieTitle);
}

/*resolve after 3 sec*/
let promise1 = new Promise(function(resolve) {
    setTimeout(function () {
        resolve('I am called asynchronously after 3 seconds');
    }, 3000);
});
promise1.then(function (result) {
    console.log(result);
})

/*rewrite set time*/
function setTimeOut(resolveAfter) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve("I am called asynchrounously after" +" "+ resolveAfter +" "+ "seconds");
        }, resolveAfter * 1000);
    })
}
setTimeOut(3).then(function(resolveValue) {
    console.log(resolveValue);
})

/*Rewrite geolocation */
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position);

            }, (errmsg) => {
                reject(errmsg)
            })

        } else {
            reject();
        }
    });
}
getCurrentLocation().then((position) => {
    console.log(position);
}).catch((error) => {
    console.log(error);
})

//fetch and waiting
fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(dogs => {
    console.log(dogs);
    return new Promise(function(resolve) {
      setTimeout(() => { 
          resolve(dogs); 
        }, 3000);
    });
  })
  .then(function(dogs) {
    console.log(dogs.message);
    console.log(dogs.status);
  });







