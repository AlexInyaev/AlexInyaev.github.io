let transit = 12; //переменная для переключения календаря
let timeSwitch = true,
  forTimer = 1000, //отвечает за частоту отрисовки
  aboutTime = document.querySelector(".aboutTime"), //получаем ссылку на кнопку
  reallyTime = document.querySelector(".reallyTime"),
  fictionalTime = document.querySelector(".fictionalTime");

reallyTime.onclick = funcTimeSwitch; //навешиваем событие
reallyTime.style.backgroundColor = "#FFA500"; //меняем цвет кнопки
fictionalTime.onclick = funcTimeSwitch; //навешиваем событие

function funcTimeSwitch(event) {
  if (event.target.classList[0] === "reallyTime") {
    timeSwitch = true; //исползуется для переключения между временами
    forTimer = 1000; //отвечает за частоту отрисовки
    aboutTime.innerHTML = "Реальное время";
    fictionalTime.style.backgroundColor = "#EFEFEF";
    reallyTime.style.backgroundColor = "#FFA500";
    transit = 12; //переменная для переключения календаря задает сколько месяцев в году
    chengTime(currentYear, currentMonth, today, nowDate, transit); //функция запуска календаря
  } else if (event.target.classList[0] === "fictionalTime") {
    timeSwitch = false;
    forTimer = 682; //отвечает за частоту отрисовки отрисовывается чаще т.к вымошленое время идет быстрее
    aboutTime.innerHTML = "Выдуманное время";
    reallyTime.style.backgroundColor = "#EFEFEF";
    fictionalTime.style.backgroundColor = "#FFA500";
    transit = 16; //переменная для переключения календаря задает сколько месяцев в году
    chengTime(currentYear, currentMonth, today, nowDate, transit); //функция запуска календаря
  }
}

// ***************************************************************************************************************************************
function makeClock() {
  let canvas = document.getElementById("canvas"); //ссылка на элемент canvas
  let ctx = canvas.getContext("2d"); //задаем 2д контекст
  ctx.strokeRect(0, 0, canvas.width, canvas.height); //рисует прямоугольник

  // Переменные для смены времяни
  let amountPointM = 0,
    amountPointMinAll = 0,
    amountPointThAll = 0,
    divisorMinutes = 0,
    divisorHours = 0;
  if (timeSwitch) {
    amountPointM = 5;
    amountPointMinAll = 60;
    amountPointThAll = 12;
    divisorMinutes = 6;
    divisorHours = 30;
  } else {
    amountPointM = 4;
    amountPointMinAll = 64;
    divisorMinutes = 5.625;
    amountPointThAll = 16;
    divisorHours = 22.5;
  }

  //Расчет координат центра и радиуса часов
  let radiusClock = canvas.width / 2 - 10;
  let xCenterClock = canvas.width / 2;
  let yCenterClock = canvas.height / 2;
  let pi = Math.PI;

  //Очистка экрана.
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //Рисуем контур часов
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * pi, true); //окружность часов
  ctx.moveTo(xCenterClock, yCenterClock);
  ctx.stroke();
  ctx.closePath();

  //Рисуем рисочки часов
  let radiusNum = radiusClock - 10; //Радиус расположения рисочек
  let radiusPoint;
  for (let tm = 0; tm < amountPointMinAll; tm++) {
    if (tm % amountPointM == 0) {
      radiusPoint = 5;
    } else {
      radiusPoint = 2;
    } //для выделения часовых рисочек
    let xPointM =
      xCenterClock +
      radiusNum * Math.cos(-divisorMinutes * tm * (pi / 180) + pi / 2); // расчет кординат рисок по формуле получения декартовых координат из полярных
    let yPointM =
      yCenterClock -
      radiusNum * Math.sin(-divisorMinutes * tm * (pi / 180) + pi / 2);
    ctx.beginPath(); //начинаем путь
    ctx.arc(xPointM, yPointM, radiusPoint, 0, 2 * pi, true); //рисуем окружность
    ctx.stroke(); //обводка
    ctx.fillStyle = "#FFA500"; //делаем заливку
    ctx.fill();
    ctx.closePath(); //закрываем путь
  }

  //Оцифровка циферблата часов
  for (let th = 1; th <= amountPointThAll; th++) {
    ctx.beginPath();
    ctx.font = "bold 25px sans-serif";
    let xText =
      xCenterClock +
      (radiusNum - 30) * Math.cos(-divisorHours * th * (pi / 180) + pi / 2); // расчет кординат рисок по формуле получения декартовых координат из полярных
    let yText =
      yCenterClock -
      (radiusNum - 30) * Math.sin(-divisorHours * th * (pi / 180) + pi / 2);

    if (th <= 9) {
      ctx.strokeText(th, xText - 5, yText + 10); //отрисовка цифр
    } else {
      ctx.strokeText(th, xText - 15, yText + 10);
    }
    ctx.stroke();
    ctx.closePath();
  }

  //Рисуем стрелки
  let lengthSeconds = radiusNum - 10; //длинна стрелок
  let lengthMinutes = radiusNum - 15;
  let lengthHour = lengthMinutes / 1.5;
  let d = new Date(); //Получаем экземпляр даты

  let t_sec, t_min, t_hour;
  if (timeSwitch) {
    t_sec = 6 * d.getSeconds(); //Определяем угол для секунд
    t_min = 6 * (d.getMinutes() + (1 / 60) * d.getSeconds()); //Определяем угол для минут
    t_hour = 30 * (d.getHours() + (1 / 60) * d.getMinutes()); //Определяем угол для часов
  } else {
    let t = d.getTime(); //получаем дату в миллисекундах начиная с 01.01.1970
    let hours = Math.floor((t / (682 * 64 * 64)) % 32), //вымошленое  время по гринвечу
      minutes = Math.floor((t / (682 * 64)) % 64),
      seconds = Math.floor((t / 682) % 64);

    t_sec = divisorMinutes * seconds; //Определяем угол для секунд
    t_min = divisorMinutes * (minutes + (1 / 64) * seconds); //Определяем угол для минут
    t_hour = divisorHours * (hours + (1 / 64) * minutes); //Определяем угол для часов
  }

  //Рисуем секунды
  ctx.beginPath();
  ctx.strokeStyle = "#FF0000";
  ctx.moveTo(xCenterClock, yCenterClock);
  ctx.lineTo(
    xCenterClock + lengthSeconds * Math.cos(pi / 2 - t_sec * (pi / 180)),
    yCenterClock - lengthSeconds * Math.sin(pi / 2 - t_sec * (pi / 180)),
  );
  ctx.stroke();
  ctx.closePath();

  //Рисуем минуты
  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 3;
  ctx.moveTo(xCenterClock, yCenterClock);
  ctx.lineTo(
    xCenterClock + lengthMinutes * Math.cos(pi / 2 - t_min * (pi / 180)),
    yCenterClock - lengthMinutes * Math.sin(pi / 2 - t_min * (pi / 180)),
  );
  ctx.stroke();
  ctx.closePath();

  //Рисуем часы
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.moveTo(xCenterClock, yCenterClock);
  ctx.lineTo(
    xCenterClock + lengthHour * Math.cos(pi / 2 - t_hour * (pi / 180)),
    yCenterClock - lengthHour * Math.sin(pi / 2 - t_hour * (pi / 180)),
  );
  ctx.stroke();
  ctx.closePath();

  //Рисуем центр часов
  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#ffffff";
  ctx.lineWidth = 3;
  ctx.arc(xCenterClock, yCenterClock, 5, 0, 2 * pi, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  return;
}

