let url = 'https://api.tvmaze.com/shows';
const input = document.querySelector('input');
import { onPress } from "./search.js";

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
        if (request.status >= 200 && request.status < 400){
            let response = JSON.parse(request.responseText);
            //console.log(response);
            let list = [];
            let moviesList = [];
            let ratingsListShort = [];
            let ratingsList = [];
            let i = 0;
            let TVShows = document.querySelector('.TVShows');

            response.forEach(function(el){
                list.push(el.rating.average);
            })

            list.sort(function(a, b){
                return b - a
            })

            ratingsList = list.slice(0, 50);

            ratingsListShort.push(ratingsList[0]);

            ratingsList.forEach(function(el){
                if (el !== ratingsListShort[i]){
                    ratingsListShort.push(el);
                    i++;
                }
            })
            
            ratingsListShort.forEach(function(el){
                response.forEach(function(movie){
                    if (movie.rating.average === el){
                        moviesList.push(movie);
                    }
                })
            })
            moviesList.splice(50, 240);
            //console.log(moviesList);

            moviesList.forEach(function(el){
                let div = document.createElement('div');
                let img = document.createElement('img');
                let heading = document.createElement('h4');
                let link = document.createElement('a');

                img.setAttribute('src', el.image.original);
                img.setAttribute('alt', 'Show Image');

                link.setAttribute('href', './show.html');
                link.setAttribute('target', '_blank');
                link.setAttribute('class', 'col-3');
                link.setAttribute('id', el.id)

                heading.textContent = el.name;

                div.appendChild(img);
                div.appendChild(heading);
                link.innerHTML = div.innerHTML;
                link.addEventListener('click', onClick);
                TVShows.appendChild(link);
            })
        }
    }
    request.send();



export function onClick (event){
    let targetId = parseInt(event.target.parentElement.getAttribute('id'));
    localStorage.setItem('id', targetId);
}

input.addEventListener('keyup', onPress);
