const express = require("express"); //function
//console.log(express);
const app = express();
app.use(express.json()); // for parsing application/json

const cors = require("cors");
app.use(cors());

const Mentors = require("./Mentors.js");
const Courses = require("./Courses.js");

const hyf_mentors = new Mentors("./mentors.json");
const hyf_courses = new Courses("./courses.json");
//console.log(hyf_mentors.getAllMentors());
console.log(hyf_courses.getList());
//console.log(hyf_mentors.getAllMentors());

/*//1.a) GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
//Defining Routes using app object

app.get("/numbers/add", function(req, res) {
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const total = firstNumber + secondNumber;
  res.send(`${firstNumber} + ${secondNumber} = ${total}`);
});

//1.b) GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second)
app.get("/numbers/multiply/:first/:second", function(req, res) {
  const firstNumber = parseInt(req.params.first);
  const secondNumber = parseInt(req.params.second);
  const result = firstNumber * secondNumber;
  res.send(firstNumber + " * " + secondNumber + " = " + result);
});

//2.GET /mentors/<name here> - that returns mentor with given name, or "Not found" if not found.
app.get("/mentors", function(req, res) {
  let allMentors = hyf_mentors.getAllMentors();
  res.send(allMentors);
});
app.get("/mentors/:mentorName", function(req, res) {
  const mentorName = req.params.mentorName;
  let searchedMentor = hyf_mentors.getByName(mentorName);
  if (searchedMentor === undefined) {
    res.send("Mentor not found");
  } else {
    res.send(searchedMentor);
  }
});

/*POST /mentors - that adds new mentor. You need to pass new mentor data as JSON in request body 
(Postman can do that), and use middleware `express.json()` to read `req.body`.  */
/*app.post("/mentors", function(req, res) {
  console.log(req.body);
  hyf_mentors.addNewMentor(req.body);
  res.send("Mentor added");
});

/*GET /courses/<name here> - that returns course with given `name`, or "Not found" if not found.*/
/*app.get("/courses", function(req, res) {
  let allCourses = hyf_courses.getAllCourses();
  res.send(allCourses);
});
app.get("/courses/:courseName", function(req, res) {
  const courseName = req.params.courseName;
  let selectedCourse = hyf_courses.getByName(courseName);

  if (selectedCourse === undefined) {
    res.send("Not found");
  } else {
    res.send(selectedCourse);
  }
});

/* POST /courses - that adds new course. You need to pass new course data as JSON in request body (Postman can do that),
and use middleware `express.json()` to read `req.body`.*/
/*app.post("/courses", function(req, res) {
  console.log(req.body);
  hyf_courses.addNewCourse(req.body);
  res.send("Course added");
});*/

// creates the Node.js server at the specified host and port
let server = app.listen(3000, function() {
  console.log("server is running");
});
