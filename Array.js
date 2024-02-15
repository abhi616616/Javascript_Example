// find maximum no

// let data=[4,5,2,9,3,7]

// let max=data[0]

// for(let i=0;i<data.length;i++){
//         if(data[i]>max){
//             max=data[i]
//         }
// }
// console.log(max);


// find Arrange a DATA  FROM Assending prder.........

// let data=[4,5,2,9,3,7]
// let x=data[0]
// for(let i=0;i<data.length;i++){
//     for(let j=i+1;j<data.length;j++){
//        if(data[i]>data[j]){
//         x=data[i];
//         data[i]=data[j];
//         data[j]=x
//        }
//     }
// }
// console.log(data);
// for(let i=0;i<data.length;i++){
//     console.log(data[i]);
// }

// find a duplicate no of this array.


// let arr=[1,2,3,4,5,6,7,5,4,70]  //find a duplicate array.....

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             console.log(arr[i]);
//         }
//     }
// }


// swap a two number.

// let a=2;
// let b=4;
// let c;

//  c=a;
//  a=b;
//  b=c

//  console.log(a,b);


// swap a two number without using third variable....

// let a=21;
// let b=42;

// a=a+b; // 6
// b=a-b
// a=a-b

// // [a,b] = [b,a]

// console.log(a,b);

////////////////////////////////////////////////////////////////////////////////

// let str="abhinav"
// let rev="";
// for(let i=str.length-1;i>=0;i--){
//     // console.log(str[i]);
//     rev=rev+str[i]
//     console.log(rev);
// }
// console.log(rev);

// let data1=()=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("data is fetched")
//         },2000)
//     })
// }
// const data=async()=>{
//     try{    
//         let result=await data1()
//         console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// data()


// splice function in array....

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// // At position 2, remove 2 items: 
// // fruits.splice(3, 1);

// fruits.splice(2, 1, "Lemon", "Kiwi");

// console.log(fruits);


// slice method in an error....

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 4);
// console.log(citrus);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits.slice(-3, -2);
// console.log(myBest);


// for in loop using with the Array.

// const numbers = [45, 4, 9, 16, 25];

// for (let x in numbers) {
//     console.log(x);
//     console.log(numbers[x]);
// }
// // console.log(numbers);


// for of loop using with the Array.

// const numbers = [45, 4, 9, 16, 25];

// for (let x of numbers) {
//     console.log(x);
//     // console.log(numbers[x]);
// }
// console.log(numbers);


// forEach loop....

// const data=[1,3,2,5,4,8]

// data.forEach((key,index)=>{
//     console.log(index,key);
// })


// let data= [1,2,3,4,5]

// console.log("data",data);

// let data1=data.reverse()
// console.log("data1",data1);


// let data = [1, 2, 3, 4, 5]

// console.log("original_Array", data);

// let reverse_Array = []

// for (let i = data.length - 1; i >= 0; i--) {
//     console.log(data);
//     let data1=reverse_Array.pop(data)
//     console.log("data1",data1);
//     // reverse_Array.push(data[i])
//     // console.log(data[i]);
//     // console.log(reverse_Array);
// }

// // console.log(reverse_Array);

///////////////////////////////////////////////////////////


// var data = [1, 2, 3, 4, 1, 2, 1, 2]

let store = []
let data1 = ((data) => {
    setTimeout(()=>{
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j < data.length; j++) {
                if (data[i] == data[j]) {
                    store.push(data[i])
                }
            }
        }
        console.log("store", store);
    },2000)
})
data1([1, 2, 3, 4, 1, 2, 1, 2])

function f2(){
    console.log();
}


//////////////////////////////////////////////////////////



// function f1(a){
//     // console.log("a",a);
//     return a;
// }

// let x=f1([1,2,3])
// console.log(x);