let a=20;
function outer(){
    let b=30;
    console.log(`${a},${b}`);
    function inner(){
        let c=40;
        console.log(`${a},${b},${c}`);
    }
    return inner
}
let x=outer()
x()