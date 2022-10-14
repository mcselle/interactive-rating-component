const cardRating = document.getElementById('cardRating');
const cardThanks = document.getElementById('cardThanks');

const submitButton = document.getElementById('submitButton');

//const rating = document.querySelector('input[name="rating"]:checked').value



submitButton.onclick = () => {
  cardRating.classList.add('hidden')
  cardThanks.classList.remove('hidden')
}
