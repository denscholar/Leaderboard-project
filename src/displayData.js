import { ul } from './selectors.js';

const displayData = (data) => {
  const scoreData = data.result;
  scoreData.forEach((data) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${data.user}<span>${data.score}</span>`;
    ul.appendChild(listItem);
  });
};

export default displayData;