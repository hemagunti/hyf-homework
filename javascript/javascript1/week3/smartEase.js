let notes = [];
// Adding notes
function addNote(content,id)
{
    let another = {content,id};
    notes.push(another);
}
addNote("This is note on objects",1);
addNote("This is note on Arrays",2);
addNote("This is note on DOM",3);
addNote("This is note on DataTypes");

// get a note
function getNoteFromId(id)
{
    for(let i=0;i<notes.length;i++)
    { 
        if(notes[i].id === id){
        console.log(notes[i]);
    }else if(typeof id !== "number")
    {
        console.log("Not valid");
    }
    }
    return;
}
getNoteFromId(2);
getNoteFromId(4);

//Get all notes
function getNotes() {
    return notes;
}
getNotes();

//log out notes
function logOutNotesFormatted()
{
    for(let i=0;i<notes.length;i++)
    { 
console.log("The note with id:"+ " "+notes[i].id+" "+"has the following note text:"+" "+ notes[i].content);
}
}
logOutNotesFormatted();
