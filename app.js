const cardRating = document.getElementById('cardRating');
const cardThanks = document.getElementById('cardThanks');

const submitButton = document.getElementById('submitButton');

const submittedRating = document.getElementById('submittedRating');



submitButton.onclick = () => {
  const rating = document.querySelector('input[name="rating"]:checked').value

  if (rating != null){
    cardRating.classList.add('hidden')
    cardThanks.classList.remove('hidden')

    submittedRating.textContent = rating
  }
}
