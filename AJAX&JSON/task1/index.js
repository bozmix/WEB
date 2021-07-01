
var newXHR = new XMLHttpRequest();

newXHR.open('GET', 'http://www.geoplugin.net/xml.gp?ip=109.92.154.137');

newXHR.onload = function(event){
    if (newXHR.status >= 200){
        console.log(newXHR.responseText);
    }
}

newXHR.send();