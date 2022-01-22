

const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];

let score = 0;
let questionIndex = 0;


const headerContaier = document.getElementById('header');
const listContainer = document.getElementById('list');
const submitBtn = document.getElementById('submit')

clearPage();
function clearPage() {

	headerContaier.innerHTML = '';
	listContainer.innerHTML = '';
}

function showQuestions() {

	const headerTemplate = `<h2 class="title">${questions[questionIndex]['question']}</h2>`

	headerContaier.innerHTML = headerTemplate
	questions[questionIndex]['answers'].forEach((item, index) =>
		listContainer.innerHTML += `
			<li>
				<label>
					<input value = ${index + 1}  type="radio" class="answer" name="answer" />
					<span>${item}</span>
				</label>
			</li>
			<li>`

	);

}

showQuestions()

submitBtn.addEventListener('click', checkAnswers)

function checkAnswers() {
	const checkedRadio = listContainer.querySelector('input[type=radio]:checked')

	if (!checkedRadio) {
		submitBtn.blur()
		return
	}
	const userAnswer = (+checkedRadio.value)

	if (userAnswer === questions[questionIndex]['correct']) {
		score++
	}
	console.log(userAnswer, score)

	if (questionIndex !== questions.length - 1) {
		questionIndex++
		clearPage();
		showQuestions();
	} else {
		clearPage()
		showResults()
	}
}

function showResults() {
	let title, message, result;

	if (score === questions.length) {
		title = 'Поздравляем 🎉';
		message = 'Вы ответили верно на все вопросы !🏆';
	} else if ((score * 100) / questions.length >= 50) {
		title = 'Неплохой результат';
		message = 'Вы дали более половины плавильных ответов';
	}
	result = `${score} из ${questions.length}`;
	headerContaier.innerHTML = `
			<h2 class="title">${title}</h2>
			<h3 class="summary">${message}</h3>
			<p class="result">${result}</p>
		`;

	submitBtn.blur();
	submitBtn.innerText = 'Играть заново'
	submitBtn.onclick = () => history.go()


}