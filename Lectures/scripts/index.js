// ============================================================================
// ████████  ДОБАВЛЕНИЕ РАЗДЕЛА И ОБРАБОТЧИКОВ ████████
// ============================================================================

// Константы для типов ошибок
const ERROR_TYPES = {
  FILE_NOT_FOUND: '📁 Файл не найден',
  DOM_NOT_FOUND: '🔍 Элемент DOM не найден',
  INVALID_PARAMS: '⚠️ Неверные параметры',
  LOAD_ERROR: '🔄 Ошибка загрузки',
  DUPLICATE: '📌 Дублирование'
};

// Функция логирования ошибок
function logError(type, message, details = {}) {
  console.group(`❌ ${type}`);
  console.error(message);
  if (Object.keys(details).length) console.log('Детали:', details);
  console.groupEnd();
}

function logWarning(message, details = {}) {
  console.group(`⚠️ ${message}`);
  if (Object.keys(details).length) console.log('Детали:', details);
  console.groupEnd();
}

// Проверка существования элементов в DOM
function checkElement(element, elementName) {
  if (!element) {
    logError(ERROR_TYPES.DOM_NOT_FOUND, `${elementName} не найден в DOM`);
    return false;
  }
  return true;
}

// ============================================================================
// ████████  ШАГ 5: ОБРАБОТЧИКИ ГЛАВНОГО МЕНЮ (ДОБАВЛЯТЬ НОВЫЕ РАЗДЕЛЫ СЮДА) ████████
// ============================================================================
// ДЛЯ ДОБАВЛЕНИЯ НОВОГО РАЗДЕЛА: скопируйте блок:
//   document.querySelector("#MyNew").addEventListener("click", (event) => {
//     if (!checkElement(MyNewMenu, 'MyNewMenu')) return;
//     parametersDirectory = makeMenu(event, MyNewMenu, "myNewLess", "MyNew");
//     if (parametersDirectory) addEvents();
//   });
// И замените:
//   #MyNew      → на id пункта меню (из ШАГА 2)
//   MyNewMenu   → на переменную из ШАГА 4
//   "myNewLess" → на класс уроков (из ШАГА 3)
//   "MyNew"     → на название папки в disciplines/
// ============================================================================

document.querySelector("#Rus").addEventListener("click", (event) => {
  if (!checkElement(russianMenu, 'russianMenu')) return;
  parametersDirectory = makeMenu(event, russianMenu, "rusLess", "Russian");
  if (parametersDirectory) addEvents();
});

document.querySelector("#Eng").addEventListener("click", (event) => {
  if (!checkElement(englandMenu, 'englandMenu')) return;
  parametersDirectory = makeMenu(event, englandMenu, "engLess", "England");
  if (parametersDirectory) addEvents();
});

document.querySelector("#PHP").addEventListener("click", (event) => {
  if (!checkElement(phpMenu, 'phpMenu')) return;
  parametersDirectory = makeMenu(event, phpMenu, "phpLess", "PHP");
  if (parametersDirectory) addEvents();
});

document.querySelector("#Golang").addEventListener("click", (event) => {
  if (!checkElement(GolangMenu, 'GolangMenu')) return;
  parametersDirectory = makeMenu(event, GolangMenu, "GolangLess", "Golang");
  if (parametersDirectory) addEvents();
});

document.querySelector("#DockerId").addEventListener("click", (event) => {
  if (!checkElement(DockerMenu, 'DockerMenu')) return;
  parametersDirectory = makeMenu(event, DockerMenu, "DockerLess", "DockerFolder");
  if (parametersDirectory) addEvents();
});

document.querySelector("#GitCourseId").addEventListener("click", (event) => {
  if (!checkElement(GitCourseMenu, 'GitCourseMenu')) return;
  parametersDirectory = makeMenu(event, GitCourseMenu, "GitCourseLess", "GitCourse");
  if (parametersDirectory) addEvents();
});

document.querySelector("#ServerApp").addEventListener("click", (event) => {
  if (!checkElement(ServerAppMenu, 'ServerAppMenu')) return;
  parametersDirectory = makeMenu(event, ServerAppMenu, "serverAppLess", "ServerApp");
  if (parametersDirectory) addEvents();
});

