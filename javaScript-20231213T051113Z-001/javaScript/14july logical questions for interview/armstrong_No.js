var suare=370;
var check=suare;
var temp = 0;
while(suare != 0) {
    var digit =suare % 10;
    suare = Math.floor(suare / 10);
    temp += digit * digit * digit;
}

if (temp == check) {
    console.log("Aramstroh")
} else {
    console.log("Not Aramstroh")
}