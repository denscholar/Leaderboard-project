import displayData from './displayData.js';
import {
  form, name, score, refreshButton,
} from './selectors.js';

const urlApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KyWbURKYRpdKPZHomdnx/scores/';

const setScore = async (e) => {
  e.preventDefault();
  const nameValue = name.value;
  const scoreValue = score.value;
  const response = await fetch(urlApi, {
    method: 'POST',
    body: JSON.stringify({
      user: nameValue,
      score: +scoreValue,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  name.value = '';
  score.value = '';
  return response.json();
};

const getScore = async () => {
  const response = await fetch(urlApi);
  return response.json();
};

getScore().then((response) => { displayData(response); });
refreshButton.addEventListener('click', () => { window.location.reload(); });
form.addEventListener('submit', setScore);

export default getScore;