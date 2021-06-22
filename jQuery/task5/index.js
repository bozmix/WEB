var $galery1 = $('.first');
var $galery2 = $galery1.siblings().first();
var $button = $('button');

var $selected = $galery1.children().eq(1).addClass('selected');

function remove(){
    $('.selected').removeClass('selected');
    $galery2.children().odd('.wraper').addClass('selected');
}

$button.on('click', remove);