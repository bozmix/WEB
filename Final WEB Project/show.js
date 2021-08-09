let show = document.querySelector('.show');
let heading = document.querySelector('.heading');
let image = document.querySelector('.image');
let seasons = document.querySelector('.seasons');
let list = document.querySelector('.list');
let castList = document.querySelector('.castList');
let description = document.querySelector('.description');
let castsDiv = document.querySelector('.casts');
let url = ' https://api.tvmaze.com/shows/';
let id;


let idString = localStorage.getItem('id');
id = parseInt(idString);
localStorage.clear();


let request = new XMLHttpRequest();

request.open('GET', url + id);

request.onload = function (){
    if (request.status >= 200 && request.status < 400){
        let response = JSON.parse(request.responseText);
        //console.log(response);

        heading.innerText = response.name;

        let imgNode = document.createElement('img');
        imgNode.setAttribute('src', response.image.original);
        imgNode.setAttribute('alt', 'TV Show poster');
        image.appendChild(imgNode);

        let descriptionTextHTML = response.summary;
        //console.log(descriptionTextHTML);
        let descriptionHeadline = document.createElement('h5');
        descriptionHeadline.innerText = 'Show Details';
        description.appendChild(descriptionHeadline);

        let descriptionText = document.createElement('p');
        descriptionText.innerHTML = descriptionTextHTML;
        description.appendChild(descriptionText);
    }
}

request.send();


let urlSeasons = ' https://api.tvmaze.com/shows/' + id + '/seasons';

let seasonRequest = new XMLHttpRequest();

seasonRequest.open('GET', urlSeasons);

seasonRequest.send();

seasonRequest.onload = function (){
    if (seasonRequest.status >= 200 && seasonRequest.status < 400){
        let response = JSON.parse(seasonRequest.responseText);
        //console.log(response);

        let headline = document.createElement('h5');
        headline.innerText = 'Seasons (' + response.length + ')';
        seasons.appendChild(headline);

        response.forEach(function(el){
            let li = document.createElement('li');
            li.innerText = el.premiereDate + ' - ' + el.endDate;
            list.appendChild(li);
        })
        seasons.appendChild(list);
    }
}


let urlCast = 'https://api.tvmaze.com/shows/' + id + '/cast';

let castRequest = new XMLHttpRequest();

castRequest.open('GET', urlCast);

castRequest.send();

castRequest.onload = function(){
    let response = JSON.parse(castRequest.responseText);
    response.splice(10, 200);
    //console.log(response);
    response.forEach(function (el){
        let li = document.createElement('li');
        li.innerText = el.person.name;
        castList.appendChild(li);
    })
}