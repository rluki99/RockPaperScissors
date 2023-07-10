const buttons = document.querySelectorAll('.btn')
const userScore = document.querySelector('.user-score')
const computerScore = document.querySelector('.computer-score')
const winnerRound = document.querySelector('.winner-round')
const winnerGame = document.querySelector('.winner-game')
const resetBtn = document.querySelector('.reset-btn')

let answer
let computerCount = 0
let userCount = 0
let rounds = 0

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
	if (rounds < 5) {
		resetButtonColor()
		answer = userChoice.value
		const computerDraw = getComputerChoice()

		changeButtonColor(userChoice)
		switch (computerDraw) {
			case 'rock':
			  changeButtonColor(document.getElementById('rock-comp'));
			  break;
			case 'paper':
			  changeButtonColor(document.getElementById('paper-comp'));
			  break;
			case 'scissors':
			  changeButtonColor(document.getElementById('scissors-comp'));
			  break;
			default:
			  break;
		  }

		checkResult(computerDraw, answer)

		rounds++
	}

	if (rounds === 5) {
		resetBtn.style.display = 'block'

		if (userCount > computerCount) {
			winnerGame.textContent = 'User won the game!!'
		} else if (userCount === computerCount) {
			winnerGame.textContent = 'There is no winnter!! TIE!!!'
		} else {
			winnerGame.textContent = 'Computer won the game :('
		}
	}
}

const checkResult = (computerDraw, answer) => {
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

const resetGame = () => {
	computerCount = 0
	userCount = 0
	rounds = 0
	winnerRound.textContent = ''
	winnerGame.textContent = ''
	userScore.textContent = userCount
	computerScore.textContent = computerCount
	resetBtn.style.display = 'none'
	resetButtonColor()
}

const changeButtonColor = (button) => {
	button.style.backgroundColor = 'rgba(225, 195, 30, 0.44)'
}

const resetButtonColor = () => {
	buttons.forEach((button) => {
		button.style.backgroundColor = ''
	})
}

resetBtn.addEventListener('click', resetGame)
