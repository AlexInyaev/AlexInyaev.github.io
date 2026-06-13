// ================================================================
// Модуль переключения тем оформления
// Подключите этот файл на всех страницах, где нужно переключение тем
// ================================================================

(function () {
    // Функция для применения темы ко всем iframe
    function applyThemeToIframes(theme) {
        const iframes = document.querySelectorAll('iframe, object');
        iframes.forEach(iframe => {
            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                if (iframeDoc) {
                    iframeDoc.documentElement.setAttribute('data-theme', theme);
                }
            } catch (e) {
                // CORS ошибка - игнорируем
            }
        });
    }

    // Функция применения темы
    function applyTheme(theme) {
        // Применяем к текущей странице
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('selectedTheme', theme);

        // Применяем к iframe
        setTimeout(() => applyThemeToIframes(theme), 100);
    }

    // Создаём кнопку переключения
    function createThemeToggle() {
        const button = document.createElement('button');
        button.id = 'globalThemeToggle';
        button.className = 'theme-toggle';
        button.innerHTML = `
            <span class="theme-icon">${localStorage.getItem('selectedTheme') === 'light' ? '☀️' : '🌙'}</span>
            <span>${localStorage.getItem('selectedTheme') === 'light' ? 'Светлая тема' : 'Тёмная тема'}</span>
        `;

        button.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);

            // Обновляем текст кнопки
            const icon = button.querySelector('.theme-icon');
            const text = button.querySelector('span:last-child');
            if (newTheme === 'light') {
                icon.textContent = '☀️';
                text.textContent = 'Светлая тема';
            } else {
                icon.textContent = '🌙';
                text.textContent = 'Тёмная тема';
            }
        });

        document.body.appendChild(button);
        return button;
    }

    // Инициализация
    const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
    applyTheme(savedTheme);

    // Добавляем кнопку, если её нет
    if (!document.getElementById('globalThemeToggle')) {
        // Ждём загрузки DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', createThemeToggle);
        } else {
            createThemeToggle();
        }
    }
})();