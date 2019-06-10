const Mentors = require("./Mentors");
const mentors = new Mentors();
class Courses {
  constructor() {
    this.coursesList = [
      {
        name: "NodeJS",
        duration: "5"
      },
      {
        name: "JS",
        duration: "9"
      },
      {
        name: "HTML-CSS",
        duration: "3"
      },
      {
        name: "React",
        duration: "5"
      }
    ];
  }
  getList() {
    this.coursesList.forEach(course => {
      course["mentors"] = mentors.getMentorsByCourseTitle(course.name);
    });
    return this.coursesList;
  }

  getCourseByName(name) {
    return {
      name: name,
      duration: 3
    };
  }

  addCourse(course) {
    if (course.name.length > 1) {
      this.coursesList.push(course);
      return true;
    } else return false;
  }
}

module.exports = Courses;
