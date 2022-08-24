// 1)Create a script that prompts the visitor to enter two numbers and then shows their sum.

let a = prompt('input first number', '');
let b = prompt('input second number', '');

function sum(numbOne, numbTwo) {
	let notNumber = (numbOne !== '0' && isNaN(numbOne / numbOne)) || (numbTwo !== '0' && isNaN(numbTwo / numbTwo));

	if (notNumber) return 'input numbers';
	else return Number(numbOne) + Number(numbTwo);
}

console.log(sum(a, b));
