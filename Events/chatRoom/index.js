
var d = document.getElementById('Submit');
var i = document.getElementsByClassName('message');
var t = document.getElementById('chat');
var p;
var c;
d.onclick = function(){
    p = document.createElement('p');
    c = i.value;
    p.value = c;
    t.appendChild(p);
    i.value = "";
}