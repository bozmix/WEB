var player = document.getElementById('player');
var field = document.getElementById('field');
var control = document.getElementById('control');

function move (click){
    if (field.className === 'active'){
        player.style.top = click.pageY + 'px';
        player.style.left = click.pageX + 'px';
        
    }
}

function stop(){
    field.classList.toggle('active');
    if (field.className === 'active'){
        control.value = 'stop moving';
    } else {
        control.value = 'start moving';
    }
}

field.addEventListener('click', move);
control.addEventListener('click', stop);

