import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
let position = 0;
let totalDelay = 0;

formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay, step) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      totalDelay += Number(step);
      if (shouldResolve) {
        resolve({ position });
      } else {
        reject({ position });
      }
    }, delay);
  });
};

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
  totalDelay = Number(delay.value);
  const intervalId = setInterval(() => {
    position += 1

    if (position >= amount.value) {
    clearInterval(intervalId);
    }
    createPromise(position, delay.value, step.value)
      .then(({ position }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${totalDelay}ms`);
    })
      .catch(({ position }) => {
      Notiflix .Notify.failure(`❌ Rejected promise ${position} in ${totalDelay}ms`);
    });
  }, step.value)
  }

