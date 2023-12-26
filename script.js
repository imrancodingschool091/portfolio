let bodycon=document.querySelector("body");

 function DarkMode () {
    bodycon.style.backgroundColor='black'
    
 }


 function DayMode(){

    bodycon.style.backgroundColor='darkgrey'

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
 

 