function translateAllAtOnce() {
    let promiseOne = moveElement(document.querySelector('.marks > li:nth-child(1)'), {x: 20, y: 300});
    let promiseTwo = moveElement(document.querySelector('.marks > li:nth-child(2)'), {x: 400, y: 300});
    let promiseThree = moveElement(document.querySelector('.marks > li:nth-child(3)'), {x: 400, y: 20});

    let myPromises = Promise.all([promiseOne, promiseTwo, promiseThree]);
    
    myPromises 
      .then(() => {
        console.log("all items moved");
      })
      .catch(() => {
          console.log("rejection");
      })
}

translateAllAtOnce();
