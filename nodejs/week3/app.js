const http = require("http");
//const express = require("express"); //function
//console.log(express);
/*const app = express();
app.use(express.json()); // for parsing application/json

/*const cors = require("cors");
app.use(cors());*/

const Mentors = require("./Mentors.js");
const Courses = require("./Courses");

const hyf_mentors = new Mentors("./mentors.json");
const hyf_courses = new Courses();

const bodyParser = require("body-parser");

const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
//routes for courses
app.get("/", (req, res) => {
  res.send("welcome to hyf course app using express");
});
router
  .route("/courses")
  .get((req, res, next) => {
    if (req.query.name) {
      res.send(hyf_courses.getCourseByName(req.query.name));
    } else {
      res.send(hyf_courses.getList());
    }
  })
  .post((req, res) => {
    if (hyf_courses.addCourse(req.body)) {
      res.status(201);
      res.send("course added");
    } else {
      res.status(500);
      res.send("fail to add");
    }
  });
app.delete("/course/:name", (req, res) => {
  res.send(`course deleted ${req.params.name}`);
});

/*app.get("/", (req, res) => {
  res.send("welcome to hyf course app using express");
});
app.get("/courses", (req, res) => {
  const result = hyf_courses.getList();
  res.send(result);
});
app.get("/course/:name", (req, res) => {
  res.send(hyf_courses.getCourseByName(req.params.name));
});

app.post("/courses", (req, res) => {
  if (hyf_courses.addCourse(req.body)) {
    res.status(201);
    res.send("course added");
  } else {
    res.status(400);
    res.send("fail to add");
  }
});*/

//router for mentors
app.get("/", (req, res) => {
  res.send("welcome to hyf mentors app using express");
});
router
  .route("./mentors")
  .get((req, res) => {
    res.send(hyf_mentors.getList());
  })
  .post((req, res) => {
    if (hyf_mentors.addMentor(req.body)) {
      res.status(201);
      res.send("mentor added");
    } else {
      res.status(400);
      res.send("fail to add");
    }
  });
app.delete("/mentor/:name", (req, res) => {
  res.send(`mentor deleted ${req.params.name}`);
});

/*app.get("/mentors", (req, res) => {
  const result = hyf_mentors.getList();
  res.send(result);
});
app.get("/mentor/:name", (req, res) => {
  res.send(hyf_mentors.getMentorsByCourseTitle(req.params.name));
});

app.post("/mentors", (req, res) => {
  if (hyf_mentors.addMentor(req.body)) {
    res.status(201);
    res.send("mentor added");
  } else {
    res.status(400);
    res.send("fail to add");
  }
});*/

app.use("/api", router);
/*const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    res.end("welcome to hyf course");
  } else if (url == "/getList" && req.method == "GET") {
    const result = hyf_courses.getList();
    res.end(JSON.stringify(result));
  } else if (url == "/getList" && req.param("name") && req.method == "GET") {
    const result = hyf_courses.getList();
    res.end("course");
  }
});*/
//console.log(hyf_mentors.getAllMentors());
//console.log(hyf_courses.getList());
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
/*let server = app.listen(3000, function() {
  console.log("server is running");
});*/
app.listen(3000, () => {
  console.log("hyf app is running");
});
