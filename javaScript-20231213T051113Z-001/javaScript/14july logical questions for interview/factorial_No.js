let num = parseInt(prompt("enter your positive no: "));

if (num < 0) {
    document.write("please enter positive no");
}
else if (num === 0) {
    document.write(`factorial of ${num} is 1`);
}
else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    document.write(`factorial of ${num} is ${fact}`);
}
