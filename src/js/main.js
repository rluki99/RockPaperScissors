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

const playSingleRound = () => {
	answer = prompt('Rock Paper or Scissors').toLowerCase().trim()
	const computerDraw = getComputerChoice()

	// console.log(`${answer}, user choice`);
	// console.log(`${computerDraw}, computer choice`);

	if (computerDraw === answer) {
		return 'Its tie'
	} else if (computerDraw === 'rock' && answer === 'paper') {
		userCount++
		return 'Computer lose'
	} else if (computerDraw === 'rock' && answer === 'scissors') {
		computerCount++
		return 'Computer win'
	} else if (computerDraw === 'scissors' && answer === 'rock') {
		userCount++
		return 'Computer lose'
	} else if (computerDraw === 'scissors' && answer === 'paper') {
		computerCount++
		return 'Computer win'
	} else if (computerDraw === 'paper' && answer === 'rock') {
		computerCount++
		return 'Computer win'
	} else if (computerDraw === 'paper' && answer === 'scissors') {
		userCount++
		return 'Computer lose'
	}
}

const playGame = () => {
	for (let i = 0; i < 5; i++) {
		console.log(playSingleRound())
	}

	console.log(`${computerCount} computer count`)
	console.log(`${userCount} user count`)
}

playGame()
