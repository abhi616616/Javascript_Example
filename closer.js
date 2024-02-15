function outer(num) {
    function f1(a) {
        let data = num * a
        console.log(data);
        // return data
        function f2(b) {
            let data1 = num * b
            console.log(data1,"f2 data");
            // return data1
        }
        return f2(3)
    }
    return f1(2)
}

outer(5)
outer(10)
// console.log(x);
// x()


///////////////////////////////////////////////////////////////////////////////////////////


// function outer(num) {
//     function f1() {
//         let data = num * 2;
//         console.log(data);
        
//         function f2() {
//             let data1 = num * 3;
//             return data1;
//         }

//         return f2(); // Return the result of the f2 function call
//     }

//     return f1(); // Return the result of the f1 function call
// }

// let x = outer(5);
// let y = outer(10);

// // x and y are already the results of function calls, so they are not callable like functions
// // To log the results, you can simply use console.log
// console.log(x); // Logs the result of outer(5)
// console.log(y); // Logs the result of outer(10)
