var a =new Promise((res, rej) => {
    setTimeout(() => {
        res("promise is resolved")
        rej("promise is rejected")
    },2000)
})
var a1=new Promise((res,rej)=>{
    setTimeout(()=>{
        // res("promise1 is resolved")
        rej("promise1 is rejected")
    },4000)
})

a.then((data)=>{
    console.log(data);
        a1.then((data)=>{
            console.log(data);
        }).catch((error)=>{
            console.log(error);
        })

})
.catch((error)=>{
    console.log(error);
})
