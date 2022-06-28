function operate(a, b, op)  {
    const ops = {
        '+': add,
        '-': subtract,
        '/': divide,
        '*': multiply,
    };

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


function display(num)  {
    const output = document.querySelector('.output');
    output.innerText = num;
}