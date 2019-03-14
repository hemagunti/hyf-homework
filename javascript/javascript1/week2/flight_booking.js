function getFullname (firstname, surname, useFormalName)
{
    let formalName = "lord";
    let fullName;
    if(useFormalName)
    {
        fullName = formalName + " " + firstname + " " + surname;
        return fullName;
    }else if(useFormalName === ""){
        alert("Text not given");
        }else{
        fullName = firstname + " " + surname;
        return fullName;
    }   
}
let fullname1 = getFullname ("Hema", "Gunti", true);
let fullname2 = getFullname ("Margrethe", "Alexandrine", false);
let fullname3 =  getFullname ("Hello", "Gunti");
console.log(fullname1);
console.log(fullname2);
console.log(fullname3);