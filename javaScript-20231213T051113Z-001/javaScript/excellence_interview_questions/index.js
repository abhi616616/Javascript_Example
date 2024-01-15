//prime number

// let n=111;      
// let temp=0

// for(let i=2;i<=n-1;i++){
//     if(n%i==0){
//         temp=temp+1
//     }
// }
// if(temp>0){
//     console.log("no is not prime");
// }
// else{
//     console.log("no is prime");
// }

// maximum find out of Array

// let arr=[9.10,11,8,6]
// let max=arr[0]

// for(let i=0;i<=arr.length;i++){
//     if(arr[i]>max)
//     max=arr[i]
// }
// console.log(max);


//Sorting of array in assending order
// let arr=[9,10,11,8,7,6,5]
// let temp=0
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i]);
// }


// find a prime no bw 1 to 100
// let temp=0
// let n=100
// for(let i=1;i<=n;i++){
//     for(let j=2;j<=i-1;j++){
//         if(i%j==0){
//             temp=temp+1
//         }
//     }
//     if(temp==0){
//         console.log(i);
//     }
//     else{
//         temp=0
//     }
// }