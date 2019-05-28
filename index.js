/*
	SORTING
 */

const arr = [3, 2, 123, 76, 44, 56, 88, -66, 24, 11, 12, 4, 32]

// Bubble sort - Runtime complexity worst case is O(n^2)
function bubbleSort(arr) {
	// Implement bubbleSort
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < (arr.length - i - 1); j++) {
			if(arr[j] > arr[j + 1]) {
				const smaller = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = smaller;
			}
		}
	}
	// return sorted array
	return arr;
}
console.log("Bubble Sort: ", bubbleSort(arr))

// Selection sort - Runtime complexity worst case is O(n^2)
function selectionSort(arr) {
	// Implement selectionSort
	for(let i = 0; i < arr.length; i++) {
		let min = i;
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[min]) {
				min = j;
			}
		}

		if(i !== min) {
			let smaller = arr[min];
			arr[min] = arr[i];
			arr[i] = smaller;
		}
	}
	// return sorted array
	return arr;
}
console.log("Selection Sort: ", selectionSort(arr))

// Merge Sort - Runtime complexity worst case is O(n * log(n))

function mergeSort(arr) {
	if(arr.length === 1) return arr;

	const center = Math.floor(arr.length / 2);
	const left = arr.slice(0, center);
	const right = arr.slice(center);

	return merge(mergeSort(left), mergeSort(right));
}
/*
	Merger:
	* Create 'results' array
	* While there are still elements in both arrays
		- If the first element the left half is less than first in right half
			- 'shift' the element the element from left ino a 'result' arr
		- else
			- 'shift' the element from right into 'result' arr
	* Take everything from the array that still has stuff in it and put it in results
 */
function merge(left, right) {
	const results = [];

	while(left.length && right.length) {
		if(left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	return [...results, ...left, ...right];
}
console.log("Merge helper: ", merge([4], [3]))
console.log("Merge Sort: ", mergeSort(arr))