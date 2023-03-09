const box = document.querySelector('.box');
const container = document.querySelector('.container');

const pointA = document.querySelector('.pointA');
const pointB = document.querySelector('.pointB');
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let index = 0;
    

const btn = document.querySelector('.btn');

let flag = false
container.addEventListener('mousedown', (e) => {
    const x = e.offsetX
    const y = e.offsetY 
    console.log(index);
    if(index == letters.length){
        index = 0
    }
    const node = document.createElement('div')
    container.appendChild(node)
    node.classList.add('point');
    node.textContent = letters[index]
    node.style.left = `${x}px`;
    node.style.top =  `${y}px`;
    index++
})

btn.addEventListener('click', () => {
    container.textContent = ''
    index = 0
})

