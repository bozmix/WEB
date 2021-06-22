var $player = $('#player')
var $field = $('#field')
var $button = $('button')

$field.on('click', function (click){
    if($player.hasClass('active')){
    var x = click.pageX + 'px';
    var y = click.pageY + 'px';
    $player.css({
        'top': y,
        'left': x
    })
    }
})

$button.on('click', function(event){
    $player.toggleClass('active');
})