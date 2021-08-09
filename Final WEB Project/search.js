import { onClick } from "./index.js";

const url = 'https://api.tvmaze.com/search/shows?q=';
const input = document.querySelector('input');
const ul = document.querySelector('.searchList');
const searchResultsDiv = document.querySelector('.searchResults');

input.addEventListener('click', clear);

function clear (){
    input.value = '';
    onPress();
}

export function onPress (event) { 
    const list = document.querySelector('.searchList');
    list.remove();
    let request = new XMLHttpRequest();
    request.open('GET', url + input.value);
    request.send();
    request.onload = function (){
        if (request.status >= 200 && request.status < 400){
            let ul = document.createElement('ul');
            ul.setAttribute('class', 'searchList');
            let response1 = request.responseText;
            let response = JSON.parse(response1);
            //console.log(response);
            response.forEach(function(el){
                let id = el.show.id;
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.innerText = el.show.name;
                a.setAttribute('href', './show.html');
                a.setAttribute('target', '_blank');
                li.setAttribute('id', id);
                li.appendChild(a);
                li.addEventListener('click', onClick);
                ul.appendChild(li);
            })
            searchResultsDiv.appendChild(ul);
        }
    }
}

