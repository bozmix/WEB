

var c = localStorage.getItem('repositories');
var e = JSON.parse(c);
console.log(e);

e.forEach(function(el){
    var c = document.querySelector('.repo');
    var d = document.createElement('div');
    d.setAttribute('class', 'repositorium');
    var date = new Date (el.created_at);
    var dateOutput = date.getFullYear() + '.' + date.getMonth() + '.' + date.getDay() + '.';
    d.innerHTML = '<h3>' + el.name + '</h3>' + '<p>' + el.description + '</p>' + '<p>' + dateOutput + '</p>';
    c.appendChild(d);
    localStorage.clear();
})