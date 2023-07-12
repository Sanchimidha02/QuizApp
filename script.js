const questions = [
    {
        question : "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        answers: [
        {text :"120 metres" , correct: false},
        {text :"180 metres" , correct: false},
        {text :"300 metres" , correct: false},
        {text :"150 metres" , correct: true},
        ]
    },
    {
        question : "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
        answers: [
        {text :"45 km/hr" , correct: false},
        {text :"50 km/hr" , correct: true},
        {text :"76 km/hr" , correct: false},
        {text :"54 km/hr" , correct: false},
        ]
    },
    {
        question : "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
        answers: [
        {text :"200 metres" , correct: false},
        {text :"220 metres" , correct: false},
        {text :"245 metres" , correct: true},
        {text :"280 metres" , correct: false},
        ]
    },
    {
        question : "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
        answers: [
        {text :"1 : 3" , correct: false},
        {text :"3 : 4" , correct: true},
        {text :"4 : 3" , correct: false},
        {text :"None of these" , correct: false},
        ]
    },
    {
        question : "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
        answers: [
        {text :"588 apples" , correct: false},
        {text :"600 apples" , correct: false},
        {text :"690 apples" , correct: false},
        {text :"700 apples" , correct: true},
        ]
    },
    {
        question : "The H.C.F. of two numbers is 23 and the other two factors of their L.C.M. are 13 and 14. The larger of the two numbers is:",
        answers: [
        {text :"289" , correct: false},
        {text :"345" , correct: true},
        {text :"234" , correct: false},
        {text :"322" , correct: false},
        ]
    },
    {
        question : "The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:",
        answers: [
        {text :"9000" , correct: false},
        {text :"9600" , correct: true},
        {text :"8000" , correct: false},
        {text :"9800" , correct: false},
        ]
    },
    {
        question : "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        answers: [
        {text :"7" , correct: false},
        {text :"8" , correct: false},
        {text :"9" , correct: false},
        {text :"10" , correct: true},
        ]
    },
    {
        question : "Three times the first of three consecutive odd integers is 3 more than twice the third. The third integer is:",
        answers: [
        {text :"12" , correct: false},
        {text :"15" , correct: true},
        {text :"19" , correct: false},
        {text :"21" , correct: false},
        ]
    },
    {
        question : "A two-digit number is such that the product of the digits is 8. When 18 is added to the number, then the digits are reversed. The number is:",
        answers: [
        {text :"24" , correct: true},
        {text :"18" , correct: false},
        {text :"32" , correct: false},
        {text :"45" , correct: false},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let  currentQuestionIndex =0 ;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML= questionNo + " ." + currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}
function resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);     
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click" , () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();