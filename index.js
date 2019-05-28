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

console.log(bubbleSort(arr))