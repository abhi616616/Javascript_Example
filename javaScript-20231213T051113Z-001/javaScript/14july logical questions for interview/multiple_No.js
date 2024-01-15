// let num=parseInt(prompt("enter your number: "))
// for(let i=1;i<=10;i++){
//     document.write(`${num} * ${i}=${num*i}<br>`)
// }


// let num=parseInt(prompt("enter your number: "))
function fun(num){
    for(let i=1;i<=10;i++){
        document.write(`${num}* ${i}=${num*i}<br>`);
        
    }
    document.write("<br><br>")

    for(let i=1;i<=10;i++){
        document.write(`${num}+ ${i}=${num+i}<br>`);
    }
}
fun(20);


