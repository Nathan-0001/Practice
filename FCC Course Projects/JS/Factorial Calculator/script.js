var num = 5;

function factorialCalculator(num) {
    let result = 1;
        for (let i = 2; i <= num; i++) {
        result *= i;
        }
        return result;
    }
    console.log(factorialCalculator(num));

var factorial = factorialCalculator(num);

const resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg)