document.querySelector("#TemplateId").addEventListener("click", (event) => {
  if (!checkElement(templateMenu, 'templateMenu')) return;
  parametersDirectory = makeMenu(event, templateMenu, "templateLess", "TemplateFolder");
  if (parametersDirectory) addEvents();
});

// ⬇️ НОВЫЕ РАЗДЕЛЫ ДОБАВЛЯТЬ СЮДА ⬇️
// document.querySelector("#MyNew").addEventListener("click", (event) => {
//   if (!checkElement(MyNewMenu, 'MyNewMenu')) return;
//   parametersDirectory = makeMenu(event, MyNewMenu, "myNewLess", "MyNew");
//   if (parametersDirectory) addEvents();
// });
// ⬆️ НОВЫЕ РАЗДЕЛЫ ДОБАВЛЯТЬ СЮДА ⬆️

// ============================================================================
// ████████  ФУНКЦИЯ makeMenu (НЕ ТРЕБУЕТ ИЗМЕНЕНИЙ ПРИ ДОБАВЛЕНИИ РАЗДЕЛОВ) ████████
// ============================================================================

function makeMenu(event, blockMenu, classDirectory, nameDirectory) {
  // Проверка обязательных параметров
  if (!event) {
    logError(ERROR_TYPES.INVALID_PARAMS, 'event не передан');
    return null;
  }
  if (!blockMenu) {
    logError(ERROR_TYPES.INVALID_PARAMS, 'blockMenu не передан');
    return null;
  }
  if (!classDirectory || classDirectory === "") {
    logError(ERROR_TYPES.INVALID_PARAMS, 'classDirectory не указан');
    return null;
  }
  if (!nameDirectory || nameDirectory === "") {
    logError(ERROR_TYPES.INVALID_PARAMS, 'nameDirectory не указан');
    return null;
  }

  const targetElement = event.target || event.srcElement;
  if (!targetElement || !targetElement.innerText) {
    logError(ERROR_TYPES.INVALID_PARAMS, 'Не удалось получить текст пункта меню', { event });
    return null;
  }

  // Удаляем старый маркер второго уровня
  const oldMarkerSecond = document.querySelector(".markerSecondLevel");
  if (oldMarkerSecond) {
    logWarning('Старый маркер второго уровня удалён', { oldText: oldMarkerSecond.innerText });
    oldMarkerSecond.remove();
  }

  let elementForTopMenu = document.createElement("li");
  elementForTopMenu.classList.add("markerSecondLevel");
  elementForTopMenu.innerText = targetElement.innerText;

  if (!infoBlock || !infoBlock.firstElementChild) {
    logError(ERROR_TYPES.DOM_NOT_FOUND, 'infoBlock или его дочерний элемент не найден');
    return null;
  }

  infoBlock.firstElementChild.appendChild(elementForTopMenu);

  if (!elementsStartMenu) {
    logError(ERROR_TYPES.DOM_NOT_FOUND, 'elementsStartMenu не найден');
    return null;
  }
  elementsStartMenu.style.display = "none";

  blockMenu.style.display = "block";

  try {
    const filePath = `disciplines/${nameDirectory}/pages/${classDirectory}Markup.html`;

    if (!objectContent) {
      logError(ERROR_TYPES.DOM_NOT_FOUND, 'objectContent не найден');
      return null;
    }

    objectContent.setAttribute("data", filePath);

    objectContent.onerror = () => {
      logError(ERROR_TYPES.FILE_NOT_FOUND, `Файл не найден: ${filePath}`, {
        classDirectory,
        nameDirectory,
        fullPath: filePath,
        совет: 'Проверьте что файл существует по этому пути'
      });
    };
  } catch (error) {
    logError(ERROR_TYPES.LOAD_ERROR, 'Критическая ошибка при установке пути', {
      error: error.message,
      classDirectory,
      nameDirectory
    });
    return null;
  }

  // Предупреждения о дефолтных значениях (актуально при копировании шаблона)
  if (classDirectory === "templateLess") {
    logWarning('Используется дефолтный classDirectory', {
      значение: 'templateLess',
      рекомендация: 'Замените на свой класс, например "myNewLess"'
    });
  }
  if (nameDirectory === "TemplateFolder") {
    logWarning('Используется дефолтный nameDirectory', {
      значение: 'TemplateFolder',
      рекомендация: 'Замените на название своей папки, например "MyNew"'
    });
  }

  return { classDirectory: classDirectory, nameDirectory: nameDirectory };
}

