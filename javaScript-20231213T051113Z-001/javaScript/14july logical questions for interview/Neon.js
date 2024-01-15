var num=9;
var temp = 0;
var suare = num*num;
while(suare != 0) {
    var digit =suare % 10;
    suare = Math.floor(suare / 10);
    temp += digit;
    // temp += digit * digit * digit;
}
if (temp == num) {
    console.log("Neon")
} else {
    console.log("Not Neon")
}