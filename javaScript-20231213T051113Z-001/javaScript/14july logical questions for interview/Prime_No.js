let number=parseInt(prompt("enter your number: "))
let temp=0;

for(let i=2;i<=number-1;i++){
    if(number%i==0){
        temp=temp+1;
    }
}
if(temp>0){
    document.write(`${number} is not a prime number`);
}
else{
    document.write(`${number} is a prime number`);
}