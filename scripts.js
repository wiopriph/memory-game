const cards = document.querySelectorAll('.card')

(function shuffle() {
	cards.forEach(card => {
		card.style.order = Math.floor(Math.random() * 12);
	});
})();

