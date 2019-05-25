/******************************\*\*\*******************************
HYF Course: Build a CRUD app for hackyourfuture  
 Constains: Use `class`,`JSON` and Modern javacript syntex (as much as possible)
******************************\*\******************************* \*/

const hyf_courses = new Courses();
const hyf_mentors = new Mentors();

/******************************\*\*\*******************************
Step 1: Write a method that can return list of all HYF courses
******************************\*\******************************* \*/
hyf_courses.getList();

/\*_
Sample Result:
[
{
"title": "NodeJS",
"duration": "5",
"mentors": ["Abed", "Marco", "Radoslaw"]
},
{
"title": "JS",
"duration": "9",
"mentors": ["Abed", "Marco", "Radoslaw"]
  
 },
{
"title": "HTML-CSS",
"duration": "3",
"mentors": ["Abed", "Benjamin"]
}
]
_/

/**************************************\*\*\*\***************************************
Step 2: Write a method that can return one course info
**************************************\*\*************************************** \*/
hyf_courses.getCourse("NodeJS")

/\*_
Sample Result:
{
"title": "NodeJS",
"duration": "5",
"mentors": ["Abed", "Marco", "Radoslaw"]
}
_/

hyf_courses.getCourse("JAVA")

/\*_
Sample Result:
No match found
_/

/**************************************\***************************************
Step 3: Write a method that can add a new course to HYF library
which receive the below course info as an input
************************************\*\*\************************************* \*/
const newCourse = {
"title": "Database",
"duration": "4",
"github": ""
};
hyf_courses.add(newCourse); // this method should add the new student in the list if not exits

hyf_students.getList(); // Verify the student added to the list

/\*_
Sample Result:
[
{
"title": "NodeJS",
"duration": "5",
"mentors": ["Abed", "Marco", "Radoslaw"]
},
{
"title": "JS",
"duration": "9",
"mentors": ["Abed", "Marco", "Radoslaw"]
  
 },
{
"title": "HTML-CSS",
"duration": "3",
"mentors": ["Abed", "Benjamin"]
},
{
"title": "Database",
"duration": "3",
"mentors": []
}
]
_/

/********************************\*********************************
Step 4: Write a method that can edit existing mentor information
******************************\*\*\******************************* \*/

// Look at Sheila's classId has changed to '07'
const mentor = {
"name": "Benjamin",
"courses": ["HTML/CSS", "JS", "Database"],
};

hyf_mentors.editMentor(mentor); // this method should modify student info

/********************************\*********************************
Step 5: Write a method that can delete existing mentor
******************************\*\*\******************************* \*/

hyf_mentors.delete("Abed"); // this method should delete mentor from list
/\*_
Sample Result:
Successfully deleted.
_/

hyf_mentors.delete("Maria");
/\*_
Sample Result:
Unable to perform the action. Not Found!
_/
