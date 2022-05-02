// 1. Write a JavaScript function to get the first element in the array
const getFirstElement = givenArray => {
	let firstElement;
	// Loop through all the elements in the array
	for (let index = 0; index < givenArray.length; index++) {
		firstElement = givenArray[0];
	}

	return firstElement;
};

const test = getFirstElement([40, 58, 26, 6, 0, 15]);
// console.log(test);

// 2. Write a JavaScript function to get the last element in the array.
const getLastElement = givenArray => {
	let lastElement;
	const lastIndex = givenArray.length - 1;
	//
	for (let index = 0; index < givenArray.length; index++) {
		lastElement = givenArray[lastIndex];
	}

	return lastElement;
};

const test3 = getLastElement([40, 58, 26, 6, 0, 12]);
// console.log(test3);

// 3. Write a JavaScript function to get a givenElement of the array with the index passed as a parameter
const getChosenElement = (givenArray, passedIndex) => {
	let givenElement;
	for (let index = 0; index < givenArray.length; index++) {
		if (index === passedIndex) {
			givenElement = givenArray[passedIndex];
		}
	}

	return givenElement;
};

const test2 = getChosenElement(
	['Albert', 'Jason', 'Monica', 'Diego', 'Angel'],
	2
);
// console.log(test2);

// 4. Write a JavaScript function to get the index of an element in an array where its element matches a value passed as a parameter
const getIndexOfElement = (givenArray, passedValue) => {
	let passedIndex;
	for (let index = 0; index < givenArray.length; index++) {
		// console.log(givenArray[index]);
		if (givenArray[index] === passedValue) {
			passedIndex = index;
		}
	}

	return passedIndex;
};

const test1 = getIndexOfElement([40, 58, 26, 6, 0, 12], 0);
console.log(test1);
