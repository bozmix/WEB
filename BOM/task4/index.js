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

function localData (){
    var data = window.localStorage;
    return data;
}

function readData (){
    var output = localData();
    if (output){
        return console.log(otput);
    } else {
        return console.log("There is no data");
    }
}