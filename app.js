const playerOne = document.querySelector('#p1Score')
const playerTwo = document.querySelector('#p2Score')

const playerOneBtn = document.querySelector('#p1Btn')
const playerTwoBtn = document.querySelector('#p2Btn')

const resetBtn = document.querySelector('#resetBtn')

const selectedValue = document.querySelector('#winningScore')

let scoreP1 = 0
let scoreP2 = 0
let winningScore = 5

let isGameOver = false

selectedValue.addEventListener('change', function () {
  winningScore = parseInt(this.value)
  reset()
})

playerOneBtn.addEventListener('click', function () {
  if (!isGameOver) {
    scoreP1 += 1
    if (scoreP1 === winningScore) {
      isGameOver = true
      if (scoreP1 > scoreP2) {
        playerOne.style.color = 'green'
        playerTwo.style.color = 'red'
        playerOneBtn.disabled = true
        playerTwoBtn.disabled = true
      } else {
        playerOne.style.color = 'red'
        playerTwo.style.color = 'green'
        playerOneBtn.disabled = true
        playerTwoBtn.disabled = true
      }
    }
    playerOne.innerText = scoreP1
  }
})

playerTwoBtn.addEventListener('click', function () {
  if (!isGameOver) {
    scoreP2 += 1
    if (scoreP2 === winningScore) {
      isGameOver = true
      if (scoreP2 > scoreP1) {
        playerOne.style.color = 'red'
        playerTwo.style.color = 'green'
        playerOneBtn.disabled = true
        playerTwoBtn.disabled = true
      } else {
        playerOne.style.color = 'green'
        playerTwo.style.color = 'red'
        playerOneBtn.disabled = true
        playerTwoBtn.disabled = true
      }
    }
    playerTwo.innerText = scoreP2
  }
})

const reset = () => {
  scoreP1 = 0
  scoreP2 = 0
  playerOne.innerText = scoreP1
  playerTwo.innerText = scoreP2
  playerOne.style.color = ''
  playerTwo.style.color = ''
  isGameOver = false
  playerOneBtn.disabled = false
  playerTwoBtn.disabled = false
}

resetBtn.addEventListener('click', reset)
