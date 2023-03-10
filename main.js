const box = document.querySelector('.box');
const container = document.querySelector('.container');
const pointOff = document.querySelector('.point-off');
const btn = document.querySelector('.btn');
const start = document.querySelector('.start');
const btnStart = document.createElement('button');

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let index = 0;
let idname = 1;
let inStPo = 0;
let canNot = true   
let flag = true

pointOff.addEventListener('click', () => {
    pointOff.style.background = 'rgb(233, 160, 24)'
    canNot = false;
    inStPo = 0
    container.addEventListener('mousedown', (e) => {
        const x = e.offsetX
        const y = e.offsetY
        
        if(inStPo >= 1) return;
        pointOff.style.display = 'none'
        const startPoint = document.createElement('div');
        container.appendChild(startPoint);
        startPoint.classList.add('point');
        startPoint.setAttribute('id',`${inStPo}`);
        startPoint.textContent = 'First point'
        startPoint.style.left = `${x}px`;
        startPoint.style.top =  `${y}px`;
        inStPo++
        
        box.appendChild(btnStart);
        btnStart.classList.add('btnStyle')
        // btnStart.classList.add('start')
        btnStart.textContent = "Start"
    })
})



container.addEventListener('mousedown', (e) => {
    if(canNot == false) return;
    pointOff.style.display = 'inline-block'

    const x = e.offsetX
    const y = e.offsetY

    if(index == letters.length){
        index = 0
    }

    const node = document.createElement('div')
    container.appendChild(node)
    node.classList.add('point');
    node.setAttribute('id',`${idname++}`)
    node.textContent = letters[index]
    node.style.left = `${x}px`;
    node.style.top =  `${y}px`;
    index++ 
    console.log(pointOff.style.display);
})



btn.addEventListener('click', () => {
    container.textContent = ''
    index = 0;
    idname = 1;
    pointOff.style.display = 'inline-block'
    canNot = true
    box.removeChild(btnStart)
    pointOff.style.background = ''
})

