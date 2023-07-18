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
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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

// Definizione della funzione generateQuestions
window.onload = function(){

    function generateQuestions() {

        const griglia = document.getElementById("griglia");
        const titolo = document.getElementById("question");
        const contatore = document.getElementById("counter");
        let array;
        let score = 0;
        let answerButtons;
        
        let currentQuestionIndex = 0;
    
        // Funzione per mostrare una domanda e le risposte corrispondenti
        function showQuestion() {
            // Ottieni la domanda corrente
            const domanda = questions[currentQuestionIndex];
            array = griglia.children;
            answerButtons = griglia.children;
            // Rimuovi tutti i pulsanti di risposta
            for (let i = 0; i < array.length; i++) { // QUI è IL PROBLEMA GROSSO!!!
                array[i].remove();
            }
            
            // Mostra la domanda
            titolo.innerText = domanda.question;
    
            // Ottieni le risposte (corrette e sbagliate)
            const answers = [domanda.correct_answer, ...domanda.incorrect_answers];

            for (let i = 0; i < answers.length ; i++) {
                let element = document.createElement('button');
                element.id = "answer" + (i+1);
                griglia.appendChild(element);
            }
            
            // Mostra le risposte sui pulsanti
            answers.forEach((answer, index) => {
                const answerButton = answerButtons[index];
                answerButton.textContent = answer;
                answerButton.onclick = function() {
                    // Controlla se la risposta Ã¨ corretta e mostra un messaggio di allerta appropriato
                    if (answer === domanda.correct_answer) {
                        alert('Corretto!');
                        score++;
                    } else {
                        alert('Sbagliato!');
                    }
                    // Passa alla prossima domanda
                    currentQuestionIndex++;
                    contatore.innerHTML = "Question: " + parseInt(currentQuestionIndex+1) + "/10";
                    if (currentQuestionIndex < questions.length) {
                        // Se ci sono ancora domande, mostra la prossima domanda
                        showQuestion();
                    } else {
                        // Altrimenti, mostra un messaggio di fine quiz
                        alert('Quiz finito! - risposte corrette: ' + score + "/10");
                    }
                };
            });
            
        }
    
        // Mostra la prima domanda
        showQuestion();
        
    };
     
    generateQuestions();  
}



