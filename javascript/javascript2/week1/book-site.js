let booksTitles = ["Harry_Potter","The_Chocolate_Factory","Winnie_The_Pooh","The_Chronicles_Of_Narnia","Alice_in_Wonderland",
"The_Snail_and_the_Whale","Curious_George","Lyle_finds_his_mother","Owl_Moon","The_tale_of_Peter_Rabbit"];

// Display books
let booksData =[
    {
        title : booksTitles[0],
        language : "english",
        author : "C. S. Lewis",
        id : booksTitles[0].toLowerCase(),
    },
    {
        title : booksTitles[1],
        language : "english",
        author : "Roald Dahl",
        id : booksTitles[1].toLowerCase(),
    },
    {
        title : booksTitles[2],
        language : "english",
        author : "A. A. Milne",
        id : booksTitles[2].toLowerCase(),
    },
    {
        title : booksTitles[3],
        language : "english",
        author : "C. S. Lewis",
        id : booksTitles[3].toLowerCase(),
    },
    {
        title : booksTitles[4],
        language : "english",
        author : "Lewis Carroll",
        id : booksTitles[4].toLowerCase(),
    },
    {
        title : booksTitles[5],
        language : "english",
        author : "Julia Donaldson",
        id : booksTitles[5].toLowerCase(),
    },
    {
        title : booksTitles[6],
        language : "english",
        author : "H. A. Rey",
        id : booksTitles[6].toLowerCase(),
    },
    {
        title : booksTitles[7],
        language : "Danish",
        author : "Bernard Waber",
        id : booksTitles[7].toLowerCase(),
    },
    {
        title : booksTitles[8],
        language : "english",
        author : "Jane Yolen",
        id : booksTitles[8].toLowerCase(),
    },
    {
        title : booksTitles[0],
        language : "english",
        author : "Beatrix Potter",
        id : booksTitles[9].toLowerCase(),
    }
]
// book object
let bookCovers = {
    Harry_Potter : "images/harry-potter.jpg",
    The_Chocolate_Factory : "images/roald.dahl.jpg",
    Winnie_The_Pooh : "images/winnie-the-pooh.jpg",
    The_Chronicles_Of_Narnia :"images/the-chronicles-of-narnia.jpg",
    Alice_in_Wonderland : "images/alice-in-wonderland.jpg",
    The_Snail_and_the_Whale :"images/snail-and-whale.jpg",
    Curious_George :"images/curious-george.jpg",
    Lyle_finds_his_mother : "images/lyle-finds-his-mother.jpg",
    Owl_Moon :"images/owl-moon.jpg",
    The_tale_of_Peter_Rabbit : "images/peter-rabbit.jpg",
}
//console.log(Object.keys(bookCovers));
// Display book titles
function displayBooks() {
    const rootDiv = document.getElementById('root');
    for (let i in booksData) {
        let listElement = document.createElement("ul");
        let ulElement = rootDiv.appendChild(listElement);
        
        //  append li items to ul 
        let listItemTitle = document.createElement("li");
        let appendListTitle = listElement.appendChild(listItemTitle);
        let listItemAuthor = document.createElement("li");
        let appendListAuthor = listElement.appendChild(listItemAuthor);
        let listItemLanguage = document.createElement("li");
        let appendListLanguage = listElement.appendChild(listItemLanguage);
        let listItemId = document.createElement("li");
        let appendListId = listElement.appendChild(listItemId);
        
        // display books
        appendListTitle.textContent = booksData[i].title;
        appendListAuthor.textContent = booksData[i].author;
        appendListLanguage.textContent = booksData[i].language;
        appendListId.textContent = booksData[i].id;
        // create and display image element
        let imgElement = document.createElement('img');
        let appendImgElement = listElement.appendChild(imgElement);
        let imgPath = bookCovers[booksTitles[i]];
        //styles
        listElement.style.listStyle='none';
        ulElement.style.cssFloat = 'left';
        appendListTitle.style.fontSize = '1.5em';
        appendListTitle.style.fontWeight = '600';
        appendImgElement.setAttribute('src',imgPath);
        appendImgElement.setAttribute('width',"200");
        appendImgElement.setAttribute('height',"250");   
    }
    
}
displayBooks();






    
