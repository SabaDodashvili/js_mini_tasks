// 1)Write the code, one line for each action:

//     Create an empty object user.
//     Add the property name with the value John.
//     Add the property surname with the value Smith.
//     Change the value of the name to Pete.
//     Remove the property name from the object.

let usser = {};

usser['name'] = 'john';
usser['surname'] = 'smith';

usser['name'] = 'pete';

delete usser['name'];

// 2) Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {};

function isEmpty(obj) {
	for (const key in obj) {
		if (key) return false;
	}
	return true;
}

console.log(isEmpty(schedule));

// 3) We have an object storing salaries of our team:
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

let sum = 0;

for (const key in salaries) {
	sum += salaries[key];
}

console.log(sum);

// 4) Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

function multiplyNumeric(obj) {
	for (const key in obj) {
		if (typeof obj[key] == 'number') obj[key] *= 2;
	}
}

multiplyNumeric(menu);

console.log(menu);

// 5) Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

// let calculator = {
// 	numOne: null,
// 	numTwo: null,

// 	read() {
// 		this.numOne = +prompt('შეიყვანეთ რიცხვი');
// 		this.numTwo = +prompt('შეიყვანეთ რიცხვი');
// 	},

// 	sum() {
// 		return this.numOne + this.numTwo;
// 	},

// 	mul() {
// 		return this.numOne * this.numTwo;
// 	},
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// // option-2

// let calculator2 = {
// 	sum() {
// 		return this.a + this.b;
// 	},

// 	mul() {
// 		return this.a * this.b;
// 	},

// 	read() {
// 		this.a = +prompt('a?', 0);
// 		this.b = +prompt('b?', 0);
// 	},
// };

// calculator2.read();
// console.log(calculator2.sum());
// console.log(calculator2.mul());

// 6) There’s a ladder object that allows to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };

// Now, if we need to make several calls in sequence, can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// Modify the code of up, down and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep() {
		alert(this.step);
		return this;
	},
};

ladder.up().up().down().showStep().down().showStep();
