// // 1) Write the function sumInput() that:Asks the user for values using prompt and stores the values in the array.
// //     Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// //     Calculates and returns the sum of array items.
// // P.S. A zero 0 is a valid number, please don’t stop the input on zero.

// function sumInput() {
// 	let arr = [];
// 	let a = prompt('შეიყვანეთ რიცხვი');
// 	let sum = 0;

// 	while (!isNaN(a) && a !== null && a !== '') {
// 		arr.push(a);
// 		a = prompt('შეიყვნაეთ რიცხვი');
// 		sum += +a;
// 	}

// 	return sum;
// }

// console.log(sumInput());

// //alternative solution

// function sumInput() {
// 	let numbers = [];

// 	while (true) {
// 		let value = prompt('input number', 0);

// 		// stop input?
// 		if (value === '' || value === null || !isFinite(value)) break;

// 		numbers.push(+value);
// 	}

// 	let sum = 0;
// 	for (let number of numbers) {
// 		sum += number;
// 	}
// 	return sum;
// }

// alert(sumInput());

// // 2) find the minimum element of an array:

// arr = [-11, -2, 3, 4, -29, -30, 6];

// function findMinElement(array) {
// 	let minEl = array[0];

// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] < minEl) minEl = array[i];
// 	}

// 	return minEl;
// }

// console.log(findMinElement(arr));

// // 3) find the index of the maximum element in the array.

// let myArr = [1, 34, 1212, -12, 3123, 412, 551];

// function getArrMaxElementIndex(arr) {
// 	let maxEl = arr[0];
// 	let maxElIndex = [0];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > maxEl) {
// 			maxEl = arr[i];
// 			maxElIndex = i;
// 		}
// 	}

// 	return maxElIndex;
// }

// //shorter in writing but performed 2 times more

// // function getArrMaxElementIndex(arr) {
// // 	return arr.indexOf(Math.max.apply(null, arr));
// // }

// console.log(getArrMaxElementIndex(myArr));

// // 4) there are arrays N10 and M10 find the maximum difference between elements with the same indexes and return this difference.
// let arrOne = [12, 15, 22, 24, 55, 123, 23];
// let arrTwo = [12, 15, 22, 24, 55, 113, 23];

// function findMaximumDifference(arrOne, arrTwo) {
// 	let maxValue = 0;

// 	for (let i = 0; i < arrOne.length; i++) {
// 		if (Math.abs(arrOne[i] - arrTwo[i]) > Math.abs(maxValue)) maxValue = arrOne[i] - arrTwo[i];
// 	}

// 	return maxValue === 0 ? 'მასივები იდენტურია' : maxValue;
// }

// console.log(findMaximumDifference(arrOne, arrTwo));

// // 5) Determines how many elements are between two given array elements, the value in the array must not be repeated.

// let arr1 = [12, 15, 22, 24, 55, 123, 23, 12];

// function getNumberElBetween(arr, elOne, elTwo) {
// 	let elOneIndex;
// 	let elTwoIndex;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === elOne) elOneIndex = i;
// 		else if (arr[i] === elTwo) elTwoIndex = i;
// 	}

// 	return Math.abs(elOneIndex - elTwoIndex) - 1;
// }

// console.log(getNumberElBetween(arr1, 12, 123));

// // 6) იპოვის  მასივის  იმ  ელემენტების  ჯამს,  რომლებიც  მოთავსებულია  ორ  მოცემულ
// // ელემენტს შორის.

// let arr2 = [12, 15, 22, 24, 55, 123, 23];

// function getNumberElBetween(arr, elOne, elTwo) {
// 	let flag = false;
// 	let sumElements = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === elOne || arr[i] === elTwo) {
// 			flag = !flag;
// 			continue;
// 		}
// 		if (flag) sumElements += arr[i];
// 	}

// 	return sumElements;
// }

// console.log(getNumberElBetween(arr2, 12, 123));

// // 7) მასივის დადებით ელემენტებს გადაწერს მეორე მასივში.

// let arr3 = [-12, -15, 22, 24, -55, -123, 23];

// function getPositivElementsArr(arr) {
// 	return arr.filter(el => el > 0);
// }

// console.log(getPositivElementsArr(arr3));

// // 8) Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// // That is: removes all dashes, each word after dash becomes uppercased.

// //solution - 1
// function camelize(str) {
// 	let pos = 0;
// 	let newStr = str;
// 	let foundPos = 0;

// 	while (true) {
// 		foundPos = newStr.indexOf('-', pos);

// 		if (foundPos === -1) break;

// 		newStr = newStr.slice(0, foundPos) + newStr[foundPos + 1].toUpperCase() + newStr.slice(foundPos + 2);
// 		pos = foundPos + 1;
// 	}

// 	return newStr;
// }

// console.log(camelize('list-style-image'));

// //solution - 2
// function camelize(str) {
// 	let tempArr = str.split('-');

