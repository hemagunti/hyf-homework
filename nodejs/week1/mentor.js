
class Mentors {
  constructor(mentors) {
    this.mentors = mentors;
  }
  getMentorsList() {
    let mentorList = this.mentors.map(mentor => {
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
/*const hyf_mentors = new Mentors();
const newMentor = {
  name: "Marta",
  courses: ["Git", "Database"]
};
hyf_mentors.getMentorsList();
//hyf_mentors.editMentor(mentor);
hyf_mentors.deleteMentor("Marco");
hyf_mentors.getMentorsList();*/

module.exports = Mentors;
