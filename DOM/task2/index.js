/*
Traversing
Create two unordered lists.
Each list should be wrapped in a div element.
One &lt;li&gt; element in the second list should have a class “active”, which sets its
background color.
Create a function that selects the &lt;li&gt; element with class “active”.
Remove the class from that element, and then select the first &lt;li&gt; element in the
first unordered list using node relations.
Apply class to that newly selected &lt;li&gt; element
*/
var d = document.querySelector("#active");
d.className = "active";

function selectLi (){
    
    var c = d.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
    c.className = 'active';
    d.className = '';
}
selectLi();