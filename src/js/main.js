const userScore = document.querySelector('.user-score')
const computerScore = document.querySelector('.computer-score')
const winnerRound = document.querySelector('.winner-round')

let answer
let computerCount = 0
let userCount = 0

const getComputerChoice = () => {
	const random = Math.floor(Math.random() * 3) + 1
	if (random === 1) {
		return `rock`
	} else if (random === 2) {
		return `paper`
	} else {
		return `scissors`
	}
}

const playSingleRound = (userChoice) => {
	answer = userChoice.value
	console.log(answer);
	const computerDraw = getComputerChoice()

	console.log(`${answer}, user choice`);
	console.log(`${computerDraw}, computer choice`);

	if (computerDraw === answer) {
		winnerRound.textContent = 'Its a tie'
	} else if (computerDraw === 'rock' && answer === 'paper') {
		userCount++
		userScore.textContent = userCount
		winnerRound.textContent = 'User wins'
	} else if (computerDraw === 'rock' && answer === 'scissors') {
		computerCount++
		computerScore.textContent = computerCount
		winnerRound.textContent = 'Computer wins'
	} else if (computerDraw === 'scissors' && answer === 'rock') {
		userCount++
		userScore.textContent = userCount
		winnerRound.textContent = 'User wins'
	} else if (computerDraw === 'scissors' && answer === 'paper') {
		computerCount++
		computerScore.textContent = computerCount
		winnerRound.textContent = 'Computer wins'
	} else if (computerDraw === 'paper' && answer === 'rock') {
		computerCount++
		computerScore.textContent = computerCount
		winnerRound.textContent = 'Computer wins'
	} else if (computerDraw === 'paper' && answer === 'scissors') {
		userCount++
		userScore.textContent = userCount
		winnerRound.textContent = 'User wins'
	}
}

// const playGame = () => {
// 	for (let i = 0; i < 5; i++) {
// 		console.log(playSingleRound())
// 	}

// 	console.log(`${computerCount} computer count`)
// 	console.log(`${userCount} user count`)
// }

// playGame()
