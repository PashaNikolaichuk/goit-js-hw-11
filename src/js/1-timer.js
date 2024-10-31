import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('[data-start]');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minsField = document.querySelector('[data-minutes]');
const secsField = document.querySelector('[data-seconds]');
startBtn.addEventListener('click', handlStart);

startBtn.disabled = true;
let selectedDate;

const options = {
  enableTime: true, // Увімкнення вибору часу (крім дати).
  time_24hr: true, // Формат часу 24 години.
  defaultDate: new Date(), // Поточна дата за замовчуванням.
  minuteIncrement: 1, // Крок хвилин для вибору часу.
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    const dataNow = new Date();
    if (selectedDate <= dataNow) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        backgroundColor: '#ff4d4f',
        iconColor: 'white',
        titleColor: 'white',
        messageColor: 'white',
        titleSize: '16px',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function handlStart() {
  startBtn.disabled = true;
  document.querySelector('#datetime-picker').disabled = true;

  const timerId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedDate - currentTime;

    if (deltaTime <= 0) {
      clearInterval(timerId);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      document.querySelector('#datetime-picker').disabled = false;
      return;
    }

    const timeComponents = convertMs(deltaTime);
    updateTimerDisplay(timeComponents);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  daysField.textContent = pad(days);
  hoursField.textContent = pad(hours);
  minsField.textContent = pad(minutes);
  secsField.textContent = pad(seconds);
}

function pad(value) {
  return String(value).padStart(2, '0');
}
