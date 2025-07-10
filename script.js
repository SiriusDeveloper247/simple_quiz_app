const questions = [
	{
		question: "What's the biggest planet of Solar System?",
		options: ["Earth", "Mars", "Jupiter", "Venus"],
		correctIndex: 2,
	},
	{
		question: "How many continents are there on Earth?",
		options: ["5", "6", "7", "8"],
		correctIndex: 2,
	},
	{
		question: "Which element is indicated by the symbol O in the Mendeleev table?",
		options: ["Oxygen", "Hydrogen", "Hydrogen sulfur", "Water"],
		correctIndex: 0,
	},
	{
		question: "Who wrote the novel “War and Peace”?",
		options: ["Alexander Pushkin", "Taras Shevchenko", "Lev Tolstoy", "Anton Chekhov"],
		correctIndex: 2,
	},
	{
		question: "How many degrees are there in a right angle?",
		options: ["60", "90", "120", "180"],
		correctIndex: 1,
	},
	{
		question: "In which country are the pyramids of Giza located?",
		options: ["Greece", "Japan", "China", "Egypt"],
		correctIndex: 3,
	},
	{
		question: "What is the name of the capital of Japan?",
		options: ["Osava", "Tokyo", "Nakamura", "Nagasaki"],
		correctIndex: 1,
	},
	{
		question: "Who painted the Mona Lisa?",
		options: ["Leonardo Da Vinci", "Mikkelangelo Buanorotti", "Rafael Santi", "Donatello di Betto"],
		correctIndex: 0,
	},
	{
		question: "What currency is used in most countries in Europe?",
		options: ["Hryvnias", "Krona", "Euro", "Dollar"],
		correctIndex: 2,
	},
	{
		question: "What is the name of the longest river in the world?",
		options: ["Nile", "Amazonka", "Baykal", "Dnepr"],
		correctIndex: 0,
	},
	{
		question: "What is the process by which plants turn sunlight into energy called?",
		options: ["Photosynthesis", "Budding", "Evaporation", "Shadowing"],
		correctIndex: 0,
	},
	{
		question: "Which chemical element was named after the sun?",
		options: ["Nitrogen", "Sulfur", "Gallium", "Helium"],
		correctIndex: 3,
	}
];

let score = 0;
let currentQuestionIndex = 0;

const questionElement = document.querySelector(".question");
const optionsContainer = document.querySelector(".options");
const feedbackElement = document.querySelector(".feedback");
const nextButton = document.querySelector(".main_button");

function loadQuestion() {
	feedbackElement.textContent = "";
	nextButton.style.display = "none";
	const currentQuestion = questions[currentQuestionIndex];
	questionElement.textContent = currentQuestion.question;
	optionsContainer.innerHTML = "";
	currentQuestion.options.forEach((option, index) => {
		const optionElement = document.createElement("div");
		optionElement.textContent = option;
		optionElement.classList.add("option");
		optionElement.addEventListener("click", () => checkAnswer(index));
		optionsContainer.appendChild(optionElement);
	});
};

function checkAnswer(selectedIndex) {
	const currentQuestion = questions[currentQuestionIndex];

	const allOptions = document.querySelectorAll(".option");
	allOptions.forEach((option) => option.removeEventListener("click", () => {}));
	if (selectedIndex === currentQuestion.correctIndex) {
		score++;
		feedbackElement.textContent = "Right answer :3";
		feedbackElement.style.color = "#008000";
		allOptions[selectedIndex].classList.add("correct");
	} else {
		feedbackElement.textContent = "Incorrect answer :c";
		feedbackElement.style.color = "#FF0000";
		allOptions[selectedIndex].classList.add("incorrect");
		allOptions[currentQuestion.correctIndex].classList.add("correct");
	}
	nextButton.style.display = "block";
};

nextButton.addEventListener("click", () => {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		loadQuestion();
	} else {
		showFinalScore();
	}
});

function showFinalScore() {
	questionElement.textContent = `Test is ended, you got ${score}/${questions.length} right answers!`;
	optionsContainer.innerHTML = "";
	feedbackElement.textContent = "";
	nextButton.style.display = "none";
};

loadQuestion();