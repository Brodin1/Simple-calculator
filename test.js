var ps = require("prompt-sync")
var prompt = ps();

var result = 0;

while(true){
    var operator = prompt('Välj av någon av dessa( +, -, *, /, exit ): ');

    if (operator== `exit`){
        break;
        }

    var number1 = prompt('Första nummer: ');

    if (number1 == "result") {
        number1 = result
    }

    number1 = parseFloat(number1)

    var number2 = parseFloat(prompt('Anndra nummer: '));

    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {  (operator == '/')
        result = number1 / number2; 
    }

console.log(`${number1} ${operator} ${number2} = ${result}`);

}



 


