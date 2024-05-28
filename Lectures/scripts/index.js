function hideMenu() {
  topNavigation.classList.add("hideElement");
  showMenuButton.classList.remove("hideElement");
}
function showMenu() {
  topNavigation.classList.remove("hideElement");
  showMenuButton.classList.add("hideElement");
}

hideButton.addEventListener("click", hideMenu);
showMenuButton.addEventListener("click", showMenu);
// добавление обработчиков на пункты меню
document.querySelector("#Rus").addEventListener("click", () => {
  makeRusMenu(event);
});
document.querySelector("#Eng").addEventListener("click", () => {
  makeEngMenu(event);
});

// возвращение стартового меню
document
  .querySelector("#startMenu")
  .addEventListener("click", () => returnToStartMenu());

function returnToStartMenu() {
  if(anchorForAddElement!=='') anchorForAddElement.before(currantElement);
  anchorForAddElement = "";
  elementsStartMenu.style.display = "block";
  englandMenu.style.display = "none";
  russianMenu.style.display = "none";
}
