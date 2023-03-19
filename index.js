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
console.log("-------------------------------------");
console.log("Aufgabe 1");
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
console.log("-------------------------------------");
console.log("Aufgabe 2");
console.log(isEmpty(schedule));
console.log(isEmpty(schedule2));


//Aufgabe 3
console.log("-------------------------------------");
console.log("Aufgabe 3");
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
console.log("-------------------------------------");
console.log("Aufgabe 4");
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
console.log("-------------------------------------");
console.log("Aufgabe 5");
console.log(menu.width);
console.log(menu.length);
console.log(menu.title);

//Aufgabe 6
console.log("-------------------------------------");
console.log("Aufgabe 6");

const user6 = {
  name6: "John",
  go() {
    console.log(this.name6);
  }
};
user6.go();


//Aufgabe 7
console.log("-------------------------------------");
console.log("Aufgabe 7");

class Animal 
{
  constructor(name)
  {
    this.name = name;
  }  
}
class Rabbit extends Animal
{
  constructor(name)
  {
    super(name)
    this.created = Date.now();
  }
}
let rabbit = new Rabbit("White rabbit");
console.log(rabbit);


//Aufgabe 8
console.log("-------------------------------------");
console.log("Aufgabe 8");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  insertLast(data) {
    let new_node = new Node(data);
    if (!this.head) {
      this.head = new_node;
    } else {
      let curr_node = this.head;
      while (curr_node.next) {
        curr_node = curr_node.next;
      }
      curr_node.next = new_node;
    }
  }

  insertFirst(data) {
    let new_node = new Node(data);
    new_node.next = this.head;
    this.head = new_node;
  }

  search(data) {
    let curr_node = this.head;
    while (curr_node) {
      if (curr_node.data === data) {
        return curr_node;
      }
      curr_node = curr_node.next;
    }
    return null;
  }

  delete(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let curr_node = this.head;
    while (curr_node.next) {
      if (curr_node.next.data === data) {
        curr_node.next = curr_node.next.next;
        return;
      }
      curr_node = curr_node.next;
    }
  }

  printList() {
    let curr_node = this.head;
    let list_str = '';
    while (curr_node) {
      list_str += curr_node.data + ' ';
      curr_node = curr_node.next;
    }
    console.log(list_str.trim());
  }
}

