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
//     let b=2;
//     function inner(){
//         // return a
//         return c=a+b
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


/////////////////////////////////////////////////////

// protoType in JS

// in js prototype are a fundamental of object oriented programming model, 
// every javascript object have a prototype property
// All javascript object inherit a property and method from a protoType. 

// below example is for object

// let obj={
//     name:"abhinav",
//     getName:function(){
//         return this.name
//     }
// }

// let obj1={
//     roll:10,
//     __proto__:obj
// }

// console.log(obj1.getName(),obj1);
// // console.log(obj1);

//////////////////////////////////////////////////////////

// let obj={
//     name:"abhinav",
//     getName:function(){
//         return this.name
//     },
//     cource:"Btech"
// }

// let obj1={
//     id:123,
//     address:"New Delhi",
//     name:"Kumar",
//     __proto__:obj
// }

// let obj2={
//     roll:1,
//     __proto__:obj1
// }

// console.log(obj2);
// console.log(obj2.cource);
// console.log(obj2.getName());
// console.log(obj2.id);
// console.log(obj2.address);


///////////////////////////////////////////


// events in node js....

// every action perform on a cmputer is an events like connection is stablished, or a file opened.
// to fire an event use a .emit() method, .emit is used to trigger that event.
// .on is used to attach a listener function to an event,


// const EventEmitter=require("events")

// const myEmitter=new EventEmitter();

// myEmitter.on("greet",(name)=>{
//     console.log(`Hello, ${name}!`);
// })

// myEmitter.on("greet",(name)=>{
//     console.log(`Greetings, ${name}!`);
// })

// myEmitter.emit("greet","abhinav")


//////////////////////////////////////////////////////////////////

// Hoisting in js
// hoisting is a js features where variable and functions declaration are moved on the top of the scope during the compilation phase.

// let a;
// a=6;
// console.log(a);


// console.log(x);
// var x = 5;
// console.log(x); 

// fun()

// function fun(){
//     console.log("hello fun");
// }


// let data;
// function fun(){
//     console.log("data",data);
// }
// data=5;
// fun()


// forEach function.

// let data=[1,2,3,4,5]

// let data=[{
//     name:"abhinav"
// },
// {
//     roll:1
// }]

// let data1=data.forEach((item)=>{
//     console.log(item);
// })



// map function in js

// var List = [10,12,15,30];
// var updatedList=List.map((item)=>{
//     return item*2
// })

// console.log(updatedList);


// filter function in js

//filter

// var List = [10,12,15,30];
// var updatedList = List.filter(function(list){ return list %  2 == 0  }); 
// console.log("original List" ,List)  //Original array not Modified
// console.log("Updated List" , updatedList) //Returns new array


// Cluster..........................

// Clustering in Node. js involves creating multiple worker processes that share the incoming workload.


// let data=[1,2,3,4,5]
// let sum=0;
// let data1=data.map((item)=>{
//     // console.log(item);
//     sum=sum+item
//     // return sum
// })
// console.log([sum]);


///////////////

//////  callback example.....

// function fun1(callback){
//     console.log("hello fun1");
//     setTimeout(()=>{
//         console.log("callback is calling...");
//         callback([1,2,3])
//     },2000)
// }

// function fun2(array){
//     let sum=0;
//     for(let i of array){
//         sum=sum+i
//     }
//     console.log(sum);
// }

// fun1(fun2)


//////  promises.

// let promise=new Promise((resolve,reject)=>{
//     let a=2;
//     let b="2"

//     if(a===b){
//         resolve()
//     }
//     else{
//         reject()
//     }

// })
// promise.then(()=>{
//     console.log("resolve");
// })
// .catch((error)=>{
//     console.log("rejected");
// })


///////////////////////////

// function binarySearch(arr,target){

//         let start=0;
//         let end=arr.length-1
     
     
//         while(start<=end){
//             let mid=Math.floor((start+end)/2);
     
//             if(target === arr[mid]){
     
//                 // return console.log("Yes");
//                 return arr[mid]
//             }
     
//             if(arr[mid]>target){
//                 end=mid-1
//             }
//             else if(arr[mid]<target){
//                 start=mid+1
//             }
//         }
//         return -1
     
//     }
     
//     const arr=[1,2,3,4,5]
//     const target=4;
     
     
//     // console.log(binarySearch([1,2,3,4,5],5));
//     let x=binarySearch(arr,target)
//     console.log("xxxxx",x);
 
//     if(binarySearch(arr,target) !== -1){
//         console.log("found");
//     }
//     else{
//         console.log("not found");
//     }


//////////////////////////////////


// let data = "abhinavKLIY@#123$"

// let rev="";
// let sum=0;
// let count=0;
// // let avg=0;

// // for(let i=data.length-1;i>=0;i--){
// //     // rev=rev+data[i]
// //     // console.log(data[i]);
// //     if(data[i]>="a" && data[i]<="z" || data[i]>="A" && data[i]<="Z" || data[i]>="0" && data[i]<="9"){
// //         // console.log(data[i]);
// //         rev=rev+data[i]
// //     }
// // }

// for(let i=data.length-1;i>=0;i--){
//     // console.log(data[i]);
//     if(data[i]>="0" && data[i]<="9")
//     {
//         // console.log(data[i]);
//         sum=sum+parseInt(data[i])
//         count++;
//     }
// }
// console.log(sum);
// let avg=sum/count
// console.log(avg);
// // console.log(count);





