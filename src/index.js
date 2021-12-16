import './style.css';

const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const submitBtn = document.querySelector('.submit-btn')

submitBtn.addEventListener('click', async () => {
    const result = await submitScore(inputName.value, inputScore.value);
    inputName.value = '';
    inputScore.value = '';
})

async function submitScore(userName, userScore) {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
        method: 'POST',
        body: JSON.stringify({
            user: userName,
            score: userScore
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const gameResult = await response.json();
    return gameResult;
}