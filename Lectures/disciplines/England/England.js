

function makeEngMenu(event) {
    currantElement = event.currentTarget;
    if(anchorForAddElement==='') anchorForAddElement = event.srcElement.nextElementSibling;
    infoBlock.firstElementChild.appendChild(event.currentTarget);
    elementsStartMenu.style.display = "none";
    englandMenu.style.display = "block";
  }
  