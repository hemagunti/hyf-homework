function short(words) {
    let shortestWord = words[0]; //  (shortestWord = bil)
    for (var i in words) {
      if (words[i].length < shortestWord.length) {
        shortestWord = words[i];
      }
    }
    return shortestWord; // shortestWord is ø
  }
  const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
  var findShortestWord = short(danishWords);
  console.log("Shortest word is"+" "+findShortestWord); // Returns 'ø'
 