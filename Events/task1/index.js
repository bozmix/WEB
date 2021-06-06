

var el = document.querySelector('#dugme');

function changeBackground(){
    if(el.className !== 'dugme'){
        return null;
    }
    var d = document.querySelector('form');
    d.classList.toggle('background');
}


el.addEventListener('click', changeBackground);

var handler = changeBackground;


var del = document.querySelector('.second');

function turnOff(){
    var c = document.querySelector('#dugme');
    c.classList.toggle('dugme');
    if(c.className === 'dugme'){
        del.textContent = 'Turn Off';
    } else {
        del.textContent = 'Turn On';
    }
}

del.addEventListener('click', turnOff);