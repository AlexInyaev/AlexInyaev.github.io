// var arr = [];
// arr[0] = { src: "serviceFolder/img/img001.jpg", cssClass: "position-h" };
// arr[1] = { src: "serviceFolder/img/img002.jpg", cssClass: "position-h" };
// arr[2] = { src: "serviceFolder/img/sololearnHTML.jpg", cssClass: "position-w" };
// arr[3] = { src: "serviceFolder/img/sololearnCSS.jpg", cssClass: "position-w" };
// arr[4] = { src: "serviceFolder/img/sololearnJS.jpg", cssClass: "position-w" };
// arr[5] = { src: "serviceFolder/img/sololearnPHP.jpg", cssClass: "position-w" };
// arr[5] = {
//   src: "serviceFolder/img/sololearnReact-redux.jpg",
//   cssClass: "position-w",
// };
// arr[6] = { src: "serviceFolder/img/img005.jpg", cssClass: "position-h" };
// arr[7] = {
//   src: "serviceFolder/img/sertifikat-uch.jpg",
//   cssClass: "position-h",
// };
// arr[8] = { src: "serviceFolder/img/img006.jpg", cssClass: "position-h" };
// arr[9] = { src: "serviceFolder/img/img007.png", cssClass: "position-w" };
// arr[10] = {
//   src: "serviceFolder/img/osnovy-baz-dannyh_page-0001.jpg",
//   cssClass: "position-h",
// };

// var galleryContainer = document.querySelector(".gallery-container");
// var html = "";
// var i;
// for (i = 0; i < arr.length; i++) {
//   html += `<img class="gallery-item ${arr[i].cssClass}" id="${i}"  src="${arr[i].src}" alt="Диплом или сертификат" onclick="testclick(${i})"></img>`;
// }
// galleryContainer.innerHTML = html;

// var itemFull = document.querySelector(".gallery-full");

// function testclick(id) {
//   itemFull.style.display = "block";
//   itemFull.style.backgroundImage = `url(${document.getElementById(id).getAttribute("src")})`;
// }
// function galClose() {
//   itemFull.style.display = "none";
// }




// ii***************************************************

// Массив изображений галереи (сохранена исходная структура)
var arr = [];
arr[0] = { src: "serviceFolder/img/img001.jpg", cssClass: "position-h" };
arr[1] = { src: "serviceFolder/img/img002.jpg", cssClass: "position-h" };
arr[2] = { src: "serviceFolder/img/sololearnHTML.jpg", cssClass: "position-w" };
arr[3] = { src: "serviceFolder/img/sololearnCSS.jpg", cssClass: "position-w" };
arr[4] = { src: "serviceFolder/img/sololearnJS.jpg", cssClass: "position-w" };
arr[5] = { src: "serviceFolder/img/sololearnPHP.jpg", cssClass: "position-w" };
arr[5] = { src: "serviceFolder/img/sololearnReact-redux.jpg", cssClass: "position-w" };
arr[6] = { src: "serviceFolder/img/img005.jpg", cssClass: "position-h" };
arr[7] = { src: "serviceFolder/img/sertifikat-uch.jpg", cssClass: "position-h" };
arr[8] = { src: "serviceFolder/img/img006.jpg", cssClass: "position-h" };
arr[9] = { src: "serviceFolder/img/img007.png", cssClass: "position-w" };
arr[10] = { src: "serviceFolder/img/osnovy-baz-dannyh_page-0001.jpg", cssClass: "position-h" };

// Инициализация галереи
var galleryContainer = document.querySelector(".gallery-container");
var itemFull = document.querySelector(".gallery-full");
var galleryClose = document.querySelector(".gallery-close");

// Создаем HTML для галереи с анимациями
var html = "";
for (var i = 0; i < arr.length; i++) {
  html += `
    <div class="gallery-item-wrapper" style="animation-delay: ${i * 0.1}s">
      <img class="gallery-item ${arr[i].cssClass}" 
           id="${i}" 
           src="${arr[i].src}" 
           alt="Диплом или сертификат"
           loading="lazy">
      <div class="gallery-item-overlay">
        <button class="view-button" onclick="openGallery(${i})">Просмотр</button>
      </div>
    </div>
  `;
}
galleryContainer.innerHTML = html;

// Добавляем обработчик закрытия
galleryClose.addEventListener('click', galClose);

