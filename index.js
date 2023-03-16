// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;



//Aufgabe 1
let user1 = {};
let user = {

 name : "John"

};
user.surename = "Smith";
user.name = "Pete";
//delete user.name;
document.getElementById("app").innerHTML =
"Firstname : " + user.name + "," + " Lastname :" +user.surename;
console.log(user);
console.log(user1);

function(schedule)
{
this.schedule = schedule;
}