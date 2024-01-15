//without parameter

// function show(){
//     console.log("hello");
// }
// function display(callback){
//     callback();
// }
// display(show)


//with parameter
// function show(a){
//     console.log("hello i am show() and value is " + a);
// }
// function geeky(callback){
//     var a=101
//     callback(a)
// }
// geeky(show)

//synchronous callback function

// function show(){
//     console.log("hello");
// }
// function display(callback){
//     callback();
// }
// display(show)

// console.log("End");

//Asynchronous callback function

setTimeout(function show(){
    console.log("hello javascript");
},5000)

console.log("END");