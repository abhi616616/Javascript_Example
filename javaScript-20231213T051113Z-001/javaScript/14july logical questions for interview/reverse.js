var a = 36;
var length=a.length;
var temp=0;

while(a != 0) {
    var digit =a % 10;
    a = Math.floor(a / 10);
    temp = temp * 10 + digit;
}
console.log(temp)
// document.write(temp)
