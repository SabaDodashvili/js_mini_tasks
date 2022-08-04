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
