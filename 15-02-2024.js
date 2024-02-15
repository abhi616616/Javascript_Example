// callback example

// function f1(callback, ...f1){
//     let sum=0
//     setTimeout(()=>{

//         console.log(`timeOut function`);
//         for(let i=0;i<f1.length;i++){
//             // console.log(f1[i]);
//             sum=sum+f1[i]
//         }
//         console.log(sum);
//         f2()
//     },1000)
//     callback
// }

// function f2(){
//     console.log("function f2 calling");
// }

// f1(()=>{
//     // console.log(`callback is executed`);
// },1,2,3)

////////////////////////////////////////////////


// function f1(...f1){
//     let sum=0
//     for(let i=0;i<f1.length;i++){
//         // console.log(f1[i]);
//         sum=sum+f1[i]
//     }
//     return sum
// }

// function f2(){
//     console.log("function f2 calling");
// }

// console.log(f1(1,2,3));
// console.log(f1(1,2,3,4,5));
// console.log(f1(1,2,3,7,8));


////////////////////////////////////////////////////////////////


// callback in js

// let mainFunction=((callback)=>{
//     setTimeout(()=>{
//         callback([1,2,3])
//     },1000)
// })

// let add=((array)=>{
//     let sum=0;
//     for (let i of array){
//         sum=sum+i
//     }
//     console.log(sum);
// })
// mainFunction(add)


///////////////////////////////////////////////////////


// promises in JS

// promise is a object, promise used in js for handle a asynchronous operationns, there are few steps in promises.
// pending, fulfilled, rejected
//  and promise object support two properties. state, result
// when promise is pending that time result will be undefined.
//  when the promise is fulfilled that time it will print the value.
//  when promise is rejected that time print a error.

// let promise= new Promise((resolve,reject)=>{
//     let a=2;
//     let b=2;

//     if(a===b){
//         resolve()
//     }
//     else{
//         reject()
//     }

// })
// promise.then(()=>{
//     console.log("promise is resolved");
// }).catch((error)=>{
//     console.log(`error occur ${error}`);
// })

///////////////////////////////////////////////////////////////////

// callbackhell in js
// callback hell is a nested callback function. for avoid callback hell we are using promise

// function asyncFunction1(callback){
//     setTimeout(()=>{
//         console.log("asyncFunction1 calling");
//         callback()
//     },1000)
// }

// function asyncFunction2(callback){
//     setTimeout(()=>{
//         console.log("asyncFunction2 calling");
//         callback()
//     },1000)
// }

// function asyncFunction3(callback){
//     setTimeout(()=>{
//         console.log("asyncFunction3 calling");
//         callback()
//     },1000)
// }


// asyncFunction1(()=>{
//     console.log("hello1");
//     asyncFunction2(()=>{
//         console.log("hello2");
//         asyncFunction3(()=>{
//             console.log("hello3");
//         })
//     })
// })


///////////////////////  using promise to avoid a callback hell in js...


// function asyncFunction1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("asyncFunction1");
//             resolve()
//         }, 1000)
//     })
// }

// function asyncFunction2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("asyncFunction2");
//             resolve()
//         }, 1000)
//     })
// }

// function asyncFunction3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("asyncFunction3");
//             resolve()
//         }, 1000)
//     })
// }

// asyncFunction1()
// .then(()=> asyncFunction2())
// .then(()=> asyncFunction3())
// .then(()=>{
//     console.log("All asyncFunction are working");
// })
// .catch((error)=>{
//     console.log("error");
// })


////////////////////////////////////////////////////////////////////

// async and await 

// async example..
// async is a keyword which is used with the function, if we use async keyword before the any of the function that function behaviour will be asynchronous.
//  and async function return a promise. async function always return a value.


// let data=async()=>{
//     let name="abhinav"
//     return name
// }

// data().then((data)=> {console.log("data",data)})
// .catch((err)=>{
//     console.log(err);
// })


// await example
// await keyword always used with the async block, it wait for the return a promise. its always worked inside the async function.

// let data=async()=>{
//     let a= await "abhinav"
//     console.log("a",a);
// }

// console.log(1);
// data()
// console.log(2);

//////////////////////////////////////

// closure ....

// lexical scoping....

// closure allows a inner function to access a outer scope of a function.

// lexical scoping -> function scope is able to access variable from the parent scope.

// function foo(){
//     let a=1;

//     function inner(){
//         return a
//     }
//     return inner
// }
//     let data=foo()
//     console.log(data());
//     console.log(data());
//     console.log(data());


//////////////////////////////////////////////

//  var -> var is a global variable, using var keyword we can reassign the value and redeclare the value. and var is a function scope.

// var a=10;
// var a=15;
// console.log(a);

// let -> let is block scope variable, which is reassign the value but we can not redeclared that value.

// let a=10;
// a=15
// console.log(a);  // reassign

// const -> const is also block scope variable, we can not reassign and can not redeclared that value.

// const a=10;
// a=10

// console.log(a);  // error occur // assignment to constant variable






