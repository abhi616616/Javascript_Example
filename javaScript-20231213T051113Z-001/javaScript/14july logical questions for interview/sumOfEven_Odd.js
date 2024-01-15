let num=parseInt(prompt("enter your Even & Odd number: "));
let even_sum=0;
let odd_sum=0;

for(let i=1;i<=num;i++){
    if(i%2==0){
        even_sum=even_sum+i;
    }
    else{
        odd_sum=odd_sum+i;
    }
}
document.write(`sum of even no =${even_sum}<br>`);
document.write(`sum of odd no = ${odd_sum}`);


