var player = document.getElementById('player');
var field = document.getElementById('field');


function move (click){
    player.style.top = click.pageY + 'px';
    player.style.left = click.pageX + 'px';
}


field.addEventListener('click', move);