const class07Students = [];
function addStudentToClass(studentName) {

    if (studentName === "") {
        console.log("Name should not be empty");
    } else if (class07Students.indexOf(studentName) > -1) {
        console.log(studentName + "is already in the class");
    } else if (class07Students.length < 6 || studentName === "Queen") {
        class07Students.push(studentName);
    } else {
        console.log("cannot add more than 6 students");
    }
}
addStudentToClass("");
addStudentToClass("Hema");
addStudentToClass("Moksha");
addStudentToClass("Rishi");
addStudentToClass("Sunil");
addStudentToClass("Queen");
console.log(class07Students);

function getNumberOfStudents() {
    return class07Students.length;
}
console.log(getNumberOfStudents()); 
