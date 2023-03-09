
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const flatpickr = require("flatpickr");
const selectDateEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysTimerEl = document.querySelector('[data-days]');
const hoursTimerEl = document.querySelector('[data-hours]');
const minsTimerEl = document.querySelector('[data-minutes]');
const secsTimerEl = document.querySelector('[data-seconds]');
let timerId = null;
// const selectedDate = new Date(selectDateEl.value);
import "flatpickr/dist/flatpickr.min.css";
flatpickr('#datetime-picker', options)
// selectDateEl.addEventListener('change', isCorrect(selectedDate));
startBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timer.start(selectDateEl.value);
})

const timer = {
  start(selectedTime) {
    const startTime = new Date(selectedTime);

    timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const {days, hours, mins, secs} = getTimeComponents(deltaTime);
      
      daysTimerEl.textContent = `${days}`;
      hoursTimerEl.textContent = `${hours}`;
      minsTimerEl.textContent = `${mins}`;
      secsTimerEl.textContent = `${secs}`;
    },1000);
  }
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

// function isCorrect(date) {

//   console.log('(: ', selectDateEl.value);

//   if (date.getTime() <= Date.now()) {
//     startBtn.setAttribute('disabled', '')
//   } else {
//     startBtn.removeAttribute('disabled', '')
//   }
// }
