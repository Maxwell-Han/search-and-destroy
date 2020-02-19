'use strict';

// Complete this algo
const binarySearch = (array, target, left=0, right=array.length - 1) => {
	let mid = Math.floor((left + right) / 2)
	if(left > right) return false
	if(target === array[mid]) return true
	if(target < array[mid]) {
		right = mid - 1
		return binarySearch(array, target, left, right)
	} else if(target > array[mid]) {
		left = mid + 1
		return binarySearch(array, target, left, right)
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
