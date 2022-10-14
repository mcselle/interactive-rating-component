const cardRating = document.getElementById('cardRating');
const cardThanks = document.getElementById('cardThanks');

const submitButton = document.getElementById('submitButton');

submitButton.onclick = () => {
  cardRating.classList.add('hidden')
  cardThanks.classList.remove('hidden')
}
