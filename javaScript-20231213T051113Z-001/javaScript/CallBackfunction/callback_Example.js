const funa=()=>{
    setTimeout(function(){
        console.log("Fun A");
        // funb()
    },3000)
}
const funb=()=>{
    console.log("Fun B");
}
funa()
funb()


//example of callback function
// const perOne=(friend,data)=>{
//     console.log(`i am talking with ${friend},I will talk to u later`);
//     perTwo()
// }
// const perTwo=()=>{
//     console.log("hey I am here");
// }
// perOne("abhinav",perTwo)


// const perOne=(friend)=>{
//     setTimeout(function(){
//         console.log(`i am talking with ${friend},I will talk to u later`);
//         perTwo()
//     },3000)
// }
// const perTwo=()=>{
//     console.log("hey I am here");
// }
// perOne("abhinav",perTwo)

// const one=()=>{
//     console.log("one");
//     two()
// }
// const two=()=>{
//     console.log("two");
// }
// one(two)