// ============================================================================
// ████████  ВОЗВРАЩЕНИЕ СТАРТОВОГО МЕНЮ ████████
// ============================================================================

const startMenuButton = document.querySelector("#startMenu");
if (startMenuButton) {
  startMenuButton.addEventListener("click", () => returnToStartMenu());
} else {
  logError(ERROR_TYPES.DOM_NOT_FOUND, 'Кнопка startMenu не найдена');
}

// ============================================================================
// ████████  ШАГ 6: ФУНКЦИЯ returnToStartMenu (ДОБАВЛЯТЬ НОВЫЕ МЕНЮ В МАССИВ) ████████
// ============================================================================

function returnToStartMenu() {
  const markerSecondLevel = document.querySelector(".markerSecondLevel");
  const markerThirdLevel = document.querySelector(".markerThirdLevel");
  if (markerSecondLevel) markerSecondLevel.remove();
  if (markerThirdLevel) markerThirdLevel.remove();

  if (!elementsStartMenu) {
    logError(ERROR_TYPES.DOM_NOT_FOUND, 'elementsStartMenu не найден');
    return;
  }
  elementsStartMenu.style.display = "block";

  // ⬇️ ПРИ ДОБАВЛЕНИИ НОВОГО РАЗДЕЛА ДОБАВЬТЕ СЮДА ЕГО ПЕРЕМЕННУЮ ⬇️
  const allMenus = [
    englandMenu, russianMenu, phpMenu, GolangMenu,
    DockerMenu, GitCourseMenu, templateMenu, ServerAppMenu
    // ⬇️ НОВЫЕ МЕНЮ ДОБАВЛЯТЬ СЮДА ⬇️
    // MyNewMenu
    // ⬆️ НОВЫЕ МЕНЮ ДОБАВЛЯТЬ СЮДА ⬆️
  ];
  // ⬆️ ПРИ ДОБАВЛЕНИИ НОВОГО РАЗДЕЛА ДОБАВЬТЕ СЮДА ЕГО ПЕРЕМЕННУЮ ⬆️

  allMenus.forEach(menu => {
    if (menu) menu.style.display = "none";
  });

  if (!objectContent) {
    logError(ERROR_TYPES.DOM_NOT_FOUND, 'objectContent не найден');
    return;
  }
  objectContent.setAttribute("data", "startPage.html");
}

// ============================================================================
// ████████  ФУНКЦИЯ addEvents (НЕ ТРЕБУЕТ ИЗМЕНЕНИЙ ПРИ ДОБАВЛЕНИИ РАЗДЕЛОВ) ████████
// ============================================================================

function addEvents() {
  if (!parametersDirectory) {
    logError(ERROR_TYPES.INVALID_PARAMS, 'parametersDirectory не определён');
    return;
  }

  const className = `.${parametersDirectory.classDirectory}`;
  const items = document.querySelectorAll(className);

  if (items.length === 0) {
    logWarning(`Нет элементов с классом: ${parametersDirectory.classDirectory}`, {
      classDirectory: parametersDirectory.classDirectory,
      selector: className,
      совет: 'Проверьте что у всех li в меню стоит правильный класс'
    });
    return;
  }

  items.forEach((item, index) => {
    if (!item.id) {
      logWarning(`Элемент ${index} не имеет id`, { элемент: item });
      return;
    }

    const newItem = item.cloneNode(true);
    item.parentNode.replaceChild(newItem, item);

    newItem.addEventListener("click", (e) => {
      const filePath = `disciplines/${parametersDirectory.nameDirectory}/pages/${newItem.id}.html`;
      drawMainePage(e, filePath);
    });
  });
}

