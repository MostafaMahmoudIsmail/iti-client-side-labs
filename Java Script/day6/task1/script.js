function Persons(name, position, office, age, startDate) {
  this.name = name;
  this.position = position;
  this.office = office;
  this.age = age;
  this.startDate = startDate;
}

let person1 = new Persons(
  "Omar",
  "Frontend Developer",
  "Cairo",
  25,
  "15/03/2021"
);
let person2 = new Persons(
  "Mona",
  "Backend Engineer",
  "Dubai",
  28,
  "22/07/2019"
);
let person3 = new Persons(
  "Youssef",
  "Data Scientist",
  "Berlin",
  30,
  "10/11/2020"
);
let person4 = new Persons(
  "Salma",
  "UI/UX Designer",
  "London",
  26,
  "05/06/2022"
);
let person5 = new Persons(
  "Karim",
  "Mobile Developer",
  "Toronto",
  27,
  "12/09/2018"
);
let person6 = new Persons("Layla", "QA Engineer", "New York", 29, "03/04/2020");
let person7 = new Persons(
  "Hassan",
  "DevOps Engineer",
  "Paris",
  31,
  "19/01/2017"
);

let personArray = [
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
];
function fillTable() {
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  personArray.forEach((per) => {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    for (let attr in per) {
      let cell = document.createElement("td");
      cell.textContent = per[attr];
      row.appendChild(cell);
    }

    table.appendChild(row);
  });
}
fillTable();

let upname = document.getElementsByClassName("upname")[0];
let downname = document.getElementsByClassName("downname")[0];
upname.addEventListener("click", () => sortup("name"));
downname.addEventListener("click", () => sortdown("name"));

let upposition = document.getElementsByClassName("upposition")[0];
let downposition = document.getElementsByClassName("downposition")[0];
upposition.addEventListener("click", () => sortup("position"));
downposition.addEventListener("click", () => sortdown("position"));

let upoffice = document.getElementsByClassName("upoffice")[0];
let downoffice = document.getElementsByClassName("downoffice")[0];
upoffice.addEventListener("click", () => sortup("office"));
downoffice.addEventListener("click", () => sortdown("office"));

let upage = document.getElementsByClassName("upage")[0];
let downage = document.getElementsByClassName("downage")[0];
upage.addEventListener("click", () => sortup("age"));
downage.addEventListener("click", () => sortdown("age"));

let update = document.getElementsByClassName("update")[0];
let downdate = document.getElementsByClassName("downdate")[0];
update.addEventListener("click", () => sortup("startDate"));
downdate.addEventListener("click", () => sortdown("startDate"));

function sortup(attribute) {
  personArray.sort((a, b) => {
    if (a[attribute] > b[attribute]) return 1;
    if (a[attribute] < b[attribute]) return -1;
    return 0;
  });
  fillTable();
}

function sortdown(attribute) {
  personArray.sort((a, b) => {
    if (a[attribute] > b[attribute]) return -1;
    if (a[attribute] < b[attribute]) return 1;
    return 0;
  });
  fillTable();
}

let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  addPerson();
});

function addPerson() {
  let name = document.getElementById("name");
  let position = document.getElementById("position");
  let office = document.getElementById("office");
  let age = document.getElementById("age");
  let startdate = document.getElementById("startdate");

  let new_person = new Persons();
  new_person.name = name.value;
  new_person.position = position.value;
  new_person.office = office.value;
  new_person.age = age.value;
  new_person.startDate = startdate.value;

  console.log(new_person);

  personArray.push(new_person);
  fillTable();
}
