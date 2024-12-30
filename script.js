const  shapeElement=document.getElementById('sq')
const changecolor=document.getElementById('color-chn');
const changeshape=document.getElementById('shape-chn')

const colors=['green','blue','yellow','red','purple','black']
let curr=0;
let istrue=true;



changecolor.addEventListener('click', () => {
   
    curr = (curr + 1) % colors.length;
    round.style.backgroundColor = colors[curr];
});


let currentShape = 'circle';
changeshape.addEventListener('click', () => {
    if (currentShape === 'circle') {
        shapeElement.classList.remove('circle');
        shapeElement.classList.add('square');
        currentShape = 'square'; 
    } else if (currentShape === 'square') {
        shapeElement.classList.remove('square');
        shapeElement.classList.add('star');
        currentShape = 'star'; 
    } else if(currentShape==='star'){
        shapeElement.classList.remove('star');
        shapeElement.classList.add('diamond');
        currentShape = 'diamond'; 
    }

    else if(currentShape==='diamond'){
        shapeElement.classList.remove('diamond');
        shapeElement.classList.add('cross');
        currentShape = 'cross';
    }
    else{
        shapeElement.classList.remove('cross');
        shapeElement.classList.add('circle');
        currentShape = 'circle'
    }
});