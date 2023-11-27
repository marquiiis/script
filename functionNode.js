const readline = require('readline');

function sumMultiples3or5(n) {
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a positive integer: ', (userInputNodeJS) => {
    const inputNodeJS = parseInt(userInputNodeJS);

    if (!isNaN(inputNodeJS) && inputNodeJS > 0) {
    const resultNodeJS = sumMultiples3or5(inputNodeJS);
        console.log(`Result =`, resultNodeJS);
    } else {
        console.error("Invalid input.");
    }

    rl.close();
});
