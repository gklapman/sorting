function bubbleSort(array) {
	//[3, 2, 6]
	var counter = array.length;
	while (counter>1) {
		for (var i =0; i<counter-1; i++) {
			var j = i+1;
			if (compare(i, j, array)) {swap(i, j, array)} 
		}
	counter--;
	}
	return array;
}

function swap(pos1, pos2, arr) {
	var temp = arr[pos1];
	arr[pos1] = arr[pos2]
	arr[pos2] = temp;
	return arr;
}

function compare(ind1, ind2, array) {
	return (array[ind1]>array[ind2]) ?  true :  false
}