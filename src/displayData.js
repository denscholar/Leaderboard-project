import { ul } from './selectors.js';

const displayData = (data) => {
  const scoreData = data.result;
  scoreData.forEach((data) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${data.user} : ${data.score}`;
    ul.appendChild(listItem);
  });
};

export default displayData;