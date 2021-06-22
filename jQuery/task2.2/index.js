$('li:first').css({
    'border-bottom' : 'solid 2px red'
})

$('li').css({
    'text-transform':'uppercase'
})

$('.active').css({
    'color':'blue'
})

var $list = $('li');
$list.eq([$list.length/2-0.5]).css({
    'background-color':'red'
})