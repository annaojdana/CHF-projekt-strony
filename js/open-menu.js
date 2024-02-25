const burgerMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".nav-menu");

// changeClass -  to nazwa naszej funkcji, ktora w index.html będzie dodawać nową klasę do elementu

function changeClass() {
  menu.classList.toggle("open");
  burgerMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("open");
}

// addEventListener - nasłuchuje dany elemnt na stronie

burgerMenu.addEventListener("click", changeClass);
closeMenu.addEventListener("click", changeClass);
