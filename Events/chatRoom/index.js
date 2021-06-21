
var d = document.getElementById('Submit');
var i = document.getElementById('message');
var t = document.getElementById('chat');

d.onclick = function(){
    var c = document.createTextNode(i.value);
    var p = document.createElement('p');
    p.appendChild(c);
    t.appendChild(p);
    i.value = '';
}