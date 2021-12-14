import './style.css';

const displayTable = document.querySelector('.display-table');

const displayScore = [
  {
    Name: 'Mire',
    Score: 100,
  },
  {
    Name: 'Biruk',
    Score: 30,
  },
  {
    Name: 'Bini',
    Score: 50,
  },
  {
    Name: 'Sami',
    Score: 90,
  },
  {
    Name: 'Yoni',
    Score: 70,
  },
];

displayTable.innerHTML = displayScore.map((e) => `
        <p class="display-table-list">${e.Name}: ${e.Score}</p>
    `).join('');