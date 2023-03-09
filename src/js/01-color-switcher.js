const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

stopBtn.setAttribute('disabled', '')

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled', '');
  timerId = setInterval(() => {
    bodyEl.setAttribute('style', `background-color: ${getRandomHexColor()}`)
  }, 1000)
});

stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled', '');
  stopBtn.setAttribute('disabled', '');
  clearInterval(timerId);
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}