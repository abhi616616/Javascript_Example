// callback function example......

// function f1(callback){
//     console.log("function f1 is calling...");

//     setTimeout(()=>{
//         console.log("setTimeout is calling");
//         callback()
//     },3000)

// }

// function f2(){
//     console.log("function f2 is callingsss");
//     function f3(){
//         console.log("function f3 is callingsss");
//     }
//     f3()
// }
// f1(f2)

////////////////////////////////////////////////////////////////////////////////////////
// Function with a callback parameter
// const fetchData = (url, callback) => {
//     // Simulating an asynchronous operation (e.g., API call)
//     setTimeout(() => {
//         const data = `Data fetched from ${url}`;
//         // Invoke the callback with the fetched data
//         callback(null, data);
//     }, 2000); // Simulating a delay of 2 seconds
// };

// // Callback function to handle the fetched data
// const handleData = (error, result) => {
//     if (error) {
//         console.error("Error:", error);
//     } else {
//         console.log(result);
//     }
// };
//     console.log("hello");
// // Calling the fetchData function with the handleData callback
// fetchData("https://example.com/api/data", handleData);

///////////////////////////////////////////////////////////////////////////////////////

// Function with a callback parameter
// const fetchData = (url, callback) => {
//     // Simulating an asynchronous operation (e.g., API call)
//     const data = `Data fetched from ${url}`;
//     // Invoke the callback with the fetched data
//     callback(null, data);
// };

// // Callback function to handle the fetched data
// const handleData = (error, result) => {
//     if (error) {
//         console.error("Error:", error);
//     } else {
//         console.log(result);
//     }
// };

// // Calling the fetchData function with the handleData callback
// fetchData("https://example.com/api/data", handleData);


// function f1(name,callback){
//     let data="hello abhinav";
//     callback(data)
// }

// function f2(message){
//     console.log(message);
// }

// f1("fwr",f2)

// console.log(2+"2"*"2");


// callback functions............................

const fun1=(a,callback)=>{

    setTimeout(()=>{
        console.log("hello "+a);
    },3000)

    callback()
}

const fun2=()=>{
    console.log("hello fun2");
}

fun1("abhinav",fun2)
