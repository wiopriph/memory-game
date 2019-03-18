const cards = document.querySelectorAll('.card');

let firstCard,
	secondCard,
	hasFlippedCard = false,
	lockBoard = false;


function flip() {
	if(lockBoard) return;
	if(this === firstCard) return;

	this.classList.add('flip');

	if(!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;
		return
	}
	secondCard = this;

	checkForMatch();
}


function unFlip() {
	lockBoard = true;

	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');

		reset();
	}, 1000);
}


function checkForMatch() {
	firstCard.dataset.type === secondCard.dataset.type ? disableCards() : unFlip();
}


function disableCards() {
	firstCard.removeEventListener('click', flip);
	secondCard.removeEventListener('click', flip);

	reset();
}


function reset() {
	[ firstCard, secondCard ] = [ null, null ];
	[ hasFlippedCard, lockBoard ] = [ false, false ];
}


(function shuffle() {
	cards.forEach(card => {
		card.style.order = Math.floor(Math.random() * 12);
	})
})()


cards.forEach(card => card.addEventListener('click', flip));