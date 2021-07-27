

var c = localStorage.getItem('url');
var f = document.querySelector('.repo');


$.ajax(c, {
    success: function(data){
        data.forEach(function(el){
            var d = document.createElement('div');
            d.setAttribute('class', 'repositorium');
            var img = document.createElement('img');
            img.setAttribute('src', './github-icon-png-15.jpg');
            var date = new Date (el.created_at);
            var dateOutput = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate() + '.';
            d.innerHTML = '<h3> Repository Name: ' + el.full_name + '</h3>' + '<p>Repository description: ' + el.description + '</p>' + '<p>Repository creation date: ' + dateOutput + '</p>' + '<p>Used language: ' + (el.language || 'Unknown') + '</p>';
            d.appendChild(img);
            f.appendChild(d);
        })
    }
})
localStorage.clear();