// var x=2;
// var x=7
// console.log(x);
// {
//     var x=4;
//     console.log(x);
// }
// x=5
// console.log(x);



// let y=2
// console.log(y);

// {
//     let y=3;
//     console.log(y);
// }
// console.log(y);


// let x=20
// x=30
// console.log(x);

// const z=60;
// z=54
// console.log(z);

// // {/* <script>
// // function abc{
// //     console.log("hello")
// // }

// setTimeout(function(){ abc() }, 2000);
// {/* setTimeout(function(){ x.value="4 seconds" }, 4000);
// setTimeout(function(){ x.value="6 seconds" }, 6000); */}
// // </script> */}

// var carName="nnnnnn"
// function myFunction() {
//     // var carName = "Volvo";
//     console.log(carName);
//     // code here CAN use carName
//   }
//   console.log(carName);
//   myFunction()



// let blockScopedVariable = "I am block-scoped";
// {   
//     console.log(blockScopedVariable); // Accessing the block-scoped variable inside the block
// }
//   console.log(blockScopedVariable);

// function abc(){
//     let a=5
//     let b=6
//     let c=a*b
//     console.log(c);
// }

// setTimeout(()=>{
//     abc()
// },2000)


// function add(a, b) {
//     return a + b;
//   }

//   function multiply(a, b) {
//     return a * b;
//   }

//   function calculate() {
//     const x = 5;
//     const y = 10;

//     const sum = add(x, y);
//     const product = multiply(x, y);

//     console.log("Sum:", sum);
//     console.log("Product:", product);
//   }

//   console.log("Before calling calculate");
//   calculate();
//   console.log("After calling calculate");


//synchronous..
// function one(){
//   console.log("hello one");
// }
// function two(){

//   setTimeout(()=>{
//     console.log("hello two");
//   },3000)
// }
// function three(){
//   console.log("hello three");
// }
//   one()
//   two()
//   three()



// function one(){
//   console.log("hello one");
// }
// function two(){

//   setInterval(()=>{
//     console.log("hello two");
//   },3000)
// }
// function three(){
//   console.log("hello three");
// }
//   one()
//   two()
//   three()


// let arr=[1,2,3,4,5,6]

// // console.log(arr.length);
// console.log(typeof(arr));


// Array Questions..................

// let arr = [1, 2, 3, 4];
// let firstElement = arr[0]; // 1
// console.log(firstElement);

// // let lastElement = arr[arr.length-1]; // 4
// let lastElement = arr[arr.length-1]; // 4
// console.log(lastElement);

// let arr = [1, 2, 3];
// arr.push(4,5)
// console.log(arr); // [1, 2, 3, 4]


// let arr = [1, 2, 3,4,5,6,7,8];

// // console.log(arr.indexOf(7));  // return the index position of the array...

// if(arr.indexOf(4)!==-1){
//     console.log("found");
// }
// else{
//     console.log("not found");
// }


// let arr = [1, 2, 3,4,5,6,7,8,9];

// arr.splice(4, 1);

// console.log(arr); // [1, 2]

// let arr1=[1,2]
// let arr2=[3,4]

// let farr=arr1.concat(arr2)
// console.log(farr);


// let a=51;
// let b=32;

// a=a+b;
// b=a-b;
// a=a-b

// console.log(a);
// console.log(b);








// let  a =2;
// let b = 3;


// a = a+b;
// b = a -b;

// a = a - b


// a = a^b;
// b=a^b;  
// a=a^b
// console.log('a', a);
// console.log('b',b);

// let a=93;
// let b=15;
// let c

// c=a+b;
// a=c-a;
// b=c-b;

// console.log("a",a);
// console.log("b",b);


// print maximum no of an array.
// let arr=[6,5,8,9,90,181,7,2,3,33,55]
// let max=arr[0]
// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     // console.log(max);
// }
// console.log(max);



// print minimum no of an array elements.

// let arr =[31,89,57,32,56,42]
// let min=arr[0]

// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     if(arr[i]<min){
//         min=arr[i]
//     }
//     // console.log(min);
// }
// console.log(min);


// print an array element in assending order

// let arr=[7,4,9,2,5,3,6,8]

// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     for(let j=0;j<arr.length;i++){

//     }
// }

// console.log(arr1);


// let a = {
//     x: 20,
//     y: 30,
//     q: [
//         {
//             g: {
//                 r: 1,
//                 t: 2,
//                 p: 3
//             }
//         }
//     ],
//     k: [
//         {
//             l: {
//                 r: 4,
//                 t: 5,
//                 p: 6
//             }
//         }
//     ],
//     m: [
//         {
//             n: {
//                 r: 7,
//                 t: 8,
//                 p: 9
//             }
//         }
//     ],
// }

