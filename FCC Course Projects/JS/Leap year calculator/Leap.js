// Check if the year is divisible by 4
function isLeapYear(num){
    if ((num % 4) === 0 && (num % 400) ===0){
        return `${num} is a leap year.`;
    }
    else if ((num % 100) === 0){
        return `${num} is not a leap year.`;
    }
    else{
        return `${num} is a leap year.`;
    }
}
let year = 2024;
let result = isLeapYear(year);
console.log(result);

year = 2000;
result = isLeapYear(year);
console.log(result);

year = 1900;
result = isLeapYear(year);
console.log(result)