// Функция открытия галереи с анимацией
function openGallery(id) {
  if (id < 0 || id >= arr.length) return;
  
  // Создаем полноэкранный просмотр с ограничением по размеру
  itemFull.innerHTML = `
    <div class="fullscreen-container">
      <div class="close-button" onclick="galClose()">×</div>
      <div class="fullscreen-image-wrapper">
        <img src="${arr[id].src}" alt="Диплом или сертификат" class="fullscreen-image">
      </div>
      <div class="gallery-nav">
        <button class="nav-button prev" onclick="navigateGallery(${id}, -1)">‹</button>
        <span class="image-counter">${id + 1} / ${arr.length}</span>
        <button class="nav-button next" onclick="navigateGallery(${id}, 1)">›</button>
      </div>
    </div>
  `;
  
  
  
   // Показываем с анимацией
  itemFull.classList.add("active");
  document.body.style.overflow = "hidden";
  
  // Добавляем обработчик клавиатуры
  document.addEventListener('keydown', handleKeyDown);
  
  // Подстраиваем размер изображения после загрузки
  var img = itemFull.querySelector('.fullscreen-image');
  img.onload = function() {
    adjustImageSize(img);
  };
  // На случай если изображение уже загружено
  if (img.complete) adjustImageSize(img);
}
// Функция для корректировки размера изображения
function adjustImageSize(img) {
  var container = itemFull.querySelector('.fullscreen-container');
  var maxWidth = window.innerWidth * 0.9;
  var maxHeight = window.innerHeight * 0.9;
  
  var width = img.naturalWidth;
  var height = img.naturalHeight;
  
  // Если изображение больше экрана - масштабируем
  if (width > maxWidth || height > maxHeight) {
    var ratio = Math.min(maxWidth / width, maxHeight / height);
    img.style.width = (width * ratio) + 'px';
    img.style.height = 'auto';
  } else {
    img.style.width = width + 'px';
    img.style.height = height + 'px';
  }
}

// Функция закрытия галереи с анимацией
function galClose() {
  itemFull.classList.remove("active");
  document.body.style.overflow = "auto";
  document.removeEventListener('keydown', handleKeyDown);
}

// Навигация по галерее
function navigateGallery(currentId, direction) {
  var newId = currentId + direction;
  
  // Зацикливаем навигацию
  if (newId < 0) newId = arr.length - 1;
  if (newId >= arr.length) newId = 0;
  
  openGallery(newId);
}

// Обработчик клавиш
function handleKeyDown(e) {
  if (!itemFull.classList.contains("active")) return;
  
  var currentId = parseInt(itemFull.querySelector('.image-counter').textContent.split('/')[0]) - 1;
  
  switch(e.key) {
    case 'Escape':
      galClose();
      break;
    case 'ArrowLeft':
      navigateGallery(currentId, -1);
      break;
    case 'ArrowRight':
      navigateGallery(currentId, 1);
      break;
  }
}

// Сохраняем исходную функцию для совместимости
function testclick(id) {
  openGallery(id);
}

// Обработчик изменения размера окна
window.addEventListener('resize', function() {
  if (itemFull.classList.contains("active")) {
    var img = itemFull.querySelector('.fullscreen-image');
    if (img) adjustImageSize(img);
  }
});

// Добавляем стили динамически для анимаций
var style = document.createElement('style');
style.textContent = `
  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.3);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
  }
  
  .close-button:hover {
    background: rgba(255,255,255,0.5);
    transform: rotate(90deg) scale(1.1);
  }
  
  .fullscreen-container {
    position: relative; /* Добавляем для позиционирования close-button */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }
  .gallery-item-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s forwards;
  }
  
  @keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
  }
  
  .gallery-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .gallery-item-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .gallery-item-wrapper:hover .gallery-item-overlay {
    opacity: 1;
  }
  
  .gallery-item-wrapper:hover .gallery-item {
    transform: scale(1.05);
  }
  
  .view-button {
    background: #4a6fa5;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  
  .view-button:hover {
    background: #ff7e5f;
    transform: translateY(-3px);
  }
  
  .gallery-full {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
  }
  
  .gallery-full.active {
    opacity: 1;
    visibility: visible;
  }
  
  .fullscreen-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .fullscreen-image-wrapper {
    max-width: 100%;
    max-height: calc(100% - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .fullscreen-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    animation: zoomIn 0.3s ease-out;
  }
  
  @keyframes zoomIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  
  .gallery-nav {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  .nav-button {
    background: rgba(255,255,255,0.7);
    color: #333;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .nav-button:hover {
    background: #4a6fa5;
    color: white;
  }
  
  .image-counter {
    color: white;
    font-size: 16px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }
`;
document.head.appendChild(style);