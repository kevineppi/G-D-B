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


//Aufhabe 2
let schedule = {};
let schedule2 = {};
schedule2["8:30"] = "get up";
function isEmpty(obj) {
  for(let key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
  }
  return true;
}
console.log(isEmpty(schedule));
console.log(isEmpty(schedule2));


//Aufgabe 3

const usera3 = {name : "John"};
console.log(usera3.name);
usera3.name = "Adilette";
console.log(usera3.name);


//Aufgabe 4

let salaries = 
{
John : 100,
Ann : 160,
Eppensteiner : 130
};

function istleer(obj)
{
  let sum = 0;
    for(let key in obj) 
    {
      if(obj.hasOwnProperty(key))
        
          for (let key in obj) { // Schleife durch alle Schlüssel des Objekts
            sum += obj[key]; // Summieren jedes Werts auf die Variable
          }
          return  "sum =" + " " + sum;        
    }
    return false;
};
console.log(istleer(salaries));


//Aufgabe 5

let menu = 
{
  width: 200,
  length : 300,
  title : "My menu"
};
function multiplyNumeric(obj)
{
  for (let key in obj) 
  { 
    if(typeof obj[key] === 'number')
    {
         obj[key] *= 2;
    }
    else
    {
      obj.key = obj.key;
    }
  }
}
multiplyNumeric(menu);
console.log(menu.width);
console.log(menu.length);
console.log(menu.title);

//Aufgabe 6

let user6
{
  name6 = "John",
  go: function()) {console.log(this.name)} 
}

