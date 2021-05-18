/*
window.navigator
Create a function that prints out in the console the following information
● the platform on which the browser is running
● the information about the browser version
● the company that created that browser
Each piece of information should be printed out in a new row.
Create new “isOnline” function that checks if the browser is online.
It should print out “online” when the browser is online and “offline” when there is
no Internet connection.
*/

function platform () {
    console.log("platform is " + window.navigator.platform);
};

platform();

function browserVersion () {
    console.log("browser version is " + window.navigator.appVersion);
}

browserVersion();

function browserCompany (){
    console.log("company that made browser is " + window.navigator.vendor)
}

browserCompany();

function isOnline (){
    if (window.navigator.onLine){
        console.log("online");
    } else {
        console.log("offline");
    }
}

isOnline();

/*
window.screen
Create a function that prints out the following information in the console:
● current browser width and height
● max possible browser height
*/

function browserDimension (){
    console.log("current browser width is " + window.screen.width + " and height is " + window.screen.height + ", and max possible browser height is " + window.screen.availHeight);
}

browserDimension();