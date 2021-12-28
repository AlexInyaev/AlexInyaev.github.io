var arr = [];
arr[0] = { src: 'serviceFolder/img/img001.jpg', cssClass: "position-h" };
arr[1] = { src: 'serviceFolder/img/img002.jpg', cssClass: "position-h" };
arr[2] = { src: 'serviceFolder/img/sololearnHTML.jpg', cssClass: "position-w" };
arr[3] = { src: 'serviceFolder/img/sololearnCSS.jpg', cssClass: "position-w" };
arr[4] = { src: 'serviceFolder/img/img005.jpg', cssClass: "position-h" };
arr[5] = { src: 'serviceFolder/img/img006.jpg', cssClass: "position-h" };
arr[6] = { src: 'serviceFolder/img/img007.png', cssClass: "position-w" };

var galleryContainer = document.querySelector('.gallery-container');
var html = '';
var i;
for (i = 0; i < arr.length; i++) {
	html += `<img class="gallery-item ${arr[i].cssClass}" id="${i}"  src="${arr[i].src}" alt="Диплом или сертификат" onclick="testclick(${i})"></img>`
}
galleryContainer.innerHTML = html;

var itemFull = document.querySelector('.gallery-full');

function testclick(id) {
	itemFull.style.display = "block";
	itemFull.style.backgroundImage = `url(${document.getElementById(id).getAttribute('src')})`;
}
function galClose() {
	itemFull.style.display = "none";
}
