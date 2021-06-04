/*
Attributes
Create a form that contains multiple input elements with labels.
Some of those elements should be required.
Create a function that validates the form.
The function checks each input element that belongs to the form.
If the element has the required attribute and no data, it should get red borders.
*/
function checkForm (){
    var d = document.querySelectorAll('.required');
    for (var i = 0; i < d.length; i++){
        var t = d[i].value;
        var c = d[i].className;
        if (t == '' && c == 'required'){
            d[i].className = "empty";
            d[i].placeholder = 'This Field is required';
        }
    }

}
