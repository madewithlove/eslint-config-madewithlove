// avoid-new
console.info(
    new Promise(resolve => {
        resolve('foobar');
    }),
);
