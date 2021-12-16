import './style.css';

const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const submitBtn = document.querySelector('.submit-btn');
const displayLists = document.getElementById('display-lists');
const refreshBtn = document.querySelector('.refresh-btn');

//Unique identifier of the created game
let gameId = 'j3pbXgKmDrCFgfpG7CfU';

submitBtn.addEventListener('click', async () => {
    const result = await submitScore(inputName.value, inputScore.value);
    inputName.value = '';
    inputScore.value = '';
    fetchDataFromAPI();
});

refreshBtn.addEventListener('click', async() => {
    fetchDataFromAPI();
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
};

async function fetchDataFromAPI() {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`)
    const getResult = await response.json();
    let resultArray = getResult.result;
    const values = resultArray.map(function(result) {
        return `<div class="display-table-list">
                    <p>${result.user}: ${result.score}</p>
                </div>`
      }).join('');
      displayLists.innerHTML = values;
};

document.addEventListener("DOMContentLoaded", async () => {
    fetchDataFromAPI();
})