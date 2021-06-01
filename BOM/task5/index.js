/*
Window Methods

● Create a function that shows the user a greeting message using alert
● Then a question is presented to the user using prompt
● When the user provides the answer, that answer is used in the confirm
dialog
● The format of the message in the dialog should be: &quot;We will submit this
answer now! &quot; + the answer
● If the user clicks OK, show alert with success message
● If the user clicks Cancel, don&#39;t show anything
*/
function greetingMeessage(){
    alert('Hello user, how are you? :)')
};
greetingMeessage();

function firstQuestion(){
    var text = prompt('Do you want to go to the next step?');
    return text;
}
var a = firstQuestion();

function confirmMessage (){
    return confirm("We will submit this answer now! Are you sure? " + a);
};

var b = confirmMessage();

if (b){
    alert('You successfuly submited your answer! Congratulations!')
}