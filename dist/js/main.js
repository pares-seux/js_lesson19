(()=>{"use strict";(()=>{const e=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],t=document.getElementById("hello");console.log(t),document.getElementById("week-day"),document.getElementById("time"),document.getElementById("new-year"),(()=>{let o=(()=>{let t=new Date,o=(new Date(`1 january ${t.getFullYear()+1}`).getTime()-t.getTime())/1e3,n=Math.floor(o/60/60/24),l=e[t.getDay()],s=t.getHours(),a=s>=12?" PM ":" AM ";return s=s>=12?s-12:s,{weekDay:l,hours:s,minutes:t.getMinutes(),seconds:t.getSeconds(),dayPeriod:a,days:n}})();console.log(t)," AM "===o.dayPeriod?+o.hours<6?sayHello.textContent="Доброй ночи!":sayHello.textContent="Доброе утро!":+o.hours<6?sayHello.innerText="Добрый день!":sayHello.textContent="Добрый вечер!"})()})()})();