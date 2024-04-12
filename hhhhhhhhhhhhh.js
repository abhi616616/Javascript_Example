// promise is a object, promise used in js for handle a asynchronous operationns, there are few steps in promises.
// pending, fulfilled, rejected
//  and promise object support two properties. state, result
// when promise is pending that time result will be undefined.
//  when the promise is fulfilled that time it will print the value.
//  when promise is rejected that time print a error.

let promise= new Promise((resolve,reject)=>{
    let a=2;
    let b=2;

    if(a===b){
        resolve()
    }
    else{
        reject()
    }

})
// promise.then(()=>{
//     console.log("promise is resolved");
// }).catch((error)=>{
//     console.log(`error occur ${error}`);
// })

// obj = { 
// 	key1 : "value", 
// 	key2 : "value2"
// 	}

//     console.log(Object.keys(obj));

//     for (let key in obj) {
//         console.log(key);
//       }

// console.log("start the task");

// setTimeout(function() {
//   console.log("using asynchronous operations");
// }, 2000);

// console.log("End of the task");

// function bubbleSort(arr) {
//     let n =  arr.length;
// 	for (var i = 0; i <n; i++) {
// 		for (var j = 0; j < (n - i - 1); j++) {
// 			if (arr[j] > arr[j + 1]) {

// 				var temp = arr[j]
// 				arr[j] = arr[j + 1]
// 				arr[j + 1] = temp
// 			}
// 		}
// 	}

// 	console.log(arr);
// }

// var arr = [8,4,9,1,4,2,3,5,7,6];
// bubbleSort(arr);

/////////////////////////////////////////////////////////////////////////////////////

// function binarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         let mid = Math.floor(start + (end - start) / 2);
//         let element = arr[mid];

//         if (element === target) {
//             return mid;
//         } else if (target < element) {
//             // search in left
//             end = mid - 1;
//         } else {
//             // search in right
//             start = mid + 1;
//         }
//     }
//     // element not found
//     return -1;
// }

// // Example 
// const arr = [1, 2, 5, 6, 7];
// const target = 5;

// if (binarySearch(arr, target) !== -1) {
//     console.log("Found");
// } else {
//     console.log("Not found");
// }



// console.log("11111111");


// binary search algo..... ............................................


// function binarySearch(arr,target){
//     let start=0;
//     let end=arr.length-1

//     while(start<=end){
//         let mid=Math.floor((start+end)/2);

//         if(target === arr[mid]){

//             return "yes Found"
//         }

//         if(arr[mid]>target){
//             end=mid-1
//         }
//         else if(arr[mid]<target){
//             start=mid+1
//         }
//     }
//     return -1

// }

// const arr=[1,2,3,4,5]
// const target=1;


// if(binarySearch(arr,target) !== -1){
//     console.log("found");
// }
// else{
//     console.log("not found");
// }



// sorting algo ....................................................


// function bubbleSort(arr) {
//     let n =  arr.length;
// 	for (var i = 0; i <n; i++) {
// 		for (var j = 0; j < (n - i - 1); j++) {
// 			if (arr[j] > arr[j + 1]) {
 
// 				var temp = arr[j]
// 				arr[j] = arr[j + 1]
// 				arr[j + 1] = temp
// 			}
// 		}
// 	}
 
// 	console.log(arr);
// }
 
// // var arr = [8,4,9,1,4,2,3,5,7,6];
// var arr = [8,4,9,1,4];
// bubbleSort(arr);



// let arr=[10,9,7,4]
// let temp=0
// for(let i=0;i<arr.length;i++){
//     console.log("i",i);
//     for(let j=i+1;j<arr.length;j++){
//         console.log("j",j);
//         if(arr[i]>arr[j]){
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr);



