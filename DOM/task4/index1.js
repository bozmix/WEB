/*
InnerHTML
Do the following exercise in two ways: using DOM manipulation methods and
using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second
is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the
select element.
Add the whole dropdown list to DOM .
Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page.
*/
function createDropdown1 (values, node){
    var d = document.querySelector(node);

    var output = '';
    for(var i = 1; i < values.length; i++){
        output += '<option value=' + values[i] + '>' + values[i] + '</option>';
    }

    d.innerHTML = '<h3>' + values[0] + '</h3> <br>' + '<form><select name=' + values[0] + '>' + output +'</select></form>';
};

createDropdown1(['Your Favourite Animal', 'Horse', 'Cat', 'Dog', 'Hamster', 'Parrot', 'Golden Fish', 'Pig'], '.first');

createDropdown1(['Your Favourite Football Club', 'Red Star', 'Partizan', "Radnicki", 'Borac', 'Proleter', 'Vojvodina'], '.second')