/*
Selecting One/Multiple Elements
Create two unordered lists on the page.
Create a function that selects the second list and applies a class that sets some
background color to it.
Create a second function that, when triggered, selects all &lt;li&gt; elements on the
page.
The function also sets a class that sets some bg color to every &lt;li&gt; element.
Create one more unordered list and one more function
The function​ should select only &lt;li&gt; elements from that last list
Each &lt;li&gt; element should get a class that sets some bg color and transforms the
text to uppercase.
*/

function selectSecond (){
  //  var x = document.querySelectorAll(".example");

   var d = document.querySelector("#second");
   console.log("ja stampam ", d);
    d.className = 'second';
    
}

selectSecond();

function selectLi (){
    var d = document.querySelectorAll("li");
    for (var i = 0; i < d.length; i++) {
        d[i].className = "red";
    }
}

selectLi();

function thirdList (){
    var d = document.querySelectorAll('.third li');
    for (var i = 0; i < d.length; i++) {
        d[i].className = "yellow";
    }
}

thirdList();