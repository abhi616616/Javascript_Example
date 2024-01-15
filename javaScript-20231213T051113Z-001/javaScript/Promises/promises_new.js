// let data=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("code has been executed")
//     })
// })

// let data=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve ({name:"Abhinav", age:25})
//     },2000)
// })

// data.then((item)=>{
//     console.warn(item);
// })
// console.warn("Hello");



//using catch block.....

// let data=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject ("some error")
//     },2000)
// })

// data.then((item)=>{
//     console.warn(item);
// }).catch((err)=>{
//     console.warn("catch block",err);
// })


//get data from api using fetch() method in promise.

// let data=fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-08-23&sortBy=publishedAt&apiKey=91d9e32cc5dd44b98335d12a4234faa1")
// data.then((item)=>{
//     console.warn(item);
// })

// let data=fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-08-23&sortBy=publishedAt&apiKey=91d9e32cc5dd44b98335d12a4234faa1")
// data.then((item)=>{
//     return item.json()
// }).then((result)=>{
//     console.warn("2nd output",result);
// })

// var promise = new Promise(function(resolve, reject) {
//     reject('Promise Rejected')
//     resolve('Promise Resolved')
// })

// promise
//     .then(function(successMessage) {
//         console.log(successMessage);
//     })
//     .catch(function(errorMessage) {
//        //error handler function is invoked
//         console.log(errorMessage);
//     });

// let data=new Promise(function(resolve,reject){
//     let a="name";
//     let b="name"
//     if(a===b){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// data.then(function(){
//     console.log("Success");
// })
// .catch(function(){
//     console.log("Not Matched!!");
// })


// let a="name"
// let b="name"
// let data = new Promise((res, rej) => {
//     // setTimeout(() => {
//     //     // res("hello this is resolve")
//     //     // rej("hello this is reject")
        
//     // },1000)

//     if(a===b){
//         res()
//     }
//     else{
//         rej()
//     }
// })
// data.then(()=>{
//     console.log("promise is resolved");
// })
// .catch(()=>{
//     console.log("rejected");
// })