// let a = {
//     data:[
//         {
//             m: [
//                 {
//                     g: {
//                         r: 1,
//                         t: 2,
//                         p: 3
//                     }
//                 }
//             ],
//             m: [
//                 {
//                     h: {
//                         r: 4,
//                         t: 5,
//                         p: 6
//                     }
//                 }
//             ],
//             m: [
//                 {
//                     y: {
//                         r: 7,
//                         t: 8,
//                         p: 9
//                     }
//                 }
//             ],
//         }
//     ]
// }

//     // console.log(a.data[0].m[0].g.r);  // Output: 1

//     // console.log(a.data[0].m[0].g);

//   for(let i=0;i<a.data.length;i++){
//     console.log(a.data[i].m[i]);
//   }

// for(let i=0;i<Object.keys(a).length;i++){
//     console.log(i);
// }


// var data = Object.keys(a).length;
// console.log(data);


// let a = {
//     data: [
//         {
//             m: [
//                 {
//                     g: {
//                         r: 1,
//                         t: 2,
//                         p: 3
//                     }
//                 }
//             ]
//         },
//         {
//             m: [
//                 {
//                     g: {
//                         r: 4,
//                         t: 5,
//                         p: 6
//                     }
//                 }
//             ]
//         },
//         {
//             m: [
//                 {
//                     g: {
//                         r: 7,
//                         t: 8,
//                         p: 9
//                     }
//                 }
//             ]
//         }
//     ]
// };

// for(let i=0;i<a.data.length;i++){
//     console.log(a.data[i].m[0].g);
// }

// let data={
//     "products": [
//         {
//             "id": 1,
//             "title": "iPhone 9",
//             "description": "An apple mobile which is nothing like apple",
//             "price": 549,
//             "discountPercentage": 12.96,
//             "rating": 4.69,
//             "stock": 94,
//             "brand": "Apple",
//             "category": "smartphones",
//             "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//             "images": [
//                 "https://i.dummyjson.com/data/products/1/1.jpg",
//                 "https://i.dummyjson.com/data/products/1/2.jpg",
//                 "https://i.dummyjson.com/data/products/1/3.jpg",
//                 "https://i.dummyjson.com/data/products/1/4.jpg",
//                 "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//             ]
//         },
//         {
//             "id": 2,
//             "title": "iPhone X",
//             "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//             "price": 899,
//             "discountPercentage": 17.94,
//             "rating": 4.44,
//             "stock": 34,
//             "brand": "Apple",
//             "category": "smartphones",
//             "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//             "images": [
//                 "https://i.dummyjson.com/data/products/2/1.jpg",
//                 "https://i.dummyjson.com/data/products/2/2.jpg",
//                 "https://i.dummyjson.com/data/products/2/3.jpg",
//                 "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
//             ]
//         },
//         {
//             "id": 3,
//             "title": "Samsung Universe 9",
//             "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
//             "price": 1249,
//             "discountPercentage": 15.46,
//             "rating": 4.09,
//             "stock": 36,
//             "brand": "Samsung",
//             "category": "smartphones",
//             "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
//             "images": [
//                 "https://i.dummyjson.com/data/products/3/1.jpg"
//             ]
//         },
//         {
//             "id": 4,
//             "title": "OPPOF19",
//             "description": "OPPO F19 is officially announced on April 2021.",
//             "price": 280,
//             "discountPercentage": 17.91,
//             "rating": 4.3,
//             "stock": 123,
//             "brand": "OPPO",
//             "category": "smartphones",
//             "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
//             "images": [
//                 "https://i.dummyjson.com/data/products/4/1.jpg",
//                 "https://i.dummyjson.com/data/products/4/2.jpg",
//                 "https://i.dummyjson.com/data/products/4/3.jpg",
//                 "https://i.dummyjson.com/data/products/4/4.jpg",
//                 "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
//             ]
//         }
//     ]
// }

// console.log(data);

// for(let i=0;i<data.products.length;i++){
//     console.log(data.products[i].brand);
// }

// data.forEach((data,array,index)=>{
//     console.log(data);
// })


// data.forEach((ele)=> console.log("ddddddddddddd ", ele))



// setTimeout(()=>{
//     console.log("hello function setTimeout");
// },2000)

// setTimeout(f1,4000)
// f2()


// function f1(){
//     console.log("hello f1 functions");
// }
// function f2(name,age){
//     console.log("hello"+" "+name+" "+"kumar"+" "+age);
// }

// setTimeout(f1,3000)
// f2("abhinav",24)


// function f1(name,age,myfunction){
//     console.log("hello f1 functions");

//     myfunction(name,age)
// }
// function f2(name,age){
//     console.log("hello"+" "+name+" "+"kumar"+" "+age);
// }

// setTimeout(f1,3000,"abhinav",24,f2)
// f2("abhinav",24)


