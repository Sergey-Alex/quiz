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

	questions.forEach((element) => {
		listContainer.innerHTML += `	<li>
				<label>
					<input type="radio" class="answer" name="answer" />
					<span>${element.answers[questionIndex]}</span>
				</label>
			</li>
			<li>`
	}

	);
}

showQuestions()