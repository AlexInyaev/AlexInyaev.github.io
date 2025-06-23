// Анимация при правильном ответе
document.getElementById('sendResponse').addEventListener('click', function() {
  const card = document.querySelector('.card');
  card.classList.add('correct-animation');
  setTimeout(() => {
    card.classList.remove('correct-animation');
  }, 500);
});

// Плавное появление элементов при загрузке
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.container > *');
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 * index);
  });
});