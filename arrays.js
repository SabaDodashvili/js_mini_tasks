// 1) Напишите функцию sumInput(), которая: Просит пользователя ввести значения, используя prompt и сохраняет их в массив. Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена». Подсчитывает и возвращает сумму элементов массива. P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
	let arr = [];
	let a = prompt('შეიყვანეთ რიცხვი');
	let sum = 0;

	while (!isNaN(a) && a !== null && a !== '') {
		arr.push(a);
		a = prompt('შეიყვნაეთ რიცხვი');
		sum += +a;
	}

	return sum;
}

console.log(sumInput());

//алтернативное решения

function sumInput() {
	let numbers = [];

	while (true) {
		let value = prompt('Введите число', 0);

		// Прекращаем ввод?
		if (value === '' || value === null || !isFinite(value)) break;

		numbers.push(+value);
	}

	let sum = 0;
	for (let number of numbers) {
		sum += number;
	}
	return sum;
}

alert(sumInput());

// 2) найти минимальный элемент масива:

arr = [-11, -2, 3, 4, -29, -30, 6];

function findMinElement(array) {
	let minEl = array[0];

	for (let i = 0; i < array.length; i++) {
		if (array[i] < minEl) minEl = array[i];
	}

	return minEl;
}

console.log(findMinElement(arr));

// 3) найдите индекс максимального елемента в масиве.

let myArr = [1, 34, 1212, -12, 3123, 412, 551];

function getArrMaxElementIndex(arr) {
	let maxEl = arr[0];
	let maxElIndex = [0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > maxEl) {
			maxEl = arr[i];
			maxElIndex = i;
		}
	}

	return maxElIndex;
}

//более короткий в написании но выполняется в 2 раза больше

// function getArrMaxElementIndex(arr) {
// 	return arr.indexOf(Math.max.apply(null, arr));
// }

console.log(getArrMaxElementIndex(myArr));

// 4) есть масиов N10 и M10 найдите максимальное различие между елементами с одинаковыми индексами и верните это различие.
let arrOne = [12, 15, 22, 24, 55, 123, 23];
let arrTwo = [12, 15, 22, 24, 55, 113, 23];

function findMaximumDifference(arrOne, arrTwo) {
	let maxValue = 0;

	for (let i = 0; i < arrOne.length; i++) {
		if (Math.abs(arrOne[i] - arrTwo[i]) > Math.abs(maxValue)) maxValue = arrOne[i] - arrTwo[i];
	}

	return maxValue === 0 ? 'масивы идентичны' : maxValue;
}

console.log(findMaximumDifference(arrOne, arrTwo));
