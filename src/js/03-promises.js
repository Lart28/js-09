import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
let position = 0;

formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
  
  const intervalId = setInterval(() => {
    position += 1
    
    if (position >= amount.value) {
    clearInterval(intervalId);
    }
    createPromise(position, delay.value)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }, step.value)
  }

