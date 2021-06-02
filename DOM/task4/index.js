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
function createDropdown (values, node){
   
    var d = document.querySelector(node);
    var title = document.createElement('h3');
    var titleText = document.createTextNode(values[0]);
    var heading = title.appendChild(titleText);
    var form = document.createElement("form");
    var dropdown = document.createElement("select");
    var s = d.appendChild(heading);
    var c = d.appendChild(form).appendChild(dropdown);
    dropdown.setAttribute('name', values[0]);

    for (var i = 1; i < values.length; i++){
        var options = document.createElement("option");
        var text = document.createTextNode(values[i]);
        options.setAttribute('value', values[i]);
        options.appendChild(text);
        c.appendChild(options)
    }
    
    
}


createDropdown(['Your Favourite Animal', 'Horse', 'Cat', 'Dog', 'Hamster', 'Parrot', 'Golden Fish', 'Pig'], '.first')

createDropdown(['Your Favourite Football Club', 'Red Star', 'Partizan', "Radnicki", 'Borac', 'Proleter', 'Vojvodina'], '.second')