const displayLists = document.getElementById('display-lists');

// Unique identifier of the created game
const gameId = 'EHfgaM87mP9B9h6CrDt5';

const submitScore = async (userName, userScore) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const gameResult = await response.json();
  return gameResult;
};

const fetchDataFromAPI = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const getResult = await response.json();
  const resultArray = getResult.result;
  const values = resultArray.map((result) => `<div class="display-table-list">
                      <p>${result.user}: ${result.score}</p>
                  </div>`).join('');
  displayLists.innerHTML = values;
};

export default { submitScore, fetchDataFromAPI };