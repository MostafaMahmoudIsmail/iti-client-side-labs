function person(name, age) {
  this.name = name;
  this.age = age;
}

person.prototype.sayHello = function () {
  console.log(`hello ${this.name}`);
};

function student(name, level) {
  this.name = name;
  this.level = level;
}
student.prototype = Object.create(person.prototype);
student.prototype.constructor = student;

let student1 = new student("mostafa", "two");

console.log(student1.sayHello());
