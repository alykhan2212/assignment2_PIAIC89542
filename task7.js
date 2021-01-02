const val1 = parseFloat(prompt("Enter first number: "));
const val2 = parseFloat(prompt("Enter second number: "));
const operator = prompt("Enter operator ( either +, -, * or / ): ");

let result;

switch(operator){
	case "+":
		result = val1 + val2;
		break;
	case "-":
		result = val1 - val2;
		break;
	case "*":
		result = val1 * val2;
		break;
	case "/":
		result = val1 / val2;
		break;
	case "%":
		result = val1 % val2;
		break;
}

document.write(val1 + " " + operator + " " + val2 + " = " + result );
