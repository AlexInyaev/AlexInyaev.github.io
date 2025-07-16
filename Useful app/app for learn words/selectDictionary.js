let listPhrases = [{ wordOrPhrase: "выберите словарь", translation: "выберите словарь" }]
let getUniqueRandomIndex = createUniqueRandomGenerator([{ wordOrPhrase: "выберите словарь", translation: "выберите словарь" }].length)
let dictionary = document.querySelector("#dictionary-select");
let wordData = {};

function logSelectedOption(event) {
  event.target.options[event.target.selectedIndex].value
}
document.querySelector('#dictionary-select').addEventListener('change', selectDictionary);
function selectDictionary(event) {
  let selectOptionValue = event.target.options[event.target.selectedIndex].value
  switch (selectOptionValue) {                                           //Суда передается value из select
    // ******************
    case "Cmd_work_with_git":
      listPhrases = Cmd_work_with_git                                     //  В переменную listPhrases присваивается массив со словами
      getUniqueRandomIndex = createUniqueRandomGenerator(listPhrases.length)
      break;
    // ******************
    case "linuxCommand":
      listPhrases = linuxCommand
      getUniqueRandomIndex = createUniqueRandomGenerator(listPhrases.length)
      break;
    // ******************
    case "vocabulary":
      listPhrases = vocabulary
      getUniqueRandomIndex = createUniqueRandomGenerator(listPhrases.length)
      break;
    // ******************
    //  3) - дублируем (case "pattern":) и меняем значения pattern на свои 2-места **********************************
    case "pattern":
      listPhrases = pattern
      getUniqueRandomIndex = createUniqueRandomGenerator(listPhrases.length)
      break;
    // ******************
    case "Vocabulary_2_1_1":
      listPhrases = Vocabulary_2_1_1
      getUniqueRandomIndex = createUniqueRandomGenerator(listPhrases.length)
      break;
    // ******************
    case "Vocabulary_2_1_4":
      listPhrases = Vocabulary_2_1_4
      getUniqueRandomIndex = createUniqueRandomGenerator(listPhrases.length)
      break;
    // ******************
    case "Vocabulary_2_1_5":
      listPhrases = Vocabulary_2_1_5
      getUniqueRandomIndex = createUniqueRandomGenerator(listPhrases.length)
      break;
    // ******************
    case "Vocabulary_2_1_6":
      listPhrases = Vocabulary_2_1_6
      getUniqueRandomIndex = createUniqueRandomGenerator(listPhrases.length)
      break;
    // ******************
    default:
      alert("Нет таких значений");
  }
  startCategory()


  //  createCard(listPhrases  )

  //return [dictionary, createUniqueRandomGenerator(dictionary.length)] // from  createUniqueRandomGenerator.js

}


// let listPhrases  = selectDictionary()[0]
// let getUniqueRandomIndex  = selectDictionary()[1]