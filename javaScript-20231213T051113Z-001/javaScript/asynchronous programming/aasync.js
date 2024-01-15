// async function add(a,b){
//     return a+b;
// }
// // console.log(add(1,2));

// add(1,2).then((data)=>{
//     console.log(data);
// })


const fun1=(()=>{
    setTimeout(()=>{
        for(let i=1;i<10;i++){
            console.log("hello fun1",i);
        }
    },3000)
})

const fun2=(()=>{
    setTimeout(()=>{
        for(let i=1;i<10;i++){
            console.log("hello fun2",i);
        }
        fun1()
        console.log("End loop from fun2");
    })
})

fun2()
