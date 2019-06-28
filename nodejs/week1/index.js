const express = require("express");
//console.log("express");
const app = express();

const Mentors = require("./mentor.js");
const mentorjson = require("./mentors.json");
//console.log(Mentors);
//console.log(mentorjson);
const hyf_mentors = new Mentors(mentorjson);

app.get("/", function(req, res) {
  const allMentors = hyf_mentors.getMentorsList();
  console.log(allMentors);
  const filterMetors = allMentors.filter(q => q.name.startsWith("A"));
  res.send(filterMetors);
});

app.listen(3000);
console.log("server is running");
