import scoreData from './scoreData.js';
import ul from './selectors.js';

const displayData = () => {
  scoreData.forEach((data) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${data.name} : ${data.score}`;
    ul.appendChild(listItem);
  });
};

export default displayData;
