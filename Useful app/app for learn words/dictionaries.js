
const linuxCommand = [
  { wordOrPhrase: 'ls', translation: "Вывод списка файлов и папок в текущей директории." },
  { wordOrPhrase: 'pwd', translation: "Показывает текущую директорию" },
  { wordOrPhrase: 'man ls', translation: "показывает документацию для команды ls/выход и мануала клавиша - q" },
  { wordOrPhrase: 'man pwd', translation: "показывает документацию для команды pwd/выход и мануала клавиша - q" },
  { wordOrPhrase: 'ls -l', translation: "Выводит все директории с дополнительной информацией (исползаем флаг)" },
  { wordOrPhrase: 'cd', translation: 'Перемещение между папками. если дополнительно нажать Tab то покажет возможные варианты' },
  { wordOrPhrase: 'cd ..', translation: "Вернутся на папку назад" },
  { wordOrPhrase: 'mkdir', translation: "Создание новой папки" },
  { wordOrPhrase: 'touch', translation: "Создание нового файла" },
  { wordOrPhrase: 'rm', translation: " Удаление файлов и папок (с флагом -r для папок)." },
  { wordOrPhrase: 'cp', translation: "Копирование файлов и папок (с флагом -r для папок)" },
  { wordOrPhrase: 'mv', translation: "Перемещение файлов и папок" },
  { wordOrPhrase: 'clear', translation: "Очистить терминал" },
  { wordOrPhrase: 'cat', translation: "Вывод содержимого файла в консоль" },
  { wordOrPhrase: 'Tab', translation: "автодополнение  Упрощение ввода команд и путей" },
];
const windowsCommand = [
  { wordOrPhrase: "dir", translation: "показывает директории" },
  { wordOrPhrase: "cd", translation: "смена директории поддерживается относительный и абсолютный путь" },
  { wordOrPhrase: "cd ./", translation: "выбор папки" },
  { wordOrPhrase: "cd ./Tab", translation: "Показывает попеременно все папки если написать первую букву папки то будет показывать папки которые начинаются с этой буквы" },
  { wordOrPhrase: "cd ..", translation: "шаг назад" },
  { wordOrPhrase: "mkdir name-folder", translation: "создание папки" },
  { wordOrPhrase: "echo hi > index.txt", translation: "создает файл и передает в него hi" },
  { wordOrPhrase: "cat index.txt", translation: "показывает содержимое файла (в cmd не работает)" },
  { wordOrPhrase: "del .\index.txt", translation: "удаляет файл" },
  { wordOrPhrase: "rm .\index.txt", translation: " удаляет файл (в cmd не работает)" },
  { wordOrPhrase: "copy .\folder1 .\folder2", translation: "копирование папки1 в папку2 без содержимого" },
  { wordOrPhrase: "move .\folder1 .\folder2", translation: "перемещение папки1 в папку2 без содержимого" },
  { wordOrPhrase: "cp .\folder1 .\folder2", translation: "копирование папки1 в папку2 без содержимого(в cmd не работает)" },
  { wordOrPhrase: "mv .\folder1 .\folder2", translation: "перемещение папки1 в папку2 с содержимом(в cmd не работает)" },
  { wordOrPhrase: "arrow up/arrow down", translation: "перемещение между введенными командами" },
];
// ***************************************
const Cmd_work_with_git = [
  { wordOrPhrase: 'code .', translation: "открыть vs code", },
  { wordOrPhrase: 'code .1', translation: "открыть vs code1", },
  { wordOrPhrase: 'code .2', translation: "открыть vs code2", },
  { wordOrPhrase: 'code .3', translation: "открыть vs code3", },
  { wordOrPhrase: 'code .4', translation: "открыть vs code4", }
]
const vocabulary = [
  { wordOrPhrase: "apple", translation: "яблоко", },
  { wordOrPhrase: "banana", translation: "банан", },
  { wordOrPhrase: "algorithm", translation: "алгоритм", }
]
// 1) Vocabulary 2-1.1
const Vocabulary_2_1_1 = [
  { wordOrPhrase: 'database administrator', translation: "администратор баз данных" },
  { wordOrPhrase: 'software developer', translation: "разработчик программного обеспечения" },
  { wordOrPhrase: 'helpdesk supervisor', translation: "руководитель службы поддержки" },
  { wordOrPhrase: 'support technician', translation: "технический специалист" },
  { wordOrPhrase: 'project manager', translation: "проект-менеджер" },
  { wordOrPhrase: 'systems analyst', translation: "системный аналитик" },
];
// 2) Vocabulary 2-1.4
const Vocabulary_2_1_4 = [
  { wordOrPhrase: "to run information", translation: "работать с информацией" },
  { wordOrPhrase: "to store information", translation: "хранить информацию" },
  { wordOrPhrase: "a leading provider", translation: "лидирующий поставщик" },
  { wordOrPhrase: "an international provider", translation: "международный поставщик" },
  { wordOrPhrase: "a supplier", translation: "поставщик" },
  { wordOrPhrase: "to supply sth", translation: "поставлять что-либо" },
  { wordOrPhrase: "a manufacturer", translation: "производитель" },
  { wordOrPhrase: "to manufacture sth", translation: "производить что-либо" },
  { wordOrPhrase: "a production facility", translation: "производственная мощность" },
  { wordOrPhrase: "a major market", translation: "крупный рынок" },
  { wordOrPhrase: "a fast-growing company", translation: "быстрорастущая компания" },
  { wordOrPhrase: "a small company", translation: "маленькая компания" },
  { wordOrPhrase: "a medium-sized company", translation: "средняя компания" },
  { wordOrPhrase: "to include sth", translation: "включать что-либо" },
  { wordOrPhrase: "to get feedback", translation: "получать обратную связь" },
  { wordOrPhrase: "an award-winning game", translation: "игра, получившая премию" },
  { wordOrPhrase: "an entertaining product", translation: "развлекательный продукт" },
];
// Vocabulary_2_1_5) дублируем и меняем поля на свои 
const Vocabulary_2_1_5 = [
  { wordOrPhrase: "a rule, rules", translation: "правило, правила (n.)" },
  { wordOrPhrase: "a workplace", translation: "рабочее место (n.)" },
  { wordOrPhrase: "safe", translation: "безопасный (adj.)" },
  { wordOrPhrase: "to keep sth safe", translation: "держать что-л. в безопасности (phr.)" },
  { wordOrPhrase: "to type sth into a computer", translation: "ввести что-л. в компьютер (phr.)" },
  { wordOrPhrase: "punctuation marks", translation: "знаки пунктуации (n.)" },
  { wordOrPhrase: "recently", translation: "недавно (adv.)" },
  { wordOrPhrase: "a reminder/a memo", translation: "напоминание 2 два слова через / (n.)" },
  { wordOrPhrase: "secure", translation: "защищённый (adj.)" },
  { wordOrPhrase: "a character", translation: "знак (в пароле) (n.)" },
  { wordOrPhrase: "frequently", translation: "часто (adv.)" },
];
// Vocabulary_2_1_6) дублируем и меняем поля на свои 
const Vocabulary_2_1_6 = [
  { wordOrPhrase: "a chairperson", translation: "председатель(тот, кто отвечает за организацию собрания) *(n.)" },
  { wordOrPhrase: "an agenda", translation: "повестка (темы для обсуждения) *(n.)" },
  { wordOrPhrase: "in attendance", translation: "список присутствующих *(phr.)" },
  { wordOrPhrase: "to replace sth", translation: "заменить что-л. *(v.)" },
  { wordOrPhrase: "furniture", translation: "мебель *(n.)" },
  { wordOrPhrase: "a suggestion", translation: "предложение *(n.)" },
  { wordOrPhrase: "to make a suggestion", translation: "сделать предложение *(phr.)" },
  { wordOrPhrase: "a chief accountant", translation: "главный бухгалтер *(n.)" },
];

const pattern = [
  { wordOrPhrase: "pattern", translation: "555" },
  { wordOrPhrase: "pattern", translation: "555" },
  { wordOrPhrase: "pattern", translation: "555" },
];


