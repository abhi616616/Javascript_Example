let num=parseInt(prompt("enter your number: "));
let even_sum=0;
let odd_sum=0;

for(let i=1;i<=num;i++)
{
    if(i%2==0){
        document.write(`${i}`+"<br>")
        even_sum++;
    }
    else{
        odd_sum++;
    }
}
document.write(`${even_sum} of even no`);
document.write(`${odd_sum} of odd no`);

// for(let i=1;i<=num;i++){
//     if(i%2 !==0){
//         document.write(`${i}`+"<br>")
//         sum=sum+i;
//     }
// }
// document.write(`${sum} of odd number`)