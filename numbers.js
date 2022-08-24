// 1) Create a script that prompts the visitor to enter two numbers and then shows their sum.

// let a = prompt('input first number', '');
// let b = prompt('input second number', '');

// function sum(numbOne, numbTwo) {
// 	let notNumber = (numbOne !== '0' && isNaN(numbOne / numbOne)) || (numbTwo !== '0' && isNaN(numbTwo / numbTwo));

// 	if (notNumber) return 'input numbers';
// 	else return Number(numbOne) + Number(numbTwo);
// }

// console.log(sum(a, b));

// 2) Create a function readNumber which prompts for a number until the visitor enters a valid numeric value. The resulting value must be returned as a number. The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

function readNumber(num = undefined) {
	while (true) {
		num = prompt('input number', '');

		if (num === null || num === '') return null;
		else if (num !== '0' && isNaN(num / num)) continue;
		else return num;
	}
}

console.log(readNumber());
