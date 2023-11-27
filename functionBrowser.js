function sumMultiples3or5(n) {
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

const userInputBrowser = prompt("Enter a positive integer:");
const inputBrowser = parseInt(userInputBrowser);

if (!isNaN(inputBrowser) && inputBrowser > 0) {
    const resultBrowser = sumMultiples3or5(inputBrowser);
    console.log(`Result =`, resultBrowser);
} else {
    console.error("Invalid input");
}