// ============================================================================
// ████████  ФУНКЦИЯ drawMainePage (НЕ ТРЕБУЕТ ИЗМЕНЕНИЙ) ████████
// ============================================================================

function drawMainePage(event, addressFrame) {
  if (!event || !addressFrame) {
    logError(ERROR_TYPES.INVALID_PARAMS, 'event или addressFrame не переданы');
    return;
  }

  const targetElement = event.target || event.srcElement;
  if (!targetElement || !targetElement.innerText) {
    logError(ERROR_TYPES.INVALID_PARAMS, 'Не удалось получить текст урока');
    return;
  }

  const oldMarker = document.querySelector(".markerThirdLevel");
  if (oldMarker) oldMarker.remove();

  let elementForTopMenu = document.createElement("li");
  elementForTopMenu.classList.add("markerThirdLevel");
  elementForTopMenu.innerText = targetElement.innerText;

  if (!infoBlock || !infoBlock.firstElementChild) {
    logError(ERROR_TYPES.DOM_NOT_FOUND, 'infoBlock или его дочерний элемент не найден');
    return;
  }
  infoBlock.firstElementChild.appendChild(elementForTopMenu);

  if (!objectContent) {
    logError(ERROR_TYPES.DOM_NOT_FOUND, 'objectContent не найден');
    return;
  }
  objectContent.setAttribute("data", addressFrame);

  objectContent.onerror = () => {
    logError(ERROR_TYPES.LOAD_ERROR, `Ошибка загрузки страницы: ${addressFrame}`, {
      совет: 'Проверьте что файл существует и правильно указан id у пункта меню'
    });
  };
}

// ============================================================================
// ████████  УПРАВЛЕНИЕ МЕНЮ (СКРЫТИЕ/ПОКАЗ) ████████
// ============================================================================

if (!hideButton) {
  logError(ERROR_TYPES.DOM_NOT_FOUND, 'hideButton не найден');
} else {
  hideButton.addEventListener("click", hideMenu);
}

if (!showMenuButton) {
  logError(ERROR_TYPES.DOM_NOT_FOUND, 'showMenuButton не найден');
} else {
  showMenuButton.addEventListener("click", showMenu);
}

if (!topNavigation) {
  logError(ERROR_TYPES.DOM_NOT_FOUND, 'topNavigation не найден');
}

function hideMenu() {
  if (!topNavigation || !showMenuButton) {
    logError(ERROR_TYPES.DOM_NOT_FOUND, 'Элементы для скрытия меню не найдены');
    return;
  }
  topNavigation.classList.add("hideElement");
  showMenuButton.classList.remove("hideElement");
}

function showMenu() {
  if (!topNavigation || !showMenuButton) {
    logError(ERROR_TYPES.DOM_NOT_FOUND, 'Элементы для показа меню не найдены');
    return;
  }
  topNavigation.classList.remove("hideElement");
  showMenuButton.classList.add("hideElement");
}

// ============================================================================
// ████████  ИЗМЕНЕНИЕ РАЗМЕРА ОКНА (НЕ ТРЕБУЕТ ИЗМЕНЕНИЙ) ████████
// ============================================================================

if (!changeFrame) {
  logError(ERROR_TYPES.DOM_NOT_FOUND, 'changeFrame не найден');
} else {
  changeFrame.onmousedown = function (event) {
    if (!event || !event.pageX) {
      logError(ERROR_TYPES.INVALID_PARAMS, 'Не удалось получить координаты мыши');
      return;
    }

    if (!topNavigation || !wrapper) {
      logError(ERROR_TYPES.DOM_NOT_FOUND, 'topNavigation или wrapper не найдены');
      return;
    }

    moveAt(event.pageX);

    function moveAt(pageX) {
      if (window.innerWidth > wrapper.offsetWidth + 17) {
        topNavigation.style.width = `${pageX - (window.innerWidth - wrapper.offsetWidth) / 2 + 6}px`;
      } else {
        topNavigation.style.width = `${pageX}px`;
      }
    }

    function onMouseMove(event) {
      if (event && event.pageX) {
        moveAt(event.pageX);
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    changeFrame.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      changeFrame.onmouseup = null;
    };
  };
}