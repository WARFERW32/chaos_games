const box = document.querySelector('.box');
const container = document.querySelector('.container');
const pointOff = document.querySelector('.point-off');
const btn = document.querySelector('.btn');
const start = document.querySelector('.start');
const btnStart = document.createElement('button');
const btnStop = document.querySelector('.stop');
// const div = document.querySelector('.point');




const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let index = 0;
let idname = 1;
let inStPo = 0;
let canNot = true   
let flag = true
let tabX = [];
let tabY = [];
let tabXpiont = [];
let tabYpoint = [];
let items = [];

pointOff.addEventListener('click', () => {
    pointOff.style.background = 'rgb(233, 160, 24)'
    canNot = false;
    inStPo = 0
    container.addEventListener('mousedown', (e) => {
        
        const x = e.offsetX
        const y = e.offsetY
        
        start.style.display = 'inline-block'
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
        tabXpiont.push(x);
        tabYpoint.push(y);
        console.log(x, y);
        
        
    })
})

btnStart.addEventListener('click', () => {
    
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
    node.setAttribute('id',`item${idname++}`)
    node.textContent = letters[index]
    node.style.left = `${x}px`;
    node.style.top =  `${y}px`;
    index++ 
    tabX.push(x);
    tabY.push(y);
    console.log(x, y);
})
start.addEventListener("click", () => {
    let a = tabX[index-1];
    let b = tabY[index-1];
    let c = tabXpiont[index-1];
    let d = tabYpoint[index-1];  
    const disX = (a+c)/2;
    const disY = (b+d)/2;
    const divCen = document.createElement('div');
    container.appendChild(divCen);
    divCen.classList.add('point');
    divCen.style.left = `${disX}px`;
    divCen.style.top = `${disY}px`;
    console.log(disX, disY);
})

btn.addEventListener('click', () => {
    tabX = [];
    tabY = [];
    tabXpiont = [];
    tabYpoint = [];
    container.textContent = ''
    index = 0;
    idname = 1;
    start.style.display = 'none'
    pointOff.style.display = 'inline-block'
    canNot = true
    
    pointOff.style.background = '';
    flag = true
})



        
