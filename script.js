const aboutBtn = document.getElementById("aboutBtn");
const experienceBtn = document.getElementById("experienceBtn");
const educationBtn = document.getElementById("educationBtn");
const skillsBtn = document.getElementById("skillsBtn");

const aboutSection = document.getElementById("about");
const experienceSection = document.getElementById("experience");
const educationSection = document.getElementById("education");
const skillsSection = document.getElementById("skills");

aboutBtn.addEventListener("click", () => {
  aboutSection.style.display = "block";
  experienceSection.style.display = "none";
  educationSection.style.display = "none";
  skillsSection.style.display = "none";
});

experienceBtn.addEventListener("click", () => {
  aboutSection.style.display = "none";
  experienceSection.style.display = "block";
  educationSection.style.display = "none";
  skillsSection.style.display = "none";
});

educationBtn.addEventListener("click", () => {
  aboutSection.style.display = "none";
  experienceSection.style.display = "none";
  educationSection.style.display = "block";
  skillsSection.style.display = "none";
});

skillsBtn.addEventListener("click", () => {
  aboutSection.style.display = "none";
  experienceSection.style.display = "none";
  educationSection.style.display = "none";
  skillsSection.style.display = "block";
});