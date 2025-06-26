console.log(getUniqueRandomIndex);
console.log(listPhrases);

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
let responseInput = document.querySelector("#response");
// let response = "";
let switcher = true;
let isKeyDownDisabled = false;

// *************************startCategory******************
function startCategory(){ // запускается при старте и при сиене категории в файле selectDictionary
wordData  =   getObjectByIndex(listPhrases, getUniqueRandomIndex()); // wordData - инициализируется в selectDictionary
createCard(wordData)
buttonSend.disabled = false;
isKeyDownDisabled = false;
response.style.backgroundColor = "rgb(255, 255, 255)";
clearfield()
}
startCategory()
// *************************startCategory******************
console.log(wordData);
buttonSend.addEventListener('click',()=>{ sendResponse()});
clearButton.addEventListener('click',()=>{  clearfield()});

document.addEventListener('keydown', (event)=> {
  if (isKeyDownDisabled) return;
  if(event.code == "Enter" ){
    sendResponse();
    responseInput.focus();
} ;
  if(event.code == "ShiftLeft")clearfield();
  if(event.code == "KeyX") console.log(getIterator(0, directoryToLearn.length));
});



function sendResponse(){
console.log("sendResponse Started");
createCard(wordData);

   let responseValue = responseInput.value;
   let response = responseInput
    
    if (responseValue === wordData.wordOrPhrase){ //проверка правильного ответа
      if(switcher){
        response.style.backgroundColor = 'rgb(156, 223, 156)'
         switcher = false
      }else{
        nextWord()
        finishCategory()
         switcher = true
      }
       
        // checkEndArr()
       
    } else {
       
        if ( trays > 0){
            if( finishCategory()) return;
            console.log(false,"-",trays);
            response.style.backgroundColor = "rgb(255, 0, 0)";
            trays--;
        } else {
           
            response.style.backgroundColor = "rgb(255, 255, 255)";
            trays += 3;
            nextWord() 
        } 
        trays == 0 ?  rightResponse(): rightResponse(true);
         console.log( "trays-",trays)
         document.querySelector("#attempts").textContent = trays;   
    }
    
   
 responseInput.focus()
}

 function rightResponse(boolArg = false){
    if(boolArg){
        document.querySelector("#rightResponseSpan").innerText = "- - - - -"
    } else {
        document.querySelector("#rightResponseSpan").innerText = wordData.wordOrPhrase
    }
    
   }

// **********************************************************************************************
// Генерация рандомных чисел
// **********************************************************************************************

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
  console.log("getObjectByIndex - started");
  // Проверяем, что индекс находится в пределах массива
  if (index >= 0 && index < arrayOfObjects.length) {
    return arrayOfObjects[index];
  } else {
    // Можно вернуть null или выбросить ошибку, если индекс невалидный
    return {"translation":"Все слова в данном разделе закончились выберете другой раздел"}; // или throw new Error("Индекс вне границ массива");
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

function createCard(wordData){

   console.log(wordData.translation);
    description.innerText = wordData.translation
}

function clearfield(){
  responseInput.value = "";
}
function nextWord(){
        response.style.backgroundColor = "rgb(255, 255, 255)";
        wordData  =   getObjectByIndex(listPhrases, getUniqueRandomIndex()); // wordData - инициализируется в selectDictionary
        createCard(wordData);
        clearfield();
}
function finishCategory(){
  if(wordData.translation == "Все слова в данном разделе закончились выберете другой раздел"){
          buttonSend.disabled = true;
          isKeyDownDisabled = true;
          clearfield();
           return true
        }
       
}