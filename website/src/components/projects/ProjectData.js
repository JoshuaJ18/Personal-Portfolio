import hangman from "./hangman.jpg";
import student from "./studentRecords.jpg";
import programming from "./programmingClubWebsite.png";
import website from "./website.png";

export const ProjectData = [
  {
    pName: "Programming Club Website",
    description: "This website displays the programming club's projects and gives other students information on how to join. "
    + "The Javascript framwork Vue was used to build this project.",
    img: programming,
    class: "project-items",
  },
  {
    pName: "Student Records Class Project",
    description: "This project was a submission for my Object Oriented Programming class in Java. The program takes information" 
     + "from the user for student records and puts the information within a text file.",
    img: student,
    class: "project-items",
  },
  {
    pName: "Hangman Game Class Project",
    description: "This project was coded in python as a class project submission for my AP Intro to Computer Science Principles" 
    + "class.",
    img: hangman,
    class: "project-items",
  },
  {
    pName: "Peronsal Portfolio Website",
    description: "This project is the website you are currently looking at! It has gone through many iterations, and probably will "
    + "go through more in the future. As of now, it is built in the Javascript framework React.",
    img: website,
    class: "project-items",
  },
]