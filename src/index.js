import './style.css';
import APIhandler from './APIhandler.js';

const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  await APIhandler.submitScore(inputName.value, inputScore.value);
  inputName.value = '';
  inputScore.value = '';
});

refreshBtn.addEventListener('click', async () => {
  APIhandler.fetchDataFromAPI();
});

document.addEventListener('DOMContentLoaded', async () => {
  APIhandler.fetchDataFromAPI();
});