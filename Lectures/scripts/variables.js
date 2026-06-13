// ============================================================================
// ████████  ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ████████
// ============================================================================

const wrapper = document.querySelector("#wrapper");
const infoBlock = document.querySelector("#infoBlock");
const mainMenu = document.querySelector("#mainMenu");
const elementsStartMenu = document.querySelector("#mainMenu");
const hideButton = document.querySelector(".hideButton");
const showMenuButton = document.querySelector(".showMenu");
const topNavigation = document.querySelector(".topNavigation");
const objectContent = document.querySelector("#objectContent");
const changeFrame = document.querySelector("#changeFrame");
const engLess = document.querySelectorAll(".engLess");

let parametersDirectory;

// ============================================================================
// ████████  ШАГ 4: МЕНЮ ТРЕТЬЕГО УРОВНЯ (ДОБАВЛЯТЬ НОВЫЕ РАЗДЕЛЫ СЮДА) ████████
// ============================================================================
// ДЛЯ ДОБАВЛЕНИЯ НОВОГО РАЗДЕЛА: скопируйте строку вида:
//   const MyNewMenu = document.querySelector("#MyNewMenu");
// и замените MyNewMenu и #MyNewMenu на свои значения
// ============================================================================

const englandMenu = document.querySelector("#EnglandMenu");
const russianMenu = document.querySelector("#RussianMenu");
const phpMenu = document.querySelector("#phpMenu");
const GolangMenu = document.querySelector("#GolangMenu");
const DockerMenu = document.querySelector("#DockerMenu");
const GitCourseMenu = document.querySelector("#GitCourseMenu");
const ServerAppMenu = document.querySelector("#ServerAppMenu");
const templateMenu = document.querySelector("#TemplateMenu");

// ⬇️ НОВЫЕ РАЗДЕЛЫ ДОБАВЛЯТЬ СЮДА ⬇️
// const MyNewMenu = document.querySelector("#MyNewMenu");
// ⬆️ НОВЫЕ РАЗДЕЛЫ ДОБАВЛЯТЬ СЮДА ⬆️