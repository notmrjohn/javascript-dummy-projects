if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function increment() {
    let counter = localStorage.getItem('counter');

    counter++;
    document.querySelector('h1').innerHTML = counter;

    localStorage.setItem('counter', counter);
}

function decrement() {
    let counter = localStorage.getItem('counter');

    counter--;
    document.querySelector('h1').innerHTML = counter;

    localStorage.setItem('counter', counter);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');

    document.querySelector('#incrementor').onclick = increment;
    document.querySelector('#decrementor').onclick = decrement;

    setInterval(increment, 1000);
});