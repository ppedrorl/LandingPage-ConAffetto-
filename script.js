// Menu Mobile

let btnabrir = document.getElementById("btn-abrir");
let btnfechar = document.getElementById("btnfechar");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu-mobile");

btnabrir.addEventListener("click", () => {
  menu.classList.add("abrir");
  overlay.classList.add("abrir");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir");
  overlay.classList.remove("abrir");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir");
  overlay.classList.remove("abrir");
});

// Scroll Header
const header = document.getElementById("header");

function onScroll() {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", onScroll);
