// let a="abhinav"

// let rev=""

// for(let i=a.length-1;i>=0;i--){
//     console.log(a[i]);
//     rev=rev+a[i]
// }
// console.log(rev);



// reverse an Array.

// let x=[1,2,3,4,5,6]

// let rev=""

// for(let i=x.length-1;i>=0;i--){
//     rev=rev+x[i]
// }
// console.log(rev);


// find max no...

// let x=[1,2,9,4,5,6]
// let max=x[0];
// for(let i=0;i<x.length;i++){
//     if(x[i]>max){
//         max=x[i]
//     }
// }
// console.log(max);


// find minimum no....

// let x=[9,4,5,2,3,6]

// let min=x[0];

// for(let i=0;i<x.length;i++){
//     // console.log(x[i]);
//     if(x[i]<min){
//         min=x[i]
//         // console.log(min);
//     }
// }
// console.log(min);


// arrange the array on the assending order...
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


// object data....
// let data=[{
//     a:"abhinav",
//     b:"kumar"
// },{
//     c:"asw",
//     d:"yadav"
// }]

// for(let i=0;i<data.length;i++){
//     console.log("data",data[i]);
// }

// console.log("data",data);

// assending order 

// let data=[4,5,2,9,3,7]

// let x=data[0]

// for(let i=0;i<data.length;i++){
//     console.log("data[i]",data[i]);
//     for(let j=i+1;j<data.length;j++){
//         console.log("data[j]",data[j]);
//         if(data[i]>data[j]){
//             x=data[j]
//             data[j]=data[i]
//             data[i]=x
//         }
//     }
// }
// console.log(data);

// dessending order.........

// let data=[4,5,2,9,3,7]

// let x=data[0]

// for(let i=0;i<data.length;i++){
//     for(let j=i+1;j<data.length;j++){
//         if(data[i]<data[j]){
//             x=data[j]
//             data[j]=data[i]
//             data[i]=x
//         }
//     }
// }
// console.log(data);


// find duplicate no...

// let data=[4,3,5,2,3,9,3,2,7]

// for(let i=0;i<data.length;i++){
//     for(let j=i+1;j<data.length;j++){
//         if(data[i]===data[j]){
//             console.log(data[i]);
//         }
//     }
// }



/////////////////////////////

// let data = [4, 3, 5, 2, 3, 9, 3, 2, 7];

// let uniqueData=[... new Set(data)]

// console.log("uniqueData",uniqueData);

// uniqueData.push(78)
// console.log(uniqueData);
// uniqueData.pop()
// console.log(uniqueData);



///////////////////////////////

// const user1 = [{
//     name: 'Jen',
//     age: 22,
// }];

// const user2 = [{
//     name1: "Andrew",
//     location: "Philadelphia"
// }];


// const mergedUsers = { ...user1[0], ...user2[0] };
// console.log(mergedUsers);


///////////////////////////////////////////////////////////////////////////////
let data = "abhinavKLIY@#123$"
let rev = ""

for (let i = data.length - 1; i >= 0; i--) {
    // console.log(data[i]);
    // rev = rev + data[i]
    if(data[i]>="a" && data[i]<="z" || data[i]>="A" && data[i]<="Z"){
        // console.log(data[i]);
        rev=rev+data[i]
    }
}

console.log(rev);



// let data = "12hello456#$&*"
// let rev = ""

// for (let i = data.length - 1; i >= 0; i--) {
//     if (data[i] >= "a" && data[i] <= "z") {
//         rev += data[i]
//     }

// }
// console.log(rev);

//////////////////////////////////////////////////////

// below is the code for sum a number and also provide a average of the number....

// let data = "12hello456#$&*"
// let add = ""


// for (let i = 0; i < data.length; i++) {
//     if (data[i] >= "0" && data[i] <= "9") {
//         add = add + data[i]
//     }
// }

// let addString = add.toString()

// let sum = 0;
// let count = 0;

// for (let i = 0; i < addString.length; i++) {
//     // console.log(addString[i]);
//     sum = sum + parseInt(addString[i])
//     count++
//     console.log("count", count);
// }
// console.log(sum);
// console.log(count);

// let average = sum / count
// console.log(average);



////////////////////////////////////////////////////////


// let data = "12hello456#$&*"
// let add = ""
// let sum=0;
// let count=0;


// for (let i = 0; i < data.length; i++) {
//     if (data[i] >= "0" && data[i] <= "9") {
//         add = add + data[i]
//     }
// }

// let data1=add.toString()

// for(let i=0;i<data1.length;i++){
//     sum=sum+parseInt(data1[i])
//     count++
// }

// let a=sum
// console.log(a);
// let b=sum/count
// console.log(b);