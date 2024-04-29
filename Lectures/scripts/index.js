const hideButton = document.querySelector(".hideButton");
const showMenuButton = document.querySelector(".showMenu");
const menuField = document.querySelector(".topNavigation");
function hideMenu() {
  
  console.log(menuField);
  menuField.classList.add("hideElement");
  showMenuButton.classList.remove("hideElement")
}
function showMenu() {
  menuField.classList.remove("hideElement");
  showMenuButton.classList.add("hideElement")
}

hideButton.addEventListener("click", hideMenu);
showMenuButton.addEventListener("click", showMenu);
