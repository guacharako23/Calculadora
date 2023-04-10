let numero_1 = "";
let numero_2 = "";
let operador = "";

const insertar = (num) => {
	if (operador === "") {
		numero_1 += num;
		document.getElementById("resultado").value = numero_1;
	} else {
		numero_2 += num;
		document.getElementById("resultado").value = numero_2;
	}
};

const clearResultado = () => {
	numero_1 = "";
	numero_2 = "";
	operador = "";
	document.getElementById("resultado").value = "";
};

const operacion = (op) => {
	operador = op;
};

const igual = () => {
	let resultado = 0;
	switch (operador) {
		case "+":
			resultado = parseInt(numero_1) + parseInt(numero_2);
			break;
		case "-":
			resultado = numero_1 - numero_2;
			break;
		case "*":
			resultado = numero_1 * numero_2;
			break;
		case "/":
			resultado = numero_1 / numero_2;
			break;
	}
	document.getElementById("resultado").value = resultado;
	numero_1 = resultado.toString();
	numero_2 = "";
	operador = "";
};
