let courses = require("./courses.json");
let mentors = require("./mentors.json");
//create a class for Courses
class Courses {
  constructor(courses) {
    this.courses = courses;
  }
  getList() {
    let courseList = courses.map(course => {
      return course;
    });
    console.log(courseList);
  }
  getCourse(title) {
    let specificCourse = courses.filter(course => {
      return course.title === title;
    });
    if (specificCourse.length === 0) {
      console.log("No match found");
    } else {
      console.log(specificCourse);
    }
  }
  addNewCourse(newCourse) {
    courses.push(newCourse);
  }
}
//create new course instance
const hyf_courses = new Courses(courses);
//new course
const newCourse = {
  title: "React",
  duration: "5",
  mentors: ["Benjamin"]
};
hyf_courses.getList();
hyf_courses.getCourse("NodeJS");
hyf_courses.addNewCourse(newCourse);
hyf_courses.getList();

/*Create a class for Mentors */
class Mentors {
  constructor(mentors) {
    this.mentors = mentors;
  }
  getMentorsList() {
    let mentorList = mentors.map(mentor => {
      return mentor;
    });
    console.log(mentorList);
  }
  //method to Add new mentor
  addNewMentor(newMentor) {
    this.mentors.push(newMentor);
  }
  //delete method that can delete existing mentor
  deleteMentor(mentorName) {
    let deletedMentor = mentors.filter(mentor => {
      return mentor.name !== mentorName;
    });
    console.log(deletedMentor);
  }
}
//create new mentor instance
const hyf_mentors = new Mentors();
const newMentor = {
  name: "Marta",
  courses: ["Git", "Database"]
};
hyf_mentors.getMentorsList();
//hyf_mentors.editMentor(mentor);
hyf_mentors.deleteMentor("Marco");
hyf_mentors.getMentorsList();
