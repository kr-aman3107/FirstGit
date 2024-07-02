// Write your code below:
const header=document.getElementById('header');
header.style.backgroundColor='green';
header.style.color='orange'
header.style.borderBottom='3px solid orange'


const heading=document.getElementById('main-heading');
heading.textContent='Fruit World'
heading.style.color='orange'

const basket=document.getElementById('basket-heading');
basket.style.color='green'

const thanksDiv = document.getElementById('thanks');
const paragraph = document.createElement('p');
paragraph.textContent = 'Please visit us again';
thanksDiv.appendChild(paragraph);
