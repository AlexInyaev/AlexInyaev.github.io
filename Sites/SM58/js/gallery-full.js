var itemFull = document.querySelector('.galleryFull');


function testclick (id){
itemFull.style.display="block";
itemFull.style.backgroundImage = id.style.backgroundImage;
}
function galClose() {
	itemFull.style.display="none";
}
