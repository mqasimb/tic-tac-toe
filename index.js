window.addEventListener('DOMContentLoaded', function() {
	var turns = 0
	var toggle = true
	//Handles Text for Turn
	var turnText = document.getElementById('turn')
	//Handles Text for Result
	var resultText = document.getElementById('result')

	var boxes = document.getElementsByClassName('box')
	Array.prototype.forEach.call(boxes, elm => elm.addEventListener('click', addHTML, false))

	var restartButton = document.getElementById('restart')
	restartButton.addEventListener('click', restartGame, false)

	var xSymbol = 'X'
	var oSymbol = 'O'
	//Add Symbol into div
	function addHTML(e) {
		e.target.innerHTML = (toggle) ? (xSymbol) : (oSymbol)
		toggle = !toggle
		e.target.removeEventListener('click', addHTML, false)
		turns++
		var nextTurnText = (toggle) ? (xSymbol) : (oSymbol)
		turnText.innerHTML = 'Turn: ' + nextTurnText
		if(turns >= 5) {
			checkForWinner()
		}
	}

	function checkForWinner() {
		//Horizontal Win Conditions
		if(boxes[0].innerHTML != '' && boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML === boxes[2].innerHTML) {
			gameOver(boxes[0].innerHTML)
		}
		else if(boxes[3].innerHTML != '' && boxes[3].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML) {
			gameOver(boxes[3].innerHTML)
		}
		else if(boxes[6].innerHTML != '' && boxes[6].innerHTML === boxes[7].innerHTML && boxes[7].innerHTML === boxes[8].innerHTML) {
			gameOver(boxes[6].innerHTML)
		}
		//Vertical Win Conditions
		else if(boxes[0].innerHTML != '' && boxes[0].innerHTML === boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML) {
			gameOver(boxes[0].innerHTML)
		}
		else if(boxes[1].innerHTML != '' && boxes[1].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML) {
			gameOver(boxes[1].innerHTML)
		}
		else if(boxes[2].innerHTML != '' && boxes[2].innerHTML === boxes[5].innerHTML && boxes[5].innerHTML === boxes[8].innerHTML) {
			gameOver(boxes[2].innerHTML)
		}
		//Diagonal Win Conditions
		else if(boxes[0].innerHTML != '' && boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML) {
			gameOver(boxes[0].innerHTML)
		}
		else if(boxes[6].innerHTML != '' && boxes[6].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[2].innerHTML) {
			gameOver(boxes[6].innerHTML)
		}
		else if(turns > 8) {
			gameOver('DRAW')
		}
		//remove event listeners if game is won
	}

	function gameOver(winner) {
		resultText.innerHTML = (winner === 'DRAW') ? (winner) : (winner + ' is the winner!')
		Array.prototype.forEach.call(boxes, elm => {
			if(elm.innerHTML === '') {
				elm.removeEventListener('click', addHTML, false)
			}
		})		
	}

	function restartGame() {
		toggle = true;
		turns = 0;
		turnText.innerHTML = 'Turn: X'
		resultText.innerHTML = 'Result: Game in progress'
		Array.prototype.forEach.call(boxes, elm => {
			elm.innerHTML = ''
			elm.addEventListener('click', addHTML, false)
			}		
		)
	}
}, false)