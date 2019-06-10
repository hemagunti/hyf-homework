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
  addMentor(mentor) {
    if (course.name.length > 1) {
      this.mentorsList.push(mentor);
      return true;
    } else return false;
  }
}

module.exports = Mentors;
