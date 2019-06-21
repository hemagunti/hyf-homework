//const http = require("http");
const express = require("express"); //returns function
//console.log(express);
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
/*const app = express();
app.use(express.json()); // for parsing application/json
*/
const Mentors = require("./Mentors.js");
const Courses = require("./Courses.js");
const hyf_mentors = new Mentors("./mentors.json");
const hyf_courses = new Courses("./courses.json");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes for courses
app.get("/", (req, res) => {
  res.send("welcome to hyf course app using express");
});
router
  .route("/courses")
  .get((req, res) => {
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

app.use("/api", router);

app.listen(3000, () => {
  console.log("hyf app is running at 3000");
});
