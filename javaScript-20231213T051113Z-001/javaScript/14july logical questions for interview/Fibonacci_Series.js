// let a=0;
// let b=1;
// let sum;

// for(let i=1;i<=10;i++){
//     sum=a+b;  //1, 1+1=2, 1+2=3, 
//     a=b;      //1, 1, 1,
//     b=sum;    // 1, 2, 3,
//     console.log(`${sum}`);
// }

let num=parseInt(prompt("enter youe number: "));

let a=0;
let b=1;
let sum=a+b;

document.write(`${a} ${b}`)
while(sum<=num){
    document.write(`${sum}`)
    a=b;
    b=sum;
    sum=a+b;
}