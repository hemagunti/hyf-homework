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

/*const fs = require("fs");

class Courses {
  constructor(fileName) {
    this.fileName = fileName;
  }
  /*getList() {
    this.fileName.forEach(course => {
      course['mentors']=["Abed","Marco","Radoslaw"];
    })
    return this.fileName;
  }*/

/*getList() {
    const fileContent = fs.readFileSync(this.fileName).toString();
    const allCourses = JSON.parse(fileContent);
    return allCourses;
  }

  getByName(name) {
    const allCourses = this.getAllCourses();
    return allCourses.find(q => q.name.toLowerCase() === name.toLowerCase());

    // Returns course if found, undefined otherwise
  }

  addNewCourse(newCourse) {
    if (this.getByName(newCourse.name)) {
      return "Course already exists";
    }

    const allCourses = this.getAllCourses();
    allCourses.push(newCourse);

    const newFileContent = JSON.stringify(allCourses, null, 4);
    fs.writeFileSync(this.fileName, newFileContent);
    return "Course successfuly added";
  }
}*/

module.exports = Courses;
