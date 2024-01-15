var num = parseInt(prompt("enter your first number: "))
var num1 = parseInt(prompt("enter your second number: "))
var cal = prompt('/', '%', '*', '+', '-', '**');

switch (cal) {
    case '*':
        document.write(`${num} * ${num1} =${num * num1}`)
        break;

    case '/':
        document.write(`${num} / ${num1} =${num / num1}`)
        break;

    case '%':
        document.write(`${num} % ${num1} =${num % num1}`)
        break;

    case '+':
        document.write(`${num} + ${num1} =${num + num1}`)
        break;

    case '-':
        document.write(`${num} - ${num1} =${num - num1}`)
        break;

    case '**':
        document.write(`${num} ** ${num1} =${num ** num1}`)
        break;

    default:
        {
            document.write("invalid input");
        }

}