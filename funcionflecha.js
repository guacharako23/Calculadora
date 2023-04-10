let num1 = "";
let num2 = "";
let operator = "";

const insert = (num) => {
	if (operator === "") {
		num1 += num;
		document.getElementById("result").value = num1;
	} else {
		num2 += num;
		document.getElementById("result").value = num2;
	}
};

const clearResult = () => {
	num1 = "";
	num2 = "";
	operator = "";
	document.getElementById("result").value = "";
};

const operation = (op) => {
	operator = op;
};

const equal = () => {
	let result = 0;
	switch (operator) {
		case "+":
			result = parseInt(num1) + parseInt(num2);
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			result = num1 / num2;
			break;
	}
	document.getElementById("result").value = result;
	num1 = result.toString();
	num2 = "";
	operator = "";
};
