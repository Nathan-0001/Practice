let questions = [
    {
        category: "Geography",
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Madrid"],
        answer: "Paris"
    },
    {        
        category: "Science",
        question: "What is the chemical element with the symbol Fe?",
        choices: ["Iron", "Gold", "Carbon"],
        answer: "Iron"
    },
    {
        category: "History",
        question: "Who was the first President of the United States?",
        choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", ],
        answer: "George Washington"
    },
    {
        category: "Literature",
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway"],
        answer: "Harper Lee"
    },
    {
        category: "Mathematics",
        question: "What is the value of Pi to two decimal places?",
        choices: ["3.14", "3.15", "3.16"],
        answer: "3.14"
    } ]

function getRandomQuestion(questions){
  let randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices){
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResults(questions, answer){
        if(questions.answer === answer) return `The computer's choice is correct!`;
    else return `The computer's choice is wrong. The correct answer is: ${questions.answer}`;
}