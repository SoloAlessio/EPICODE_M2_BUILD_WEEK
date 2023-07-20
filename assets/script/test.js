const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];


let score = 0;
let currentQuestionIndex = 0;
let risposteEsistenti = null;


function showQuestion() {
  console.log(currentQuestionIndex);

  const domanda = questions[currentQuestionIndex];
  const answers = [domanda.correct_answer, ...domanda.incorrect_answers];
  const griglia = document.getElementById("griglia");
  const titolo = document.getElementById("question");
  const contatore = document.getElementById("question-number");

  shuffle(answers)

  titolo.innerText = domanda.question;
  contatore.innerHTML = currentQuestionIndex + 1;

  // Ottieni le risposte (corrette e sbagliate)
  for (let i = 0; i < answers.length; i++) {
    let risposta = document.createElement('button');
    risposta.classList.add("risposta");
    risposta.textContent = answers[i];
    griglia.appendChild(risposta);
  }

  risposteEsistenti = document.querySelectorAll(".risposta");

  // Mostra le risposte sui pulsanti
  answers.forEach((answer, index) => {
    const answerButton = risposteEsistenti[index];
    answerButton.onclick = function () {
      // Controlla se la risposta Ã¨ corretta
      if (answer === domanda.correct_answer) {
        score++;
      } 
      // Passa alla prossima domanda
      risposteEsistenti.forEach(answer => answer.remove());

      if (currentQuestionIndex < questions.length - 1) {
        // Se ci sono ancora domande, mostra la prossima domanda
        currentQuestionIndex++;
        showQuestion();
        clearTime();
        //reimposta countdown
      } else {
        // Altrimenti, mostra un messaggio di fine quiz
        // Andiamo  a salvare in ucassetto del browser il nostro valore 
        sessionStorage.setItem("score", score)
        window.location.href = "score.html";
      }

    };

  });

}

function shuffle(answers) {
  let currentIndex = answers.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [answers[currentIndex], answers[randomIndex]] = [
      answers[randomIndex], answers[currentIndex]];
  }

  return answers;
}

function generateQuestions() {

  showQuestion();

};

const FULL_DASH_ARRAY = 273;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

function clearTime(){
  timePassed = -1;
  timeLeft = TIME_LIMIT;
  timerInterval = null;
}

function onTimesUp() {
  if(currentQuestionIndex != 9){
    risposteEsistenti.forEach(answer => answer.remove());
    currentQuestionIndex++;
    generateQuestions();
  } else{
    sessionStorage.setItem("score", score)
    window.location.href = "score.html";
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = "<div class='text'>SECONDS</div>" + formatTime(timeLeft) + "<div class='text'>REMAINING</div>";
    setCircleDasharray();

    if (timeLeft === 0) {
      clearTime();
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${seconds}`;
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

window.onload = function () {

  document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label"> 
      ${formatTime(timeLeft)} 
  </span>
</div>
`;
  generateQuestions();
  startTimer();

}