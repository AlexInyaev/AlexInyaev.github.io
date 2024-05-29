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
  parametersDirectory = makeRusMenu(event);
  addEvents();
});
document.querySelector("#Eng").addEventListener("click", () => {
  parametersDirectory = makeEngMenu(event);
  addEvents();
});
// обработчик второго уровня

// возвращение стартового меню
document
  .querySelector("#startMenu")
  .addEventListener("click", () => returnToStartMenu());

function returnToStartMenu() {
  let markerSecondLevel = document.querySelector(".markerSecondLevel");
  let markerThirdLevel = document.querySelector(".markerThirdLevel");
  if (markerSecondLevel) markerSecondLevel.remove();
  if (markerThirdLevel) markerThirdLevel.remove();
  elementsStartMenu.style.display = "block";
  englandMenu.style.display = "none";
  russianMenu.style.display = "none";
  objectContent.setAttribute("data", "startPage.html");
}

// third level menu
function addEvents(){
  for (let item of document.querySelectorAll(`.${parametersDirectory.classDirectory}`)) {
    item.addEventListener("click", () => {
      drawMainePage(event, `disciplines/${parametersDirectory.nameDirectory}/pages/${item.id}.html`);
    });
  }
}


function drawMainePage(event, addressFrame) {
  if (document.querySelector(".markerThirdLevel")) {
    document.querySelector(".markerThirdLevel").remove();
  }
  let elementForTopMenu = document.createElement("li");
  elementForTopMenu.classList.add("markerThirdLevel");
  elementForTopMenu.innerText = event.srcElement.innerText;
  infoBlock.firstElementChild.appendChild(elementForTopMenu);
console.log(addressFrame)
  objectContent.setAttribute("data", addressFrame);
}