let timerClock = window.setInterval(() => {
  makeClock();
}, 00);

// ===========================================================================================================
// ================================================= ПРОГРАММИРОВАНИЕ КАЛЕНДАРЯ   ==========================================================
// ===========================================================================================================
function getParameters(inputYear, forMonth) {
  //Футкция которая получает требуемый год и месяц и возвращает параметры этого года: високосные или нет, какой первый день месяца, год, кол-во дней в месяце, массив дней недели,название месяца
  //точка отсчета 1972 год
  let year = 0,
    arrStartDays = [0, 6, 2, 3, 6, 1, 4, 6, 2, 5, 7, 3, 5], //начало каждого месяца 1972 года
    arrAmountDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], //кол-во дней в месяце
    arrDays = ["Пн", "Вт", "Ср", "ЧТ", "Пт", "Сб", "Вс"],
    arrMonth = [
      "",
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    monthName = arrMonth[forMonth], //выбор названия месяца в переменной forMonth хронится номер текущего месяца
    startDay = arrStartDays[forMonth], //выбор стортового дня для расчета
    amountDays = arrAmountDays[forMonth], //кол -во дней в месце
    iterLeapYears = 4,
    leapYearsBull,
    dayStart,
    out = {};

  if (forMonth > 2) {
    /*т.к в високосные годы из за дополнительного дня в феврале начало месецев смещается на один день начиная с марта а январь и февраль 
                                            только на следуюшей год логика меняется чтобы их разделить используем 3 блока   if этот первый                                                                                                                           */
    dayStart = startDay - 2;
  } else {
    dayStart = startDay - 1;
  }

  for (let i = 1972; i <= inputYear; i++) {
    //цикл переберает годы с 1972 по заданный нами год

    if (iterLeapYears % 4 == 0) {
      //iterLeapYears инкриментируется  ниже в коде и когда она кратна 4 условие верно это соответствеут весокосному году
      leapYearsBull = true; // здесь мы получаем в переменную leapYearsBull true это нам пригодится для отрисовки весокосного февраля
      if (forMonth > 2) {
        //второй блок описание выше
        dayStart += 1;
      }
    } else {
      leapYearsBull = false;
    }

    if ((iterLeapYears - 1) % 4 == 0) {
      //нижнии два блока иф вычесляют с какого дня будет начинатся год это поможет при отрисовки календаря
      if (forMonth > 2) {
        //третий блок описание выше
        dayStart++;
      } else {
        dayStart += 2;
      }
    } else {
      dayStart++;
    }

    if (dayStart == 8) {
      dayStart = 1;
    } else if (dayStart == 9) {
      dayStart = 2;
    }

    year = i;
    iterLeapYears++;
  }

  if (leapYearsBull && forMonth == 2) {
    amountDays = 29;
  } //если год високосный и месяц февраль мы задаем число дней 29

  out.leapYearsBull = leapYearsBull; //кладем значения в объект out
  out.dayStart = dayStart; //начало месяца
  out.year = year; //год
  out.amountDays = amountDays; //кол-во дней в месяце
  out.arrDays = arrDays; //массив дней
  out.monthName = monthName; //название месяца

  return out; //возвращаем out
}
//  ****************************************************************************** getFanParameters ***************************************************************
//расчет параметров для вдуманного календаря
function getFanParameters(inputYear, forMonth) {
  //Футкция которая получает требуемый год и месяц и возвращает параметры этого года: високосные или нет, какой первый день месяца, год, кол-во дней в месяце, массив дней недели,название месяца

  let arrFanDays = ["Me", "Ve", "Ti", "Ma", "Jo", "Sa", "Ur", "Ne", "Pl"];
  let arrFanMonth = [
    "",
    "Einnum",
    "Tveyrus ",
    "Trirum ",
    "Fhorirus ",
    "Fimmum ",
    "Sextum ",
    "Scheus ",
    "Attum ",
    "Nius",
    "Tium ",
    "Ellefum ",
    "Tolfus ",
    "Terettanum ",
    "Fhortanus  ",
    "Fimmtanum ",
    "Sextanums",
  ];
  let arrFanStartDays = [0, 1, 9, 9, 8, 8, 7, 6, 6, 5, 5, 4, 3, 3, 2, 2, 3];
  let arrFanAmountDays = [
    0, 26, 27, 26, 27, 26, 26, 27, 26, 27, 26, 26, 27, 26, 27, 26, 26,
  ];

  let year = 0,
    monthName = arrFanMonth[forMonth],
    startDay = arrFanStartDays[forMonth],
    amountDays = arrFanAmountDays[forMonth],
    iterLeapYears = 2,
    leapYearsBull,
    dayStart,
    out = {};

  dayStart = startDay;

  for (let i = 1972; i <= inputYear; i++) {
    //цикл переберает годы с 1972 по заданный нами год

    if (iterLeapYears % 2 == 0) {
      //iterLeapYears инкриментируется  ниже в коде и когда она кратна 2 условие верно это соответствеут весокосному году
      leapYearsBull = true; // здесь мы получаем в переменную leapYearsBull true это нам пригодится для отрисовки весокосного года
    } else {
      leapYearsBull = false;
    }

    if ((iterLeapYears - 1) % 2 == 0) {
      //нижнии два блока иф вычесляют с какого дня будет начинатся месяц это поможет при отрисовки календаря

      dayStart += 2;
    } else {
      dayStart++;
    }

    if (dayStart == 10) {
      dayStart = 1;
    } else if (dayStart == 11) {
      dayStart = 2;
    }

    year = i;
    iterLeapYears++;
  }

  if (leapYearsBull && forMonth == 16) {
    amountDays = 27;
  } //если високосный год и 16 месяц то кол-во дней 27

  out.leapYearsBull = leapYearsBull; //кладем значения в объект out
  out.dayStart = dayStart; //начало месяца
  out.year = year; //год
  out.amountDays = amountDays; //кол-во дней в месяце
  out.arrDays = arrFanDays; //массив дней
  out.monthName = monthName; //название месяца

  return out; //возвращаем out
}
//  ****************************************************************************** getFanParameters ***************************************************************
// ************************************************************************************************
function drowCalendar(
  amountDays,
  arrDays,
  startMonth,
  monthName,
  year = "2025",
) {
  //рисует календарь входные параметры: кол-во дней в месяце, массив дней ,день начала месяца,имя месяца, текущий год

  document.querySelector("#choiceYear").value = year; //задаем значение года по умолчанию

  let days = 1; //для отрисовки дней месяца

  document.querySelector(".monthName").innerHTML = monthName; //отрисовка названия месяца
  let table = document.createElement("table"); //создаем таблицу
  table.setAttribute("id", "t");

  let tr = document.createElement("tr"); //создаем ряд таблици

  for (let i = 0; i < arrDays.length; i++) {
    //циклом собираем ячейки таблици с названиями дней в ряд
    let th = document.createElement("th"); //обозначение дней недели
    th.innerHTML = arrDays[i]; //добовляем в ячейку заголовка
    tr.appendChild(th);
  }

  table.appendChild(tr); //кладем ряд таблици в таблицу

  while (days <= amountDays) {
    //здесь тагже создаются ячейки таблици только уже с числами
    widthWeek = arrDays.length;
    let tr = document.createElement("tr");

    while (widthWeek > 0) {
      let td = document.createElement("td");
      if (startMonth - 1 > 0) {
        td.innerHTML = "";
        startMonth--;
      } else {
        td.innerHTML = days;
        days++;
      }

      widthWeek--;
      tr.appendChild(td);
      if (days > amountDays) {
        break;
      } //когда все дни прописаня прекращает цикл
    }
    table.appendChild(tr); //кладем ряд таблици в таблицу
  }
  document.querySelector("#t").replaceWith(table); //подменяем таблицу в дом дереве на нашу
}

