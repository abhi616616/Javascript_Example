// callback  


// function mainFunction(callback){
//     // console.log("operation perform");
//     setTimeout(()=>{
//         callback("operation is completed")
//     },1000)
// }

// function callbackFunction(result){
//     console.log("functions callingggg",result);
// }

// mainFunction(callbackFunction)

// callback hell....


// promise in js...

// let data= new Promise((resolve,reject)=>{
//     let a=2;
//     let b="2";

//     if(a==b){
//         resolve("success")
//     }
//     else{
//         reject("error")
//     }
// })
// .then((result)=>{
//     console.log("resolve",result);
// })
// .catch((error)=>{
//     console.log("reject",error);
// })


// Create a function that returns a promise
// function examplePromise(value) {
//     // Create a new promise
//     return new Promise((resolve, reject) => {
//         // Check some condition
//         if (value > 0) {
//             // If the condition is true, fulfill the promise with a value
//             resolve("Value is greater than 0");
//         } else {
//             // If the condition is false, reject the promise with an error
//             reject(new Error("Value is not greater than 0"));
//         }
//     });
// }

// // Usage of the promise
// const value = 10;

// examplePromise(value)
//     .then((result) => {
//         // If the promise is fulfilled, log the result
//         console.log("Promise fulfilled:", result);
//     })
//     .catch((error) => {
//         // If the promise is rejected, log the error
//         console.error("Promise rejected:", error.message);
//     });


// let data=async()=>{
//     let name="abhinav"
//     return name
// }
// console.log(data());
// data().then((result)=>{
//     console.log("result",result);
// })
// .catch((error)=>{
//     console.log(error);
// })


// // Function to simulate fetching data from an API
// function fetchData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 2000); // Simulate a delay of 2 seconds
//     });
// }

// // Async function to fetch data using await
// async function fetchDataAsync() {
//     console.log('Fetching data...');

//     // Pause execution until the fetchData promise is resolved
//     const result = await fetchData();
//     console.log(result); // Output the fetched data

// }

// // Call the async function
// fetchDataAsync();


// closure 

// function outerFunction(){
//     let a="abhinav"
//     function inner(){
//         return a
//         // console.log(a);
//     }
//     return inner
// }
// let data=outerFunction()
// console.log(data());


// prototype 

// let obj={
//     fname:"abhinav",
//     lname:"kumar",
//     getName:function(){
//         // return this.fname
//         let data1=this.fname+ " "+this.lname
//         return data1
//     }
// }

// let obj1={
//     rollNo:10,
//     __proto__:obj
// }

// console.log(obj1.getName(),obj1.rollNo);

// hoisting....

// console.log(a);
// var a="abhinav"
// console.log(a);



// console.log(f1());
// f1()

// function f1(){
//     // return "hello data"
//     console.log("hello");
// }



// spread operator in js...


// let a=[1,2,3]
// let b=[4,5,6]
// console.log([...a,...b]);


// let a={
//     a:"hello"
// }
// let b={
//     b:"kumar"
// }
// console.log({...a,...b});


// odd number............

// let data="123456"

// for(let i=0;i<data.length;i++){
//     // console.log(data[i]);
//     if(data[i]%2 ==0){
//         console.log("even no",data[i]);
//     }
//     else{
//         console.log("oddd no",data[i]);
//     }
// }


//////////////////////////////////

// const numbers = [2, 3, 6, 7, 10,11];

// let data=numbers.forEach((item)=>{
//     console.log((item%2===0 && "Even") || "Odd");
//     // return item%2===0 && "Even" || "Odd"
//     return numbers
// })


// const number=5;

// let data=number%2==0

// console.log((data && "Even") || "Odd");


