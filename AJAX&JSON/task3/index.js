var input = document.getElementById('search');
var resultsDisplay = document.getElementById('results');
var api = 'https://api.github.com/search/users?q=';
var result;
var items;

function otherFunction (event){
    var id = event.target.getAttribute('id');
    var index = parseInt(id.slice(6));
    var url = 'https://api.github.com/users/';
    var username = items[index].login;
    var input1 = username + '/repos';
    var inputValue = url + input1;
    localStorage.setItem('url', inputValue)
    
}
 
const someFunction =(event) =>{
    if (event.keyCode === 13){
        var inputValue = input.value;
        $.ajax(api + inputValue, {
            success: function (data) {
                var index = 0;
                data.items.forEach(function(user){
                    var resultDiv = document.createElement('div');
                    resultDiv.setAttribute('class', 'resultDiv');
                    resultDiv.setAttribute('id','index-'+index);
                    resultsDisplay.appendChild(resultDiv);
                    var resultImg = document.createElement('img');
                    resultImg.setAttribute('src', user.avatar_url);
                    resultImg.setAttribute('id','index-'+index);
                    resultDiv.appendChild(resultImg);
                    var resultA = document.createElement('a');
                    resultA.setAttribute('href', './repos.html');
                    resultA.setAttribute('id','index-'+index);
                    resultA.setAttribute('target', '_blank');
                    resultA.textContent = user.login;
                    resultDiv.appendChild(resultA);
                    index++;
                })
                items = data.items;
                result = document.querySelectorAll('.resultDiv');
                result.forEach(function(el){
                    el.addEventListener('click', otherFunction);
                })
            }
        });
    }
}


window.addEventListener('keypress', someFunction);