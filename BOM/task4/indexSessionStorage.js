/*
window.localStorage
Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print &quot;There is no data&quot; in the console.
Create a function that removes data from the local storage.
Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the
stored value.
Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data livecycle.
*/
function setData (p1, p2, p3){
    sessionStorage.setItem('first argument', p1);
    sessionStorage.setItem('second argument',p2);
    sessionStorage.setItem('third argument', p3);
}



function readData (){
    var output1 = sessionStorage.getItem('first argument');
    var output2 = sessionStorage.getItem('second argument');
    var output3 = sessionStorage.getItem('third argument');
    if (output1 != null || output2 != null || output3 != null){
        return console.log(output1, output2, output3);
    } else {
        return console.log("There is no data");
    }
}

function removeData (){
    window.sessionStorage.clear();
}


