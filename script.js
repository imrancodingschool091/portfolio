let bodycon=document.querySelector("body");
let boxall = document.querySelectorAll(".white"); // Use ".white" for class selection



 function DarkMode () {
 
  boxall.forEach((e) => {
    e.style.backgroundColor = 'black'; 
    e.style.Border='0'

  });
  
    
 }


 function DayMode(){

  boxall.forEach((e) => {
    e.style.backgroundColor = 'white'; 
    e.style.Border='0'

  });
    console.log('button is working')

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
 

 