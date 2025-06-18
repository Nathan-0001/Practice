const fortune1 = "You will find great success in your career.";
const fortune2 = "A new opportunity will present itself soon.";
const fortune3 = "Expect a pleasant surprise in your personal life.";
const fortune4 = "Your hard work will pay off in unexpected ways.";
const fortune5 = "A journey will bring you new insights.";
const fortune6 = "You will meet someone special who will change your life.";
const fortune7 = "Financial stability is on the horizon.";
const fortune8 = "A creative project will bring you joy."; 
const fortune9 = "You will overcome a challenge that has been troubling you.";
const fortune10 = "A new friendship will blossom in the coming weeks.";
let minNum = 1;
let maxNum = 10;
let randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

//If Else statement to determine which fortune to return//
let selectedFortune = " ";
if (randomNumber === 1) {
    selectedFortune = fortune1;
}
else if (randomNumber === 2) {
    selectedFortune += fortune2;
}
else if (randomNumber === 3) {
    selectedFortune += fortune3;
}
else if (randomNumber === 4) {
    selectedFortune += fortune4;
}
else if (randomNumber === 5) {
    selectedFortune += fortune5;
}
else if (randomNumber === 6) {
    selectedFortune += fortune6;
}   
else if (randomNumber === 7) {
    selectedFortune += fortune7;
}
else if (randomNumber === 8) {
    selectedFortune += fortune8;
}
else if (randomNumber === 9) {
    selectedFortune += fortune9;
}
else if (randomNumber === 10) {
    selectedFortune += fortune10;
}
console.log(selectedFortune);