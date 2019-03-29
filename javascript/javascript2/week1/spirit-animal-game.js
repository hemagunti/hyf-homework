//Spirit animal name generator
let spritiAnimalArray = [
    "Copper falcon of Essix.",
    "Amber leopard or Uraza",
    "Bamboo panda of Jhi",
    "Silver wolf of Briggan",
    "Marble swan of Ninani",
    "Obsidian ape of Kovo",
    "Bronze eagle of Halawir",
    "Gerathon the Serpent",
    "Halawir the Eagle",
    "Mulop the Octopus"
];
let container = document.getElementById("container");
 container.style.backgroundColor="#000";
    let btn = document.getElementById('click');
    btn.style.backgroundColor = "rgb(77, 197, 245)";
    btn.addEventListener('mouseover', function () {
    let inputText = document.getElementById('input-text').value;
    //random number
    let randomItem = Math.floor(Math.random() * 10);
    let header = document.getElementById("spirit-animal");
    header.style.color="#fff";
    header.innerHTML = inputText +" "+"-"+" "+spritiAnimalArray[randomItem];
 //
 
})










