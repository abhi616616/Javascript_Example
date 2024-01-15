// var n = parseFloat(prompt("enter your Palindrome number: "))
var n = 121;
var sum = 0;
var r;
var ggg = n;

while (ggg != 0) {
    r = ggg % 10;
    sum = sum * 10 + r;
    ggg = Math.floor(ggg / 10);     //math.floo r method round the decimal value...
}
if (n == sum) {
    console.log("no is palendrome");
}
else {
    console.log(sum);
}


