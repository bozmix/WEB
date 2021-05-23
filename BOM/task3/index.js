/*
window.location
Write a function that prints out website’s url information in the console:

● full url address
● domain name
● used protocol
● parameters which are part of URL.
Create a function for reloading the page.
Create a function that redirects you to a website address passed to it.
Test all three functions
*/
function printURL (){
    console.log(window.location.href);
}
printURL();

function printDomain(){
    console.log(window.location.hostname);
}
printDomain();

function printProtocol (){
    console.log(window.location.protocol);
}
printProtocol();

function printParameters (){
    console.log(window.location.search);
}
printParameters();

function reloadPage (){
    window.location.reload;
}
reloadPage();
/*
function redirect(page){
    window.location.replace(page);
}
redirect('https//web.facebook.com/?_rdc=1&_rdr')
*/