let mypromise=new Promise(function(res,rej){
    let x=0;

    if(x==1){
        console.log("resolve");
    }
    else{
        console.log("reject");
    }
})
mypromise.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})