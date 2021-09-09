//****** Toggle NavBar  ******

const navToggler = document.querySelector(".hamburguer");
const navList = document.querySelector(".nav__list");

navToggler.addEventListener("click",()=>{
  navList.classList.toggle("active");
})