var p=new Promise((res,rej)=>{
    setTimeout(()=>{
        // res("promise is resolved");
        rej("promise is rejected")
    })
})
p.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})