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

// 5) Определяет, сколько элементов находятся между двумя заданными элементами массива, значение в масиве не должны повторятся.

let arr = [12, 15, 22, 24, 55, 123, 23, 12];

function getNumberElBetween(arr, elOne, elTwo) {
	let elOneIndex;
	let elTwoIndex;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === elOne) elOneIndex = i;
		else if (arr[i] === elTwo) elTwoIndex = i;
	}

	return Math.abs(elOneIndex - elTwoIndex) - 1;
}

console.log(getNumberElBetween(arr, 12, 123));

// 6) იპოვის  მასივის  იმ  ელემენტების  ჯამს,  რომლებიც  მოთავსებულია  ორ  მოცემულ
// ელემენტს შორის.

let arr = [12, 15, 22, 24, 55, 123, 23];

function getNumberElBetween(arr, elOne, elTwo) {
	let flag = false;
	let sumElements = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === elOne || arr[i] === elTwo) {
			flag = !flag;
			continue;
		}
		if (flag) sumElements += arr[i];
	}

	return sumElements;
}

console.log(getNumberElBetween(arr, 12, 123));

// 7) მასივის დადებით ელემენტებს გადაწერს მეორე მასივში.

let arr = [-12, -15, 22, 24, -55, -123, 23];

function getPositivElementsArr(arr) {
	return arr.filter(el => el > 0);
}

console.log(getPositivElementsArr(arr));

// 8) Напишите функцию `camelize(str)`, которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

//РЕШЕНИЕ - 1
function camelize(str) {
	let pos = 0;
	let newStr = str;
	let foundPos = 0;

	while (true) {
		foundPos = newStr.indexOf('-', pos);

		if (foundPos === -1) break;

		newStr = newStr.slice(0, foundPos) + newStr[foundPos + 1].toUpperCase() + newStr.slice(foundPos + 2);
		pos = foundPos + 1;
	}

	return newStr;
}

console.log(camelize('list-style-image'));

//РЕШЕНИЕ - 2
function camelize(str) {
	let tempArr = str.split('-');

	for (let [i, el] of tempArr.entries()) {
		if (i !== 0) tempArr[i] = el.slice(0, 1).toUpperCase() + el.slice(1);
	}

	return tempArr.join('');
}

console.log(camelize('list-style-image'));

//РЕШЕНИЕ - 3
function camelize(str) {
	return str
		.split('-')
		.map((el, index) => (index !== 0 ? el.slice(0, 1).toUpperCase() + el.slice(1) : el))
		.join('');
}

console.log(camelize('list-style-image'));

// 9) Напишите функцию `filterRange(arr, a, b)`, которая принимает массив `arr`, ищет в нём элементы между `a` и `b` и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

let arr = [1, 3, 2, 3, 5, 6, 7, 8, 9, 11];

function filterRange(arr, start, end) {
	return arr.filter(el => el >= start && el <= end);
}

console.log(filterRange(arr, 2, 5));

// 10) Напишите функцию `filterRangeInPlace(arr, a, b)`, которая принимает массив `arr` и удаляет из него все значения кроме тех, которые находятся между `a` и `b`. То есть, проверка имеет вид `a ≤ arr[i] ≤ b`.
// Функция должна изменять принимаемый массив и ничего не возвращать.

let arr = [1, 3, 4, 5, 2, 7, 6, 9, 8];

function filterRangeInPlace(arr, start, end) {
	for (let [i, el] of arr.entries()) {
		if (el < start || el > end) {
			arr.splice(i, 1);
			i--;
		}
	}
}

filterRangeInPlace(arr, 3, 6);

console.log(arr);

// 11) Сортировать в порядке по убыванию.

let arr = [1, 3, 4, 5, 2, 7, -5, 6, 9, 8];

function sortRevers(arr) {
	arr.sort((a, b) => b - a);
}

sortRevers(arr);
console.log(arr);

// 12) У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым. Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
	return arr.concat().sort();
}

console.log(arr);
console.log(copySorted(arr));
