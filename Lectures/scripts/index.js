// Добавление Раздела и обработчиков на пункты меню **************************************************************************

/* как добавить новый раздел создаем разметку, копируем код ниже и изменяем параметры makeMenu(event,ol - полученный по id,'название класса директории','название директории'); 
и еще новые страницы должны иметь такие-же названия что и id li ссылок
 пример rusLess1 и <li id="rusLess1" class="название класса директории"></li>*/

document.querySelector("#Rus").addEventListener("click", () => {
  // document.querySelector("#Rus") = это пункт mainMenu
  parametersDirectory = makeMenu(event, russianMenu, "rusLess", "Russian"); //parametersDirectory = используется для постройки меню 3-го уровня
  addEvents();
});
//
document.querySelector("#Eng").addEventListener("click", () => {
  parametersDirectory = makeMenu(event, englandMenu, "engLess", "England");
  addEvents();
});
document.querySelector("#PHP").addEventListener("click", () => {
  parametersDirectory = makeMenu(event, phpMenu, "phpLess", "PHP");
  addEvents();
});

// обработчик второго уровня - отрисовывает выбранный элемент второго уровня
function makeMenu(event, blockMenu, classDirectory, nameDirectory) {
  let elementForTopMenu = document.createElement("li");
  elementForTopMenu.classList.add("markerSecondLevel");
  elementForTopMenu.innerText = event.srcElement.innerText;
  console.log(event.srcElement.innerText)
  infoBlock.firstElementChild.appendChild(elementForTopMenu);
  elementsStartMenu.style.display = "none";

  blockMenu.style.display = "block";

  objectContent.setAttribute(
    "data",
    `disciplines/${nameDirectory}/pages/${classDirectory}Markup.html`
  );
  console.log(classDirectory, nameDirectory)
  return { classDirectory: classDirectory, nameDirectory: nameDirectory };
}

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
  phpMenu.style.display = "none";
  objectContent.setAttribute("data", "startPage.html");
}

// third level menu навешиваем события
function addEvents() {
 

  for (let item of document.querySelectorAll(
    `.${parametersDirectory.classDirectory}`
  )) {
    item.addEventListener("click", () => {
      drawMainePage(
        event,
        `disciplines/${parametersDirectory.nameDirectory}/pages/${item.id}.html`
      );
    });
  }
}
//обработчик третьего уровня

function drawMainePage(event, addressFrame) {
  if (document.querySelector(".markerThirdLevel")) {
    document.querySelector(".markerThirdLevel").remove();
  }
  let elementForTopMenu = document.createElement("li");
  elementForTopMenu.classList.add("markerThirdLevel");
  elementForTopMenu.innerText = event.srcElement.innerText;
  infoBlock.firstElementChild.appendChild(elementForTopMenu);

  objectContent.setAttribute("data", addressFrame); 
}
// добавление Раздела и обработчиков на пункты меню **************************************************************************

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
// изменение окон

// changeFrame.onmousedown = function (event) {

//   moveAt(event.pageX);

//   function moveAt(pageX) {
//     if (window.innerWidth > wrapper.offsetWidth + 17) {
//       topNavigation.style.width = `${pageX-((window.innerWidth - wrapper.offsetWidth )/2 )+6}px`;
//     } else {
//       topNavigation.style.width = `${pageX}px`;
//     }

//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX);
//   }
//   document.addEventListener("mousemove", onMouseMove);
//   // mousemove mousedown
//   changeFrame.onmouseup = function () {
//     document.removeEventListener("mousemove", onMouseMove);
//     changeFrame.onmouseup = null;
//   };
// };
// // Mobile
