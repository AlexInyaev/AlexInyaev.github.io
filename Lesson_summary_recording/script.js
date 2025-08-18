document.addEventListener('DOMContentLoaded', function () {
    // Загрузка навигации
    loadNavigation();

    // Инициализация темы
    initTheme();

    // Инициализация ресайзера
    initResizer();

    // Подсветка активной главы
    highlightActiveChapter();
    // Закрытие открытие пунктов меню
    hideItemsSection()
});

function getBasePath() {
    // Определяем базовый путь в зависимости от текущего расположения
    const pathParts = window.location.pathname.split('/');
    if (pathParts.includes('chapters')) {
        return '../../'; // Если мы в папке chapters/sectionX/
    } else if (pathParts[pathParts.length - 1] !== 'index.html') {
        return '../'; // Если мы в корне, но не на index.html
    }
    return './'; // Если мы на index.html в корне
}

function loadNavigation() {
    const navContainer = document.getElementById('navContainer');
    if (!navContainer) return;

    const basePath = getBasePath();
    // Встроенная навигация с корректными относительными путями
    // *********************************navigation**********************************************
    navContainer.innerHTML = `
        <div class="nav-header">
            <div class="current-location">Главная</div>
            <div class="nav-controls">
                <button class="toggle-btn toggle-theme" aria-label="Toggle theme"></button>
                <button class="toggle-btn toggle-nav" aria-label="Toggle navigation"></button>
            </div>
        </div>
        <nav class="nav-menu">

            <div class="section">
                <div class="section-title">Основы</div>
                <ul class="listNav">
                    <li><a href="${basePath}index.html">Главная</a></li>
                    <li><a href="${basePath}chapters/section1/chapter1.html">Введение</a></li>
                    <li><a href="${basePath}chapters/section1/chapter2.html">Установка</a></li>
                </ul>
            </div>

            <div class="section">
                <div class="section-title">Golang</div>
                <ul  class="listNav">
                    <li><a href="${basePath}chapters/Golang/arraysAndSlice.html">Arrays and Slice</a></li>
                </ul>
            </div>

            <div class="section">
                <div class="section-title"> Не Продвинутые темы</div>
                <ul  class="listNav">
                    <li><a href="${basePath}chapters/section2/chapter1.html">Оптимизация</a></li>
                </ul>
            </div>

        </nav>
         <div class="resizer" data-direction="horizontal"></div>
    `;
    // *********************************navigation**********************************************
    // Инициализация кнопок после загрузки навигации
    initNavButtons();
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function initResizer() {
    const resizer = document.querySelector('.resizer');
    if (!resizer) return;

    const navContainer = document.querySelector('.nav-container');
    let isResizing = false;
    let lastX = 0;

    resizer.addEventListener('mousedown', (e) => {
        isResizing = true;
        lastX = e.clientX;
        document.body.style.cursor = 'col-resize';
        navContainer.style.userSelect = 'none';
        document.addEventListener('mousemove', handleResize);
        document.addEventListener('mouseup', stopResize);
    });

    function handleResize(e) {
        if (!isResizing) return;
        const dx = e.clientX - lastX;
        const newWidth = navContainer.offsetWidth + dx;

        if (newWidth > 200 && newWidth < window.innerWidth / 2) {
            navContainer.style.width = `${newWidth}px`;
        }

        lastX = e.clientX;
    }

    function stopResize() {
        isResizing = false;
        document.body.style.cursor = '';
        navContainer.style.userSelect = '';
        document.removeEventListener('mousemove', handleResize);
        document.removeEventListener('mouseup', stopResize);
    }
}

function initNavButtons() {
    const toggleNav = document.querySelector('.toggle-nav'); // Кнопка сворачивания меню
    const toggleTheme = document.querySelector('.toggle-theme'); // Кнопка переключения темы
    const navContainer = document.querySelector('.nav-container'); // Контейнер навигации

    if (toggleNav && navContainer) {
        // Проверяем сохранённое состояние меню
        const navCollapsed = localStorage.getItem('navCollapsed') === 'true';

        // Применяем сохранённое состояние
        if (navCollapsed) {
            navContainer.classList.add('collapsed');
        }

        // Обработчик клика по кнопке
        toggleNav.addEventListener('click', function () {
            // Переключаем класс collapsed
            navContainer.classList.toggle('collapsed');

            // Сохраняем состояние в localStorage
            localStorage.setItem('navCollapsed', navContainer.classList.contains('collapsed'));
        });
    }

    if (toggleTheme) {
        toggleTheme.addEventListener('click', function () {
            // Получаем текущую тему
            const currentTheme = document.documentElement.getAttribute('data-theme');

            // Определяем новую тему (инверсия текущей)
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            // Применяем новую тему
            document.documentElement.setAttribute('data-theme', newTheme);

            // Сохраняем в localStorage
            localStorage.setItem('theme', newTheme);
        });
    }
}

function highlightActiveChapter() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add('active');
            updateCurrentLocation(link);
        }
    });
}

function updateCurrentLocation(activeLink) {
    const currentLocation = document.querySelector('.current-location');
    if (currentLocation) {
        const section = activeLink.closest('.section')?.querySelector('.section-title')?.textContent || 'Раздел';
        const chapter = activeLink.textContent;
        currentLocation.textContent = `${section} / ${chapter}`;
    }
}

function hideItemsSection() {
    let sectionElements = document.querySelectorAll(".section")
    for (let i = 0; i < sectionElements.length; i++) {
        let switcher = true;
        sectionElements[i].addEventListener('click', function () {
            sectionElements[i].lastElementChild
            if (switcher) {
                sectionElements[i].lastElementChild.style.display = "block"
                switcher = false;

            } else {
                sectionElements[i].lastElementChild.style.display = "none"
                switcher = true;
            }
        });
    }
}