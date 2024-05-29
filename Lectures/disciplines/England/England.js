// second level menu
function makeEngMenu(event) {
  let elementForTopMenu = document.createElement("li");
  elementForTopMenu.classList.add("markerSecondLevel");
  elementForTopMenu.innerText = event.srcElement.innerText;
  infoBlock.firstElementChild.appendChild(elementForTopMenu);
  elementsStartMenu.style.display = "none";
  englandMenu.style.display = "block";

  objectContent.setAttribute(
    "data",
    "disciplines/England/pages/engLessMarkup.html"
  );
  return {classDirectory:'engLess',nameDirectory:'England'}
}
