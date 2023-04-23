const container = document.querySelector('#container');

const red = document.createElement('p');
red.style.color = 'red';
red.textContent = `Hey I'm red!`;

const blue = document.createElement('h3');
blue.style.color = `blue`;
blue.textContent = `I'm a blue h3!`;

const pink = document.createElement('div');
const pinkH1 = document.createElement('h1');
const pinkP = document.createElement('p');

pink.style.cssText = "border: 1px solid black; background-color: pink;"
pinkH1.textContent = `I'm in a div`;
pinkP.textContent = `ME TOO`

pink.append(pinkH1, pinkP);
container.append(red, blue, pink);
