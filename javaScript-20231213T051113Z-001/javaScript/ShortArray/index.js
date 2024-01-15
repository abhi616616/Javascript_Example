// Assending Order

let arr=[10,9,7,4,3,8,2,1,5,6,10,9,7,4,3,8,2,1,5,6]
let temp=0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}

let val = removeDuplicate(arr, arr.length);
for (let i = 0; i < val; i++) {
    console.log(arr[i]);
}

function removeDuplicate(arr, n) {
    let j = 0;
    let array = [];
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] != arr[i+1]) {
            array[j++] = arr[i];
        }
    }
    array[j++] = arr[n - 1];
    for (let i = 0; i < j; i++) {
        arr[i] = array[i];
    }
    return j;
}




//Dessending Order
// let arr=[10,9,7,4,3,8,2,1,5,6]
// let temp=0
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
