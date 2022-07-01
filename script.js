const ops = {
    '+': add,
    '-': subtract,
    '/': divide,
    '*': multiply,
};

function add(a, b)  {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b)   {
    if (b == 0) {
        return 'i dont think so crab:)';
    }
    return Math.floor((a / b) * 10000) / 10000;
}

let displayValue = '';
let lastValue = null;
let activeOp = null;
let lastOp = null;


function operate(op, a = lastValue, b = displayValue)  {
    return ops[op](a, b);
}

function reset()    {
    lastValue = null;
    activeOp = null;
    lastOp = null;
    displayValue = '';
}


function equals()  {
    let answer = operate(lastOp);
    activeOp = null;
    display(answer);
    return answer;
}

function clearUp()    {
    const clearButton = document.querySelector('.clear');
    clearButton.classList.toggle('clicked');
    reset();
    display('');
}

function backUp()   {
    const backButton = document.querySelector('.delete');
    backButton.classList.toggle('clicked');
}

function opClick(op)  {
    if (op === '=' && displayValue && lastValue)  {
        const opButton = document.querySelector('#equals');
        opButton.classList.toggle('clicked');
        equals();
        reset();
    }
    else if (!activeOp && op !== '=') {
        const opButton = document.querySelector('#' + ops[op].name);
        opButton.classList.toggle('clicked');
        activeOp = op;
    
        if (lastValue)    {
            equals();
        }

        lastOp = op;

        lastValue = displayValue;
        display(lastValue);
        displayValue = '';
    }
}


function display(num, isNumber = false)  {
    let output = document.querySelector('.output'); 
    
    if (isNumber)   {
        displayValue += num;
        activeOp = null;
        const number = (num != '.') ? document.querySelector('.n' + num) : document.querySelector('#decimal');
        number.classList.toggle('clicked');
    }
    else{
        displayValue = num;
    }

    output.innerText = displayValue;
}

document.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key < 10)   {
        display(e.key, true);
    }
    else if (ops[e.key])    {
        opClick(e.key);
    }
    else if (e.key === 'Backspace')  {
        backUp();
    }
    else if (e.key === 'Enter' || e.key === '=')  {
        opClick('=');
    }
});

const opButtons = document.querySelectorAll('.op');
const numButtons = document.querySelectorAll('.num');
opButtons.forEach(button => button.addEventListener('transitionend', removeTransition));
numButtons.forEach(button => button.addEventListener('transitionend', removeTransition));
const advButtons = document.querySelectorAll('.adv');
advButtons.forEach(button => button.addEventListener('transitionend', removeTransition));

function removeTransition(b) {
    if (b.propertyName !== 'transform') return;
    this.classList.remove('clicked');
}