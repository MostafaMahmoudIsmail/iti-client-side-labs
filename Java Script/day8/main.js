// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.
import { greetUser } from "./utils.js";
greetUser("sasa");
// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("the task Completed!");
  }, 2000);
});

promise.then((value) => {
  console.log(value);
});
// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".

async function waitAndGreet() {
  let greet = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("welcome");
    }, 1000);
  });
  console.log(greet);
}
waitAndGreet();
// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
async function userData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/users/1")
    let dataJson = await data.json()
    console.log(`name is ${dataJson["name"]} and email is : ${dataJson["email"]}`);
}
userData()
// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
async function getPost() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await posts.json();

  return [posts[0]["title"], posts[1]["title"], posts[2]["title"]];
}
let threePosts = await getPost();
console.log(threePosts);

// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
async function timerFun() {
  let timer = new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 1; i <= 3; i++) console.log(i);
    }, 1000);
  });
}
timerFun();
// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
function safeJSONParse(str) {
  try {
    let data = JSON.parse(str);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
safeJSONParse('{"name": "Omar"}');
safeJSONParse("{name: Omar}");

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
async function cntComplete() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
  posts = await posts.json();
  let cnt = 0;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i]["completed"] == true) cnt++;
  }
  return cnt;
}
console.log(await cntComplete());

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
import DataFetcher from "./utils.js";
let d = new DataFetcher();
console.log(await d.getUser(1));
