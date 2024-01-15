// let data=new Promise((resolve,reject)=>{
//     let a=2;
//     let b=2;

//     if(a==b){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// data.then(()=>{
//     console.log("promise is resolved");
// })
// .catch(()=>{
//     console.log("promise is not resolved");
// })


// let data = new Promise((resolve, reject) => {

//     let a = 2;
//     let b = "2";

//     if (a === b) {
//         resolve()
//     }
//     else {
//         reject()
//     }

// })
// data.then(() => {
//     console.log("promise is resolve");
// })
//     .catch((error) => {
//         console.log("promise is reject");
//     })

let data= new Promise((resolve,reject)=>{
    let a=2;
    let b="2"

    if(a===b){
        resolve()
    }
    else{
        reject()
    }
})

data.then(()=>{
    console.log("promise is resolved");
})
.catch(()=>{
    console.log("promise is reject");
})