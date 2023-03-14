const box = document.querySelector('.box');
const container = document.querySelector('.container');
const pointOff = document.querySelector('.point-off');
const btn = document.querySelector('.btn');
const start = document.querySelector('.start');
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
let nextPointX = [];
let nextPointY = [];
let items = [];
let newPoint;


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
        startPoint.style.left = `${x}px`;
        startPoint.style.top =  `${y}px`;
        inStPo++
        tabXpiont.push(x);
        tabYpoint.push(y);  
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
    node.setAttribute('id',`item${idname++}`)
    node.textContent = letters[index]
    node.style.left = `${x}px`;
    node.style.top =  `${y}px`;
    index++ 
    tabX.push(x);
    tabY.push(y);
})
start.addEventListener("click", (e) => {
    newPoint = setInterval(() => {
            let a = tabX[index-1];
            let b = tabY[index-1];
            let c = tabXpiont[index-1];
            let d = tabYpoint[index-1]; 
            const div = container.lastElementChild;
        for(let i = 0; i < 5; i++){
             
            const disX = (a+c)/2;
            const disY = (b+d)/2;
            div.style.left = disX;
            div.style.top = disY;
            const divCentral = document.createElement('div');
            container.appendChild(divCentral);
            divCentral.classList.add('point');
            divCentral.style.left = `${disX}px`;
            divCentral.style.top = `${disY}px`;
            nextPointX.push(disX/2);
            nextPointY.push(disY/2);

        }
            
        let x = e.offsetX;
        let y = e.offsetY;

        
        console.log(nextPointX, nextPointY);
        // console.log(disX, disY);console.log(div);
        // console.log(tabX, tabY);
        // console.log(tabXpiont, tabYpoint);
        // console.log(divX, divY);
        // index++
    }, 5000);
})


btn.addEventListener('click', () => {
    clearInterval(newPoint)
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



        
