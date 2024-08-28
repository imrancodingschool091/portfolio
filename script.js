let bodycon=document.querySelector("body");
let boxall = document.querySelectorAll(".white"); // Use ".white" for class selection

let banner=document.querySelector(".banner")

 function DarkMode () {
 
  boxall.forEach((e) => {
    e.style.backgroundColor = 'black'; 
    e.style.Border='0'

        banner.style.backgroundColor="black"


  });
  
    
 }




 

 function DayMode(){

  boxall.forEach((e) => {
    e.style.backgroundColor = 'white'; 
    e.style.Border='0'
     banner.style.backgroundColor="white"
  });
    
 


 }




 const sidebar = document.querySelector(".sideBar");
const menuIcon = document.getElementById('menuIcon');

let flag = 0;
menuIcon.addEventListener("click", (e) => {
  e.preventDefault();

  if (flag === 0) {  // Use `===` for comparison, and fix the assignment operator here
    sidebar.classList.add('open');
    flag = 1;  // Use '=' for assignment
  } else {
    sidebar.classList.remove('open');
    flag = 0;  // Use '=' for assignment
  }
});
 

 