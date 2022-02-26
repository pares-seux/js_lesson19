const timer = () => {
  const sayHello = document.getElementById("hello");
  const currentDay = document.getElementById("week-day");
  const currentTime = document.getElementById("time");
  const dayToNewYear = document.getElementById("new-year");
  const week = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  function formatWords(num, array) {
    if (num === 1 || (num % 10 === 1 && num !== 11)) {
      return `${num} ${array[0]}`;
    }
    if ((num > 1 && num < 5) || (num % 10 > 1 && num % 10 < 5 && num > 20)) {
      return `${num} ${array[1]}`;
    }
    return `${num} ${array[2]}`;
  }

  const getTimeRemaining = () => {
    let dateNow = new Date();
    let dateStop = new Date(`1 january ${dateNow.getFullYear() + 1}`).getTime();
    let timeRemaining = (dateStop - dateNow.getTime()) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let weekDay = week[dateNow.getDay()];
    let hours = dateNow.getHours();
    let dayPeriod = hours >= 12 ? " PM " : " AM ";
    hours = hours >= 12 ? hours - 12 : hours;
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();

    return {
      weekDay,
      hours,
      minutes,
      seconds,
      dayPeriod,
      days,
    };
  };

  const updateData = () => {
    let getTime = getTimeRemaining();
    if (getTime.dayPeriod === " AM ") {
      if (+getTime.hours < 6) {
        sayHello.textContent = "Доброй ночи!";
      } else {
        sayHello.textContent = "Доброе утро!";
      }
    } else {
      if (+getTime.hours < 6) {
        sayHello.textContent = "Добрый день!";
      } else {
        sayHello.textContent = "Добрый вечер!";
      }
    }
    currentDay.textContent = getTime.weekDay;
    currentTime.textContent = `${(getTime.hours + "").padStart(2, "0")}:${(
      getTime.minutes + ""
    ).padStart(2, "0")}:${(getTime.seconds + "").padStart(2, "0")} ${
      getTime.dayPeriod
    }`;
    dayToNewYear.textContent = formatWords(getTime.days, [
      "день",
      "дня",
      "дней",
    ]);
  };

  const startTimer = () => {
    updateData();
    setInterval(updateData, 1000);
  };

  startTimer();
};

export default timer;
