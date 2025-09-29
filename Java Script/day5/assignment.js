// 1. Predict (in comments) the output order of this code, then run to verify.
//    console.log(a());
//    var b = function(){ return 'B'; };
//    function a(){ return 'A'; }
//    console.log(b());
//    After verifying, explain (one short line) why a works before definition and b does not.
// it print A then B
// because a is functions statment that accept hoisting but b is a function expression that don't

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
// function sum(a, b) {
//     return a + b;
// }
// let add = function (a, b) {
//     return a + b;
// }

// console.log(sum(3,4)); // 7
// console.log(add(3,4)); // 7

// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
// var factorial = function fact(x) {
//     if (x <= 1){
//         return 1
//     }
//     return fact(x - 1) * x
// }

// console.log(factorial(3));
// console.log(fact(x)); // error fact is not defined

// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
// function showInfo() {
//     console.log(arguments.length);
//     for(let i = 0 ; i < arguments.length ; i++){
//         console.log(arguments[i]);
//     }
// }

// showInfo(1)
// showInfo(1,2)
// showInfo(1,2,3,4,5)

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
// function mutate(x,y) {
//     console.log("before swap");
//     console.log(arguments[0] / arguments[1]);
//     let temp = arguments[0];
//     arguments[0] = arguments[1]
//     arguments[1] = temp
//     console.log("after swap");
//     console.log(arguments[0] / arguments[1]);
// }
// console.log(mutate(10,5));
// // before swap 2
// // after swap 0.5

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
// function sumAll(){
//     let sum = 0
//     for(let i = 0 ; i < arguments.length; i++)sum += arguments[i]
//     console.log(`the sum is : ${sum}`);
// }

// sumAll(2,5,3) // 10
// sumAll() // 0

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.
// function sumAll() {
//     let arr = Array.from(arguments)

//     let sum = arr.reduce(function(acc, curr){
//         return acc + curr
//     },0)

//     console.log(`sum is ${sum}`);
// }

// sumAll(2,5,3)

// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
// function describeValue() {

//     if (arguments.length === 0) {
//         return "none";
//     }
//     else if(arguments.length === 1) {
//         return "one: " + arguments[0];
//     }
//     else if(arguments.length === 2) {
//         return "two: " + arguments[0] + " , " + arguments[1];
//     }
//     else{
//         return "too many";
//     }
// }
// console.log(describeValue(1,2,3,4));
// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.

// let arr = [
//     (num) => num + 5,
//     (num) => num * 2,
//     (num) => num - 3
// ]

// let start = 10

// for(let i = 0 ; i < arr.length; i++){
//     start = arr[i](start)
// }
// console.log(start);

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.

// function makeMultiplier(factor){
//     return function(n){
//         return n * factor
//     }
// }

// let double = makeMultiplier(2)
// let triple = makeMultiplier(3)

// console.log(double(7));
// console.log(triple(7));

// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
// function once(fn){
//     let flag = 0
//     return function(){
//         if(!flag){
//             flag = 1
//             return fn()
//         }
//     }
// }

// let greetOnce = once(function(){
//     console.log("only one");
//     return "done"
// })

// console.log( greetOnce());

// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.
// function once2(fn){
//     let flag = 0
//     let result
//     return function(){
//         if(!flag){
//             flag = 1
//             result = fn()
//         }
//         return result
//     }
// }

// let greetOnce2 = once2(function(){
//     console.log("only one");
//     return "done"
// })

// console.log( greetOnce2() );
// console.log( greetOnce2() );
// console.log( greetOnce2() );

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.
// function makeCounter(start){
//     let cnt = start

//     return {
//         inc: function() {cnt++;return cnt},
//         dec: function() {cnt--;return cnt},
//         value: function() {return cnt}
//     }

// }
// let ob = makeCounter(5)
// console.log(ob.inc());
// console.log(ob.inc());
// console.log(ob.value());
// let ob2 = makeCounter(7)
// console.log(ob2.inc());
// console.log(ob2.inc());
// console.log(ob2.value());

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
// function makeAdder(start){
//     let total = start

//     return function(n){
//         total += n
//         return total
//     }
// }

// let total1 = makeAdder(10)
// console.log(total1(5));
// let total2 = makeAdder(20)
// console.log(total2(3));

// 15. (Bonus) Implement memoize1(fn). Show it caches slowSquare(9) twice

// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
// let user = {
//     name: "mostafa",
//     sayhi: function() {
//         console.log(`hi ${this.name}`);
//     }
// };
// user.sayhi(); // hi mostafa

// let f = user.sayhi;
// f(); // hi undefined
// // (this) use the object that call the method

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
// let user = {
//     name: "mostafa",
//     sayHi: function() {
//         console.log("hi " + this.name);
//     }
// };
// let user2 = {
//     name: "sara"
// };
// user.sayHi.call(user2);
// user.sayHi.apply(user2);

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.
// let greeter = {
//     name: "mostafa",
//     greet: function(greeting, sign) {
//         console.log(greeting + " " + this.name + sign);
//     }
// };
// let user2 = {
//     name: "Ali"
// }
// greeter.greet.apply(user2, ["hello", "!"]);
// // args is list because we use apply

// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
// let greeter = {
//     name: "Mostafa",
//     greet: function(greeting, sign) {
//         console.log(greeting + " " + this.name + sign);
//     }
// };
// let user2 = {
//     name: "Lara"
// }
// let greetLara = greeter.greet.bind(user2);

// greetLara("hi", "!");
// greetLara("good", "?");

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).
// let greeter = {
//     greet: function(greeting, sign) {
//     console.log(greeting + " " + this.name + sign);
//     }
// };

// function sayHello(obj) {
//     return greeter.greet.bind(obj, "Hello");
// }
// let user = {
//     name: "Ali"
// }
// let helloAli = sayHello(user);
// helloAli("!");
// helloAli("*");
// helloAli("!!");
// helloAli("<#");

// 22. Use slice inside a function to convert its arguments (remember it is an array like) to a real array and log reversed copy without mutating original.
// function reverseArr() {
// let args = Array.prototype.slice.call(arguments);

// let reversed = args.slice().reverse();

// console.log(`reversed : ${reversed}`);
// console.log(`after reverse : ${args}`);
// }
// reverseArr(1, 2, 3, 4, 5);

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
// let arr = [5,2,11,7]
// console.log(Math.max.apply(null,arr));

// mx = -1
// for(let i = 0 ; i < arr.length; i++){
//     mx = Math.max(mx,arr[i])
// }
// console.log(mx);

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.
// let arr = [5,2,11,7]
// console.log(Math.max.call(null,5,2,11,7));
// // with apply we use the variable but with call we need to put each element individual

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
// console.log(`User ${name} Age: ${age+1}`);

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
// let title = "title"
// let body = "body"
// console.log(
//     `
// the title is : ${title}
// the body  is : ${body}
//     `
// );

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
// if (true){
//     var i = 5
//     let j = 4
// }

// console.log(i); // 5
// console.log(j); // not defined
// // because i is function scope not block scope like let

// 28. Write code that tries to log x before let x = 5;.
// console.log(x);
// let x = 5
// // Cannot access 'x' before initialization

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);
// arr = [9, 9, 9];
// console.log(arr); // Assignment to constant variable.
// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].
// let square = (n) => {
//     return n*n
// }
// console.log(square(5));
// let square2 = n => n*n
// console.log(square2(5));
// let arr = [1,2,3]
// let square3 = arr.map(n => n * n)
// console.log(square3);

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).
// let timer = {
// count: 0,
// startClassic: function () {
//     let self = this;
//     let t = setInterval(function time() {
//     self.count++;
//     console.log("count : ", self.count);
//     if (self.count >= 3) clearInterval(t);
//     }, 1000);
// },
// startArrow: function () {
//     let t2 = setInterval(() => {
//     this.count++;
//     console.log("count : ", this.count);
//     if (this.count >= 6) clearInterval(t2);
//     }, 2000);
// },
// };

// console.log(timer.count);
// timer.startClassic();
// timer.startArrow();

// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
// let x = () => {v:10}
// console.log(x().v); // Cannot read properties of undefined (reading 'v')
// x = () => ({v:10})
// console.log(x().v); // 10

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).
// let user = {
//     name: "mostafa",
//     sayHi: () => {
//         console.log(`hi ${this.name}`);
//     }
// };
// let user2 = {
//     name: "sara"
// };
// user.sayHi.call(user2);
// user.sayHi.apply(user2);
// //this now refer to the window

// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
// function greet(name){
//     return 'Hi '+name+'!';
// }

// const newGreet = (name) => {return 'Hi '+name+'!';}

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
// let add2 = n => n + 2
// let times3 = n => n * 3
// let minus1 = n => n - 1

// let runPipeline = (n, fnsArray) => {
//     let result = n;
//     for (let fn of fnsArray) {
//         result = fn(result);
//     }
//     return result;
// };
// console.log(runPipeline(10, [add2, times3, minus1]));

// // 36. (write answers BEFORE running):
//     var obj = { n: 1, inc: function(){ this.n++; return this.n; } };
//     var inc = obj.inc;
//     console.log(obj.inc());
//     console.log(inc());
// //    Explain both lines.
// 2 because this refer to the obj
// undefined because this refer to window

// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.
// const counters = [];
// for (let i = 0 ; i < 1000 ; i++) {
//     const counter = {
//         count: 0,
//         increment: function() {
//             this.count++;
//             return this.count;
//         }
//     };

//     counters.push(counter);
// }
// // we create 1000 counter object in memory

// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
// function safefirst(){
//     if(!arguments.length){
//         return undefined
//     }
//     arr = Array.from(arguments)
//     return arr
// }

// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();
// const factory = (namesArray) => {
//     const counters = {};
//     for (let name of namesArray) {
//         counters[name] = (() => {
//             let count = 0;
//             return () => {
//                 count++;
//                 return count;
//             };
//         })();
//     }
//     return counters;
// };

// const counters = factory(['a', 'b']);
// console.log(counters.a()); // 1

// 40. Write 2 things that were new or tricky today (comment).
// tricky : this in arrow function and function statment
// new : call, apply , bind
