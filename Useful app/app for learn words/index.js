// console.log(getUniqueRandomIndex);
// console.log(listPhrases);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// listPhrases -  массив объектов
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!


// let iterator ;

let trays = 3;
// let arrRandomPos = [];
// let directoryToLearn = Cmd_work_with_git
let description = document.getElementById("description");
let buttonSend = document.getElementById("sendResponse");
let clearButton = document.getElementById("clearButton");
let repeatButton = document.getElementById("repeatButton");
let responseInput = document.getElementById("response");
// let responseValue = '';
let quickAnswer = document.getElementById("quickAnswer");
// let response = "";
let switcher = true;
let isKeyDownDisabled = false;
let yourAnswer = ""


// *************************startCategory******************
function startCategory() { // запускается при старте и при сиене категории в файле selectDictionary
  wordData = getObjectByIndex(listPhrases, getUniqueRandomIndex()); // wordData - инициализируется в selectDictionary
  createCard(wordData)
  buttonSend.disabled = false;
  isKeyDownDisabled = false;
  response.style.border = "3px solid rgb(46 56 75)";
  clearfield()
  trays = 3;
  document.querySelector("#attempts").textContent = trays;
  responseInput.focus();
}
startCategory()
// *************************startCategory******************
buttonSend.addEventListener('click', () => { sendResponse() });
clearButton.addEventListener('click', () => { clearfield() });
quickAnswer.addEventListener('click', () => { sendResponse(true) });
repeatButton.addEventListener('click', () => { sendResponse(false, false) });

document.addEventListener('keydown', (event) => {
  if (isKeyDownDisabled) return;
  if (event.code == "Enter") {
    sendResponse();
    responseInput.focus();
  };
  if (event.ctrlKey && event.key == "x") clearfield();
  // if (event.code == "KeyX") console.log(getIterator(0, directoryToLearn.length));
});



function sendResponse(quickAnswer = false, noRepeat = true) {
  // console.log("sendResponse Started");
  if (quickAnswer) { trays = 1 }
  createCard(wordData);

  let responseValue = lowercaseFirstLetter(responseInput.value); // lowercaseFirstLetter - преобразует первые буквы в нижний регистр костыль для клавиатуры которая делает первые буквы заглавными 
  let response = responseInput
  // console.log(Boolean(responseValue))

  yourAnswer = responseValue;

  // console.log("response = ", responseValue, "=",)
  // console.log("response = ", wordData.wordOrPhrase, "=",)
  if (responseValue === wordData.wordOrPhrase) { //проверка правильного ответа
    if (switcher) {
      response.style.border = '3px solid rgb(156, 223, 156)'
      if (noRepeat) switcher = false
    } else {
      if (noRepeat) nextWord()
      finishCategory()
      response.style.border = "3px solid rgb(46 56 75)";
      switcher = true;
      trays = 3;
      document.querySelector("#attempts").textContent = trays;

    }
  } else {
    if (trays > 0) {
      if (finishCategory()) return;
      response.style.border = "3px solid rgb(255, 0, 0)";
      if (noRepeat) trays--;
    } else {
      if (noRepeat) { response.style.border = "3px solid  rgb(46 56 75)"; } else { response.style.border = "3px solid rgb(255, 0, 0)"; } //для корректной работы повторение
      if (noRepeat) trays += 3;
      if (noRepeat) nextWord();
    }
    trays == 0 ? rightResponse() : rightResponse(true);
    // console.log("trays-", trays)
    document.querySelector("#attempts").textContent = trays;
  }


  responseInput.focus()
}

function rightResponse(boolArg = false) {
  if (boolArg) {
    document.querySelector("#rightResponseSpan").innerText = "- - - - -"
    document.querySelector("#yourAnswer").innerText = "- - - - -";
  } else {
    document.querySelector("#rightResponseSpan").innerText = wordData.wordOrPhrase
    if (yourAnswer) document.querySelector("#yourAnswer").innerText = yourAnswer;
  }

}

// функция для переноса первой буквы в нижний регистр **********************************************************************************************
function lowercaseFirstLetter(str) {
  if (!str) return str; // Проверка на пустую строку
  return str.charAt(0).toLowerCase() + str.slice(1);
}
// **********************************************************************************************
function repeatWord() {
  alert()
}
// ********************************************************


// Пример использования:
// const getUniqueRandom = createUniqueRandomGenerator(10); // Максимальное число 10

// console.log(getUniqueRandom()); // Случайное уникальное число (например, 7)
// console.log(getUniqueRandom()); // Другое уникальное число (например, 3)
// console.log(getUniqueRandom()); // И так далее...

// Когда все числа исчерпаны:
// console.log(getUniqueRandom()); // "Все числа исчерпаны..."

// Сброс:
// console.log(getUniqueRandom(true)); // "Генератор сброшен..."
// console.log(getUniqueRandom()); // Снова можно получать уникальные числа
// ********************************************************


// Получение рандомного объекта
// ********************************************************



function getObjectByIndex(arrayOfObjects, index) {          // arrayOfObjects, index = from  selectDictionary.js
  // console.log("getObjectByIndex - started");
  // Проверяем, что индекс находится в пределах массива
  if (index >= 0 && index < arrayOfObjects.length) {
    return arrayOfObjects[index];
  } else {
    // Можно вернуть null или выбросить ошибку, если индекс невалидный
    return { "translation": "Все слова в данном разделе закончились выберете другой раздел" }; // или throw new Error("Индекс вне границ массива");
  }
}

// Пример использования:


// console.log(getObjectByIndex(people, 1)); // { name: 'Мария', age: 25 }
// console.log(getObjectByIndex(people, 5)); // null (или ошибка, если выбрали этот вариант)

// *******************************************************

// *******************************************************

// function getNewPhrase(arrayOfObjects, getUniqueRandomIndex) {

// let g =   getObjectByIndex(arrayOfObjects, getUniqueRandomIndex())
// console.log(g);
// console.log(g.wordOrPhrase);
// console.log(g.translation);
// createCard(g)
// }

// document.querySelector("#test").addEventListener('click',  ()=>{getNewPhrase(listPhrases, getUniqueRandomIndex)});

// 

function createCard(wordData) {

  // console.log(wordData.translation);
  description.innerText = wordData.translation
}

function clearfield() {
  responseInput.value = "";
  responseInput.focus();
}
function nextWord() {
  response.style.border = "3px solid rgb(46 56 75)";
  wordData = getObjectByIndex(listPhrases, getUniqueRandomIndex()); // wordData - инициализируется в selectDictionary
  createCard(wordData);
  clearfield();
}
function finishCategory() {
  if (wordData.translation == "Все слова в данном разделе закончились выберете другой раздел") {
    buttonSend.disabled = true;
    isKeyDownDisabled = true;
    clearfield();
    return true
  }

}