// function f1(name,f3){
//     console.log("hello function f1");

//     f3(name)
// }

// function f2(name){
//     console.log("hello function f2"+" "+name);
// }

// setTimeout(f1, 2000,"abhinav",f2)
// // f2("abhinav")




// let arr= [1,2,3,4,5]

// let x=[]
// let y={}

// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     // x.push(arr[i])
//     y[i]=arr[i]
// }
// // console.log(x);
// console.log(y);


// async function f1(){
//     console.log("hello async");
// }
// f1()


// function asw(){
//     // setTimeout(()=>{
//     //     console.log("kkkkkkkk");
//     // },3000)
//     console.log("jjjjjjjjj");
// }

// setTimeout(asw,2000)

// asw()

// let x = "abhi";
// let y=''

// for(let i=x.length-1; i>=0; i--){
//     console.log("ppp",x[i]);
//     // y=x[i]
// // y= y+x[i]
// }

// console.log(y);


/// map

// let x =  [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
//   ];


// let y = x.map(({key, value})=> ({[key]: value}))
// console.log("oiioo", y);

// const reformattedArray = x.map(({ key, value }) => ({ [key]: value }));

// console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]

// console.log(y);\

// let x = [1,2,3,4];

// let y = x.forEach((item)=> item*2);

// let y = x.forEach((item, index, arr)=>{
//     arr[index]= item*2
// })
// console.log("ppp",y);

// let x = [1, 2, 3, 4];

//  x.forEach((item, index, arr) => {
//   arr[index] = item * 2;
// });

// console.log("ppp", x);


// Asynchronous example...

// function f1(){
//     console.log("f1...");
// }

// function f2(){
//     console.log("f2...");
// }

// function f3(){
//     console.log("f3...");
// }

// f1()
// // f2()
// setTimeout(f2,2000)
// f3()

// synchronous example.....

// function f1(a,b){
//     console.log("function f1",a,b);

// }

// // setTimeout((name)=>{
// //     console.log("function f2");
// // },3000)

// function f2(name){
//     console.log("function f2",name);
// }

// function f3(){
//     console.log("function f3");
// }

// f1("abhi","kumar")
// setTimeout(f2,3000,"abhinav")
// f3()


// callback examples....
// function one(){
//     console.log("function one");
// }

// function two(){
//     console.log("function two");
// }

// function main(){
//     console.log("function three");

//     setTimeout(one,2000)
//     two()
// }
// main()

// function f1(a,b){
//     console.log("hello f1",a,b);
// }

// function f2(){
//     console.log("hello f2");
// }

// f1("abhi","kumar")
// f2()


// function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

// function f1(callback,name){
//     console.log("hello"+" "+name);
//     callback()
//     // setTimeout(()=>{
//     //     callback()
//     // },3000)
// }

// function f2(){
//     console.log("hello f2");
//     //  setTimeout(()=>{
//     //     console.log("hello f2");
//     // },3000)
// }

// f2(f1,"abhinav")

// function f1(callback, name) {
//     console.log("hello " + name);

//     // Introduce a delay of 3000ms (3 seconds) using setTimeout
//     setTimeout(() => {
//         callback(); // Call the provided callback function after the delay
//     }, 3000);
// }

// function f2() {
//     console.log("hello f2");
// }

// // Call f1 and pass f2 as the callback along with the name "abhinav"
// f1(f2, "abhinav");



// callback examples....
// function one(){
//     // console.log("function one");
//     setTimeout(()=>{
//         console.log("hello one");
//     },2000)
// }

// function two(){
//     console.log("function two");
// }

// function main(){
//     console.log("function three");
//     one()
//     // setTimeout(one,1000)
//     two()
// }
// main()


// let promise = new Promise( (resolve, reject)=> {
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks"
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise.
//     then( ()=> {
//         console.log('Success, You are a GEEK');
//     }).
//     catch( ()=> {
//         console.log('Some error has occurred');
//     });


// let data= new Promise((resolve,reject)=>{
//     let x=2;
//     let y=2

//     if(x==y){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
//     data.then(()=>{
//         console.log("success");
//     })
//     .catch(()=>{
//         console.log("fail");
//     })

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


// var obj1 = {
//     x:  43,
//     y:  "Hello world!",
//     z: function(){
//        return this.x;
//     }
//  }
//  console.log();

//  // Collection of data as an ordered list

//  var array1 = [5, "Hello", true, 4.1]; 
//  console.log(array1 );

// let a = 2;
// let b = "2"

// console.log(a = b);

// if(a===b){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// var x = 8;
// var y = "3";

// console.log(x-y);

  
// let a=[1,2,3,4,5]
// let result = a.find(element => element > 3);

// console.log(result); // Output: 3

// let x;

// function f1(){
//     console.log(x);
// }
// x=5;
// f1()














