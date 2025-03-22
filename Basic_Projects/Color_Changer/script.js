const body = document.querySelector('body');
const button = document.querySelectorAll('.button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

button.forEach( function (btn) {

    btn.addEventListener('click', function (e) {
        if(e.target.id === 'grey') {
        body.style.backgroundColor = e.target.id; 
    }
        if(e.target.id === 'yellow') {
        body.style.backgroundColor = e.target.id; 
    }
        if(e.target.id === 'orange') {
        body.style.backgroundColor = e.target.id; 
    }
        if(e.target.id === 'white') {
        body.style.backgroundColor = e.target.id; 
    }
        if(e.target.id === 'green') {
        body.style.backgroundColor = e.target.id; 
    }
})
})