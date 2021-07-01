var button = document.getElementById('loadNew');
var body = document.querySelector('body');
var img1 = document.getElementsByTagName('img');

function addImage (){
var request = new XMLHttpRequest();

request.open('GET', 'https://dog.ceo/api/breeds/image/random', true);

request.onload = function(){
    if (request.status >= 200 && request.status < 400){
        var data = JSON.parse(request.responseText);
    }
    if (img1[0]){
        body.removeChild(img1[0]);
    }

    var img = document.createElement('img');
    img.setAttribute('src', data.message);
    body.appendChild(img);
}
request.send();
}

button.addEventListener('click', addImage);