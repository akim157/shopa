const p = new Promise((resolve, reject) => {
    // Kick of some async work (Пинок какой-то асинхронной работы)
    // ...
    setTimeout(() => {
        // resolve(1); //pending => resolved, fulfilled
        reject(new Error('message')); //pending => rejected
    }, 2000);
});

p
    .then(result => console.log('Result: ', result))
    .catch(err => console.log('Error: ', err.message));