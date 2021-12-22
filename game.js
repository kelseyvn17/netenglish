const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = {};

let questions = [
  {
    question:
      ' "I have never been to Russia. I think I shall go there next year.” said Bill. ',
    choice1:
      "Bill said that he had never been to Russia and he thought he would go there the next year.",
    choice2:
      "Bill said that he would have never been to Russia and he thinks he would go there the next year.",
    choice3:
      "Bill said that he had never been to Russia and he thinks he will go there the next year.",
    choice4:
      "Bill said that he has never been to Russia and he thinks he would go there the next year.",
    answer: 1
  },
  {
    question:
      ' "People believed that Jane retired because of her poor health. ',
    choice1: "Jane is believed to have retired because of her poor health.",
    choice2: "Jane was believed to have retired because of her poor health.",
    choice3: "It is believed that Jane retired because of her poor health.",
    choice4: "Jane retired because of her poor health was believed.",
    answer: 2
  },
  {
    question:
      " The government knows the extent of the problem. The government needs to take action soon. ",
    choice1:
      "The government knows the extent of the problem whereas it needs to take action soon.",
    choice2:
      "The government knows the extent of the problem so that it needs to take action soon.",
    choice3:
      "Knowing the extent of the problem, the government needs to take action soon.",
    choice4:
      "The government knows the extent of the problem, or else it needs to take action soon.",
    answer: 3
  },
  {
    question:
      " The substance is very toxic. Protective clothing must be worn at all times. ",
    choice1:
      "Since the substance is very toxic, so protective clothing must be worn at all times.",
    choice2:
      "So toxic is the substance that protective clothing must be worn at all times.",
    choice3:
      "The substance is such toxic that protective clothing must be worn at all times.",
    choice4:
      "The substance is too toxic to wear protective clothing at all times.",
    answer: 2
  },
  {
    question: " John is studying hard. He doesn’t want to fail the exam. ",
    choice1: "John is studying hard in Oder not to fail the next exam",
    choice2: "John is studying hard in Oder that he not fail the next exam",
    choice3: "John is studying hard so as to fail the next exam",
    choice4: "John is studying hard in Oder to not to fail the next exam",
    answer: 1
  },
  {
    question:
      " She gave in her notice. She planned to start her new job in January ",
    choice1: "She gave in her notice, plan to start her new job in January",
    choice2:
      "She gave in her notice with a view to starting her new job in January",
    choice3:
      "Her notice was given in with an aim to start her new job in January",
    choice4:
      "Her notice was given in order for her to start her new job in January.",
    answer: 2
  },
  {
    question:
      " When the unemployment rate is high, the crime rate is usually also high. ",
    choice1: "The unemployment rate and the crime rate are both higher.",
    choice2:
      "The higher the unemployment rate is, the higher the crime rate is.",
    choice3: "The unemployment rate is as high as the crime rate.",
    choice4: "The high rate of unemployment depends on the high rate of crime.",
    answer: 2
  },
  {
    question: " I wish you had not said that",
    choice1: "I wish you not to say that.",
    choice2: "If only you did not say that",
    choice3: "I hope you will not say that.",
    choice4: "It would be nice if you had not said that.",
    answer: 4
  },
  {
    question: " “You are always making terrible mistakes”, said the teacher. ",
    choice1:
      "The teacher asked his students why they always made terrible mistakes.",
    choice2:
      "The teacher realized that his students always made terrible mistakes.",
    choice3:
      "The teacher complained about his students making terrible mistakes.",
    choice4: "The teacher made his students not always make terrible mistakes.",
    answer: 3
  },
  {
    question: " There is no point in your phoning Jane – she’s away. ",
    choice1: "It would be a waste of time phoning Jane – she’s away.",
    choice2: "You waste your time if you insist on phoning Jane – she’s away.",
    choice3: "Don’t spend your valuable time phoning Jane – she’s out.",
    choice4: "Jane is very difficult to phone – she’s always away.",
    answer: 1
  }
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
  }

  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionsIndex, 1)

  acceptingAnswers = true
}

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = (selectedAnswer = currentQuestion.answer
      ? "correct"
      : " incorrect")

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion()
    }, 1000)
  })
})

incrementScore = num => {
  score += num
  scoreText.innerText = score
}

startGame()
