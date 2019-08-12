// select DOM items
// menu button
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuImage = document.querySelector(".menu-image");
const navItems = document.querySelectorAll(".nav-item");
// portfolio modals
const modal1 = document.getElementById("modal-1");
const btn1 = document.getElementById("project-1");
var span1 = document.getElementsByClassName("close-1")[0];

const modal2 = document.getElementById("modal-2");
const btn2 = document.getElementById("project-2");
var span2 = document.getElementsByClassName("close-2")[0];

const modal3 = document.getElementById("modal-3");
const btn3 = document.getElementById("project-3");
var span3 = document.getElementsByClassName("close-3")[0];

// menu button
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuImage.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuImage.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

// modal 1
btn1.onclick = function() {
  modal1.style.display = "block";
};
span1.onclick = function() {
  modal1.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};
// modal 2
btn2.onclick = function() {
  modal2.style.display = "block";
};
span2.onclick = function() {
  modal2.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
// modal 3
btn3.onclick = function() {
  modal3.style.display = "block";
};
span3.onclick = function() {
  modal3.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
