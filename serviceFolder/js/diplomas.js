var arr = [];
arr[0] = 'serviceFolder/img/img004.jpg';
arr[1] = 'serviceFolder/img/img005.jpg';
arr[2] = 'serviceFolder/img/sololearnHTML.jpg';
arr[3] = 'serviceFolder/img/sololearnCSS.jpg';
arr[4] = 'serviceFolder/img/001204.jpg';
arr[5] = 'serviceFolder/img/img006.jpg';

var galleryContainer = document.querySelector('.gallery-container');
var html = '';
var i;
	for ( i=0; i<arr.length; i++) {
		html += `<div class="gallery-item" id="${i}" style="background-image: url(${arr[i]});"onclick="testclick(${i})"></div>`;
	}
galleryContainer.innerHTML = html;

var itemFull = document.querySelector('.gallery-full');

function testclick (id){
itemFull.style.display="block";
itemFull.style.backgroundImage = document.getElementById(id).style.backgroundImage;
}
function galClose() {
	itemFull.style.display="none";
}
