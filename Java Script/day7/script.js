// 1- Write a function that greets a user, using a default parameter for the name.
// function sayHi(greeting,name = "mostafa") {
//     console.log(`${greeting} ${name}`);
// }

// sayHi("hello")

// 2- Write a function that calculates the total price with a default tax rate parameter.
// function totalPrice(a,b,c,tax = 14){
//     sum = a + b + c
//     sum = tax*sum + sum
//     console.log(sum);
// }

// totalPrice(2,3,4,5)
// totalPrice(2,3,4)

// 3- Write a function that creates a user object, using a default role parameter.
// function createUser(name,age,role = "software engineer"){
//     let newUser = {
//         name:name,
//         age:age,
//         role:role
//     }
//     return newUser
// }

// let user = createUser("mostafa",19)
// let user2 = createUser("mostafa",19,"tester")

// console.log(user2);
// console.log(user);

// 4- Write a function that multiplies any number of arguments using the rest operator.
// function multi(...nums){
//     let res = 1
//     for(let i = 0 ; i < nums.length ; i++){
//         res *= nums[i]
//     }
//     return res
// }
// console.log(multi(1,2,3));

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
// function multiplies(...nums){
//     let res = 0
//     for(let i = 1 ; i < nums.length ; i++){
//         res += nums[i]
//     }
//     return res * nums[0]
// }
// console.log(multiplies(1,2,3));

// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
// function concateStrings(str1,str2,str3){
//     return [...str1,...str2,...str3]
// }

// console.log(concateStrings("mostafa","mahmoud","ismail"));

// 7- Create a new array by combining two arrays using the spread operator.
// function mergeArray(arr1,arr2){
//     return [...arr1,...arr2]
// }

// console.log(mergeArray([1,2,3],[4,5,6]));

// 8- Copy an array using the spread operator.
// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1]
// console.log(arr2);

// 9- Merge two objects into one using the spread operator.
// let obj1 = {
//     name:"mostafa",
//     age:19
// }
// let obj2 = {
//     role:"engineer"
// }

// let newObj = {...obj1,...obj2}
// console.log(newObj);

// 10- Update a property in an object using the spread operator to create a new object.
// let obj1 = {
//     name:"mostafa",
//     age:19
// }
// let obj2 = {...obj1, name:"mohammed"}
// console.log(obj2)

// 11- Destructure an array to get the first and second elements into variables.
// let arr = [1,2,3,4]
// let [a,b] = arr
// console.log(a,b);

// 12- Destructure an array to get the first element and the rest into another array.
// let arr = [1,2,3,4,5]
// let [a,...b] = arr
// console.log(a);
// console.log(b);

// 13- Destructure an object to extract two properties into variables.
// let user = {
//     name: "mostafa",
//     age : 44
// }
// let {name,age} = user
// console.log(age);

// 14- Destructure an object and rename the extracted properties.
// let user = {
//     name: "mostafa",
//     age : 44
// }
// let {name:userName,age:MyAge} = user
// console.log(MyAge);
// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.

// function extractfunc(obj){
//   return Object.values(obj);
// }
// let user = {
//     name: "mostafa",
//     age : 44,
//     role:"tester"
// }
// console.log(extractfunc(user))
