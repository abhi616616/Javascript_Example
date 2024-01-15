// let promise = new Promise( (resolve, reject)=> {
//     setTimeout(()=> {
//     resolve('Promise resolved')}, 4000); 

// });
// // async function
// async function asyncFunc() {

//         // wait until the promise resolves 

//         let result = await promise;

//         console.log(result);
// }
// // calling the async function
// console.log("hiii")
// asyncFunc(); // Promise resolved



let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved")
        reject("promise reject")
    },4000)
})

async function f1(){
    let result=await promise
    console.log(result);
}
console.log("hiiii");
f1()

