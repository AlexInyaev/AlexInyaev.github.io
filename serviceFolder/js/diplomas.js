var arr = [];
arr[0] = { src: "serviceFolder/img/img001.jpg", cssClass: "position-h" };
arr[1] = { src: "serviceFolder/img/img002.jpg", cssClass: "position-h" };
arr[2] = { src: "serviceFolder/img/sololearnHTML.jpg", cssClass: "position-w" };
arr[3] = { src: "serviceFolder/img/sololearnCSS.jpg", cssClass: "position-w" };
arr[4] = { src: "serviceFolder/img/sololearnJS.jpg", cssClass: "position-w" };
arr[5] = { src: "serviceFolder/img/sololearnPHP.jpg", cssClass: "position-w" };
arr[5] = {
  src: "serviceFolder/img/sololearnReact-redux.jpg",
  cssClass: "position-w",
};
arr[6] = { src: "serviceFolder/img/img005.jpg", cssClass: "position-h" };
arr[7] = {
  src: "serviceFolder/img/sertifikat-uch.jpg",
  cssClass: "position-h",
};
arr[8] = { src: "serviceFolder/img/img006.jpg", cssClass: "position-h" };
arr[9] = { src: "serviceFolder/img/img007.png", cssClass: "position-w" };
arr[10] = {
  src: "serviceFolder/img/osnovy-baz-dannyh_page-0001.jpg",
  cssClass: "position-h",
};

var galleryContainer = document.querySelector(".gallery-container");
var html = "";
var i;
for (i = 0; i < arr.length; i++) {
  html += `<img class="gallery-item ${arr[i].cssClass}" id="${i}"  src="${arr[i].src}" alt="Диплом или сертификат" onclick="testclick(${i})"></img>`;
}
galleryContainer.innerHTML = html;

var itemFull = document.querySelector(".gallery-full");

function testclick(id) {
  itemFull.style.display = "block";
  itemFull.style.backgroundImage = `url(${document.getElementById(id).getAttribute("src")})`;
}
function galClose() {
  itemFull.style.display = "none";
}
