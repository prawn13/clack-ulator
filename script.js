const ops = {
    '+': add,
    '-': subtract,
    '/': divide,
    '*': multiply,
    '=': equals,
};

let displayValue = '';
let lastValue = '';
let activeOp = '';

function operate(a, b, op)  {
    return ops[op](a, b);
}

function add(a, b)  {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b)   {
    if (b == 0) {
        return 'i dont think so :)';
    }
    return a / b;
}

function equals(answer)   {
    return answer;
}

function opClick(op)  {
    activeOp = op;
    const opButton = document.querySelector('#' + ops[op].name);
    opButton.classList.toggle('clicked');
    
    
    if (lastValue)    {
        let answer = operate(lastValue, displayValue, op);
        display(answer);

    }

    lastValue = displayValue;

    
}


function display(num)  {
    let output = document.querySelector('.output'); 

    if (activeOp)  {
        const opButton = document.querySelector('#' + ops[activeOp].name);
        opButton.classList.toggle('clicked');
        activeOp = '';
        displayValue = '';
    }

    displayValue += num;
    console.log(displayValue);

    output.innerText = displayValue;

}

document.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key < 10)   {
        display(e.key);
    }
});