// 	for (let [i, el] of tempArr.entries()) {
// 		if (i !== 0) tempArr[i] = el.slice(0, 1).toUpperCase() + el.slice(1);
// 	}

// 	return tempArr.join('');
// }

// console.log(camelize('list-style-image'));

// //solution - 3
// function camelize(str) {
// 	return str
// 		.split('-')
// 		.map((el, index) => (index !== 0 ? el.slice(0, 1).toUpperCase() + el.slice(1) : el))
// 		.join('');
// }

// console.log(camelize('list-style-image'));

// // 9) Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// // The function should not modify the array. It should return the new array.

// let arr4 = [1, 3, 2, 3, 5, 6, 7, 8, 9, 11];

// function filterRange(arr, start, end) {
// 	return arr.filter(el => el >= start && el <= end);
// }

// console.log(filterRange(arr4, 2, 5));

// // 10) Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// // The function should only modify the array. It should not return anything.

// let arr5 = [1, 3, 4, 5, 2, 7, 6, 9, 8];

// function filterRangeInPlace(arr, start, end) {
// 	for (let [i, el] of arr.entries()) {
// 		if (el < start || el > end) {
// 			arr.splice(i, 1);
// 			i--;
// 		}
// 	}
// }

// filterRangeInPlace(arr5, 3, 6);

// console.log(arr5);

// // 11) Sort in decreasing order

// let arr6 = [1, 3, 4, 5, 2, 7, -5, 6, 9, 8];

// function sortRevers(arr) {
// 	arr.sort((a, b) => b - a);
// }

// sortRevers(arr6);
// console.log(arr6);

// // 12) We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// // Create a function copySorted(arr) that returns such a copy.

// let arr7 = ['HTML', 'JavaScript', 'CSS'];

// function copySorted(arr) {
// 	return arr.concat().sort();
// }

// console.log(arr7);
// console.log(copySorted(arr7));

// // 13) You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// // let vasya = { name: 'John', age: 25 };
// // let petya = { name: 'Pete', age: 30 };
// // let masha = { name: 'Mary', age: 28 };

// // let users = [vasya, petya, masha];

// // let names = users.map(el => el.name);

// // console.log(names);

// // 14) You have an array of user objects, each one has name, surname and id.
// // Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// //solution-1
// // let vasya = { name: 'John', surname: 'vinmeshvili', id: 1 };
// // let petya = { name: 'Pete', surname: 'rameshvili', id: 2 };
// // let masha = { name: 'Mary', surname: 'sadmeshvili', id: 3 };

// // let users = [vasya, petya, masha];

// // let usersMapped = users.map(el => {
// // 	let newObj = {};
// // 	newObj['fullName'] = `${el['name']} ${el['surname']}`;
// // 	newObj['id'] = el['id'];

// // 	return newObj;
// // });

// // console.log(usersMapped);

// //solution-2
// let vasya = { name: 'John', surname: 'vinmeshvili', id: 1 };
// let petya = { name: 'Pete', surname: 'rameshvili', id: 2 };
// let masha = { name: 'Mary', surname: 'sadmeshvili', id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map(el => ({
// 	fullName: `${el.name} ${el.surname}`,
// 	id: el.id,
// }));

// console.log(usersMapped);

// // 15 ) Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// function sortByAge(arr) {
// 	arr.sort((a, b) => a.age - b.age);
// }

// let vasya2 = { name: 'John', age: 25 };
// let petya2 = { name: 'Pete', age: 30 };
// let masha2 = { name: 'Mary', age: 28 };

// let arr8 = [vasya2, petya2, masha2];

// sortByAge(arr8);

// console.log(arr8);

// // 16) Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// // Multiple runs of shuffle may lead to different orders of elements. For instance:

// //solution-1
// let arr9 = [1, 2, 3];

// function shuffle(arr) {
// 	let randomPos;
// 	let randomArr = [];

// 	while (true) {
// 		if (randomArr.length === 3) break;

// 		randomPos = Math.floor(Math.random() * arr.length);
// 		if (randomArr.includes(arr[randomPos])) continue;
// 		else randomArr.push(arr[randomPos]);
// 	}

// 	return randomArr;
// }
// //check

// let s123 = 0,
// 	s132 = 0,
// 	s213 = 0,
// 	s231 = 0,
// 	s321 = 0,
// 	s312 = 0;
// let resultsArr = [];

// for (let i = 0; i < 10000; i++) {
// 	temp = shuffle(arr9).join('');

// 	if (temp == '123') s123++;
// 	if (temp == '132') s132++;
// 	if (temp == '213') s213++;
// 	if (temp == '231') s231++;
// 	if (temp == '321') s321++;
// 	if (temp == '312') s312++;
// }

// console.log(s123);
// console.log(s132);
// console.log(s213);
// console.log(s231);
// console.log(s321);
// console.log(s312);

// //solution-2

// // function shuffle(array) {
// // 	for (let i = array.length - 1; i > 0; i--) {
// // 		let j = Math.floor(Math.random() * (i + 1)); // ndom index from 0 to i

// // swap elements array[i] and array[j]
// // we use "destructuring assignment" syntax to achieve that
// // you'll find more details about that syntax in later chapters
// // same can be written as:
// // let t = array[i]; array[i] = array[j]; array[j] = t
// // 		[array[i], array[j]] = [array[j], array[i]];
// // 	}
// // }

// // // counts of appearances for all possible permutations
// // let count = {
// // 	123: 0,
// // 	132: 0,
// // 	213: 0,
// // 	231: 0,
// // 	321: 0,
// // 	312: 0,
// // };

// // for (let i = 0; i < 1000000; i++) {
// // 	let array = [1, 2, 3];
// // 	shuffle(array);
// // 	count[array.join('')]++;
// // }

// // // show counts of all possible permutations
// // for (let key in count) {
// // 	alert(`${key}: ${count[key]}`);
// // }

// // 17) Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// // The formula for the average is (age1 + age2 + ... + ageN) / N.

// let vasya3 = { name: 'John', age: 25 };
// let petya3 = { name: 'Pete', age: 30 };
// let masha3 = { name: 'Mary', age: 29 };

// let arr11 = [vasya3, petya3, masha3];

// function getAverageAge(arr) {
// 	let avgAge = 0;

// 	for (const el of arr) {
// 		avgAge += el.age;
// 	}

// 	return avgAge / arr.length;
// }

// console.log(getAverageAge(arr11));

// // 18) Let arr be an array.Create a function unique(arr) that should return an array with unique items of arr.

// let strings = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

// function unique(arr) {
// 	let uniqueElemsArr = [];

// 	for (const el of arr) {
// 		if (!uniqueElemsArr.includes(el)) uniqueElemsArr.push(el);
// 	}

// 	return uniqueElemsArr;
// }

// console.log(unique(strings)); // Krishna, Hare, :-O

// // 19) Even-indexed elements of the array will be copied into the second array, and even-indexed elements will be copied into the second array And the elements - in the third array.

// let arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// function sortingByArrs(arr) {
// 	let evenNum = [];
// 	let oddNum = [];

// 	for (const el of arr) {
// 		if (el % 2 == 0) evenNum.push(el);
// 		else oddNum.push(el);
// 	}

// 	return { evenNum, oddNum };
// }

// console.log(sortingByArrs(arr12));

// // 20) მოახდენს ზრდადობის მიხედვით დალაგებული ორი მასივის შერწყმას და შექმნის ახალ
// // ზრდადობის მიხედვით დალაგებულ მესამე მასივს.

// let arr13 = [1, 5, 7, 4, 8, 9];
// let arr14 = [11, 15, 14, 13, 12, 16, 17];

// function concatAndSortArrs(arrOne, arrTwo) {
// 	return arr13.concat(arr14).sort((a, b) => a - b);
// }

// console.log(concatAndSortArrs(arr13, arr14));

// // 21) მასივის უარყოფით ელემენტებს შეცვლის 0-ებით

// let arr15 = [1, -2, 0, 3, -5, 21];

// function changeNegativNums(arr) {
// 	return arr.map(el => (el > 0 ? el : 0));
// }

// console.log(changeNegativNums(arr15));

// // 22) მასივის იმ ელემენტებს, რომლებიც 5-ზე გაყოფისას იძლევიან 1-დან 4-ის ტოლ ნაშთს,
// // გადაწერს მეორე მასივში.

// let arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// function sortAndConcat(arr) {
// 	return arr.filter(el => el % 5 >= 1 && el % 5 <= 4);
// }

// console.log(sortAndConcat(arr16));

// 23) მასივის ელემენტებს ციკლურად დაძრავს მარჯვნივ n ელემენტით.

// let arr17 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// function moveArrElems(arr, n) {
// 	for (let i = 0; i < n; i++) {
// 		arr.unshift('');
// 	}
// }

// moveArrElems(arr17, 5);
// console.log(arr17);

//solution 2

// function moveArrElems(arr, n) {
// 	let newArr = [];
// 	for (let i = 0; i < n; i++) {
// 		newArr.push('');
// 	}

// 	return newArr.concat(arr);
// }

// console.log(moveArrElems(arr17, 5));

//solution 3

// function moveArrElems(arr, n) {
// 	return new Array(n).concat(arr);
// }

// console.log(moveArrElems(arr17, 5));

// 24) მასივში ადგილებს შეუცვლის კენტი და ლუწი ინდექსის მქონე ელემენტებს.

let arr18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function sortArr(arr) {
	let newArr = [];
	let flag = false;

	for (let i = 0; i < arr.length; i++) {
		flag = !flag;
		flag ? newArr.push(arr[i + 1]) : newArr.push(arr[i - 1]);
	}

	return newArr;
}
console.log(sortArr(arr18));
