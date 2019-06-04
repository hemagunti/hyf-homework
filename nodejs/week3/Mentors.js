class Mentors {
  constructor() {
    this.mentorsList = [
      {
        name: "Abed",
        course: ["NodeJS", "HTML/CSS", "JS"]
      },
      {
        name: "Benjamin",
        course: ["NodeJS", "React", "JS"]
      },
      {
        name: "Niels",
        course: ["HTML-CSS", "JS", "Database"]
      }
    ];
  }
  getList() {
    return this.mentorsList;
  }
  getMentorsByCourseTitle(courseName) {
    const mentorsName = [];
    this.mentorsList.forEach(mentor => {
      if (mentor.course.indexOf(courseName) > -1) {
        mentorsName.push(mentor.name);
      }
    });
    return mentorsName;
  }
}
/*const fs = require("fs");

class Mentors {
  constructor(fileName) {
    this.fileName = fileName;
  }

  getAllMentors() {
    const fileContent = fs.readFileSync(this.fileName).toString();
    const allMentors = JSON.parse(fileContent);
    return allMentors;
  }

  getByName(name) {
    const allMentors = this.getAllMentors();
    return allMentors.find(q => q.name.toLowerCase() === name.toLowerCase());

    // Returns mentor if found, undefined otherwise
  }

  addNewMentor(newMentor) {
    if (this.getByName(newMentor.name)) {
      return "Mentor already exists";
    }

    const allMentors = this.getAllMentors();
    allMentors.push(newMentor);

    const newFileContent = JSON.stringify(allMentors, null, 4);
    fs.writeFileSync(this.fileName, newFileContent);
    return "Mentor successfuly added";
  }
}*/

module.exports = Mentors;
