console.log('result');
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay)
  })
  promise.then(result => {
    console.log(result);
  })
}
console.log('result');
createPromise(2, 2000)