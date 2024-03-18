// Write a JavaScript program to calculate the factorial of a given number. 

// let n = 5;
// let fac = 1;

// for (let i = 1; i <= n; i++) {
//     fac = fac * i
//     console.log("fac",fac);
// }

// console.log(fac)


// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

// let data=[1,2,3,4,5,6,7,8,9,10]

// let data1=data.filter((item,i)=>{
//     // console.log(data[i])
//     if(data[i]%2 === 0){
//         // console.log(data[i]);
//         let x=data[i]
//         return {
//             x
//         }
//     }
// })
// console.log(data1);


// Write a JavaScript program to reverse a given string. 

// let data="abhinav"
// let rev=""

// for(let i=data.length-1;i>=0;i--){
//     rev=rev+data[i]
// }
// console.log(rev);



// Write a JavaScript function to calculate the sum of two numbers.  


// function f1(a,b){
//     c=a+b
//     console.log(c);
//     return c
// }
// f1(8,3)
// // console.log();


// 7. Write a JavaScript function to check if a given number is prime. 

// let n=11;

// let temp=0;
// let ans = true;

// for(let i=2;i<n/2;i++){
//     // console.log(9);
//     if(n%i==0){
//         console.log("no is not prime");
//         return
//         // ans = false
//     }
//     // else{
//     //     console.log("no is prime");
//     // }
// }

// // console.log(ans);

// 8. Write a JavaScript function to check if a given number is prime. 

// let n=11;

// let temp=0;

// for(let i=2;i<n/2;i++){
//     if(n%i==0){
//         temp=1
//         // console.log("no is not prime");
//     }
// }

// if(temp===1){
//     console.log("no is not prime");
// }
// else if(temp===0){
//     console.log("nop is prime");
// }

// 2. Write a JavaScript program to find the maximum number in an array. 

// let array=[10,20,21,11,33,22,]

// let max=array[0]

// for(let i=0;i<array.length;i++){
//     if(array[i]>max){
//         max=array[i]
//     }
// }
// console.log(max);

// 2. Write a JavaScript program to find the minimum number in an array. 

// let array=[10,20,21,9,11,33,22,]

// let min=array[0]

// for(let i=0;i<array.length;i++){
//     // console.log(array[i]);
//     if(array[i]<min){
//         min=array[i]
//         // console.log(min);
//     }
// }
// console.log(min);

/////////////////////////////////////

// ... OPEARTOR

// const obj = {
//     firstname: "Divit",
//     lastname: "Patidar",
// };
// const obj2 = { ...obj };
// console.log(obj2);

// 8. Write a JavaScript program to find the maximum element in a nested array. 

// let arr=[[18,2,3],[4,23,6],[7,8,9]]

// let max=arr[0][0]

// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     for(let j=0;j<arr[i].length;j++){
//         // console.log(arr[i][j]);
//         if(arr[i][j]>max){
//             max=arr[i][j]
//         }
//     }
// }
// console.log(max);


// 8. Write a JavaScript program to find the minimum element in a nested array. 


// let arr=[[18,22,12],[4,23,6],[7,3,9]]

// let min=arr[0][0]

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         if(arr[i][j]<min){
//             min=arr[i][j]
//         }
//     }
// }
// console.log(min);



// 1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 


// function fun1(a,callback){    
//     setTimeout(()=>{
//         console.log("setTimeout Function",a);
//     },2000)
//     callback
// }

// function fun2(){
//     console.log("hello fun2");
// }

// fun1("abhinav",fun2())


// 2. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 


// const data = [
//     { name: 'madan', age: '12' },
//     { name: 'man', age: '13' },
//     { name: 'dan', age: '14' },
//     { name: 'dam', age: '11' },
//     { name: 'ram', age: '17' },
//   ];

//   console.log("previous data",data);

//   console.log("After assending order sorting Age only");


// let sortedData=data.sort((a,b)=>{
//     return a.age-b.age
//     // console.log(a.age-b.age);
// })
// console.log("sortedData",sortedData);

// let data = [
//     { age: 5 },
//     { age: 2 },
//     { age: 8 }
// ]

//  data = data.sort((a, b) => {
//     return a.age - b.age
// })
// console.log(data);

// let data1=data.map((e)=>{
//     return e.age
// })
// console.log(data1);


// var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
// // console.log(obj);

// var obj = { "name":"John", "age":30, "city":"New York"};
// // var myJSON = JSON.stringify(obj);
// console.log(obj);
// // console.log(myJSON);


// 2. Implement a function to reverse a string without using the built-in reverse() method. 

// let names="abhinav"
// let rev=""

// for(let i=names.length-1;i>=0;i--){
//     console.log(i);
//     rev=rev+names[i]
// }
// console.log(rev);


// 3. Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

// let arr = [5, 4, 3, 9, 8, 7]

// let max = arr[0]
// let min = arr[0]

// function f1() {
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return [ max, min ]
// }

// console.log(f1());


// 3. Given an array of numbers, write a function to find the largest and smallest numbers in the array. 


// function findMax(arr){
//     let min=Math.min(...arr)
//     let max=Math.max(...arr)

//     return [min, max]
// }

// console.log(findMax([5, 4, 3, 9, 8, 7]));



// 9. Implement a function to remove duplicates from an array. 

// let arr=[1,2,3,4,5,1,2,3,4,2]

// // console.log(new Set(arr));
// let data=Array.from(new Set(arr))
// console.log(data);

///////////////////////////////////////////////////////

// function f1(arr){
//     return Array.from(new Set(arr))
// }

// console.log(f1([1,2,3,4,5,1,2,3,4,2]));

// // Implement a function to remove duplicates from an array. 
// let arr=[1,2,3,4,5,1,2,3,4,2]

// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             console.log(arr[i]);
//         }
//     }
// }

// let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 2];
// let uniqueArr = [];
// let isDuplicate = false;

// for (let i = 0; i < arr.length; i++) {
    

//     for (let j = 0; j < uniqueArr.length; j++) {
//         console.log(j);
//         if (arr[i] === uniqueArr[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         uniqueArr.push(arr[i]);
//     }
// }

// console.log(uniqueArr);


// let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 2];

// let uniqueArray=[]
// let findDuplicate=false

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<uniqueArray.length;j++){
//         if(arr[i]===uniqueArray[j]){
//             findDuplicate=true
//             break;
//         }
//     }
//     if(!findDuplicate){
//         uniqueArray.push(arr[i])
//     }
// }
// console.log(uniqueArray);


// 10. Write a function that sorts an array of numbers in ascending order. 

// let arr=[5,4,8,9,3,2,11]

// arr.sort((a,b)=>a-b)
// console.log(arr);


