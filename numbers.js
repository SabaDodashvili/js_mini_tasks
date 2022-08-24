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

// function readNumber(num = undefined) {
// 	while (true) {
// 		num = prompt('input number', '');

// 		if (num === null || num === '') return null;
// 		else if (num !== '0' && isNaN(num / num)) continue;
// 		else return num;
// 	}
// }

// console.log(readNumber());

// 3) The built-in function Math.random() creates a random value from 0 to 1 (not including 1).Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

function random(min, max) {
	return min + Math.random() * (max - min);
}

console.log(random(10, 15));

// 4) Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values. Any number from the interval min..max must appear with the same probability.

//solution 1
// function randomInteger(min, max) {
// 	let rand = min - 0.5 + Math.random() * (max - min + 1);
// 	return Math.round(rand);
// }

//solution 2
function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

console.log(randomInteger(10, 15));