// *****************************************************************************************************

let nowDate = new Date(); //получаем в переменную nowDate объект даты
let today = nowDate.getDate(); //получаем текущей день месяца
let currentMonth = nowDate.getMonth() + 1; //т.к getMonth возвращает месяцы начиная с 0 то + 1 для получения месяцев от 1 до 12
let currentYear = nowDate.getFullYear();

function startCalendar(year, month, transit) {
  //эта функция отрисовывает наш календарь  transit - используется для переключения между временами
  //вызов функций для получения параметров  если transit === 16 то вызываем getFanParameters иначе getParameters
  if (transit === 16) {
    arrParameters = getFanParameters(year, month);
  } else {
    arrParameters = getParameters(year, month);
  }
  //рисуем календарь
  drowCalendar(
    arrParameters.amountDays,
    arrParameters.arrDays,
    arrParameters.dayStart,
    arrParameters.monthName,
    arrParameters.year,
  );
}

// *****************************************************************************************************

function chengTime(currentYear, currentMonth, today, nowDate, transit) {
  //функция перелистования годов и месяцев

  let choiceY = document.querySelector("#choiceYear");

  document.querySelector("#buttonRight").onclick = monthMore; //навешиваем события клик
  document.querySelector("#buttonLeft").onclick = monthLess;
  choiceY.onchange = choiceYear;

  for (let i = 1975; i < 2036; i++) {
    //отрисовка option для select
    let option = document.createElement("option");
    option.setAttribute("value", i);
    option.innerHTML = i;
    choiceY.appendChild(option);
  }
  startCalendar(currentYear, currentMonth, transit); //рисуем календарь

  function monthMore() {
    console.log(transit);
    currentMonth++;
    startCalendar(currentYear, currentMonth, transit); //рисуем календарь
    // *********************************************** Отрисовка текущей даты
    choiceToday(currentYear, currentMonth, today, nowDate);
    if (currentMonth >= transit) {
      currentMonth = 0;
      currentYear++;
    }
  }
  function monthLess() {
    // ***************************************************************Less

    currentMonth--;
    startCalendar(currentYear, currentMonth, transit); //рисуем календарь
    // *********************************************** Отрисовка текущей даты
    choiceToday(currentYear, currentMonth, today, nowDate);

    if (currentMonth <= 1) {
      currentMonth = transit - 1;
      currentYear--;
    }
  }
  function choiceYear() {
    currentYear = choiceY.value;
    startCalendar(currentYear, currentMonth, transit);
    // *********************************************** Отрисовка текущей даты
    choiceToday(currentYear, currentMonth, today, nowDate);
  }

  // *********************************************** Отрисовка текущей даты
  choiceToday(currentYear, currentMonth, today, nowDate);
}
function choiceToday(currentYear, currentMonth, today, nowDate) {
  if (
    currentYear == nowDate.getFullYear() &&
    currentMonth == nowDate.getMonth() + 1
  ) {
    //проверка месяца и года что-бы не отрисовывалось на всех месяцах
    let el = document.querySelectorAll("td");
    for (let i = 0; i < el.length; i++) {
      if (el[i].innerText == today) {
        el[i].style.fontWeight = "bold";
        el[i].style.border = "1px solid red";
        el[i].style.background = "silver";
      }
    }
  }
}
chengTime(currentYear, currentMonth, today, nowDate, transit);

// -----------------------------------------------------------------------------------------------****************************************************
