function merge(arr1, arr2) {
    var finalArr = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            finalArr.push(arr1[0]);
            arr1.shift();
        } else {
            finalArr.push(arr2[0]);
            arr2.shift();
        }

    }
    console.log(finalArr);
    return finalArr.concat(arr1, arr2);

}



function mergeSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        var half = Math.floor(array.length / 2);
        var arr1 = array.slice(0, half);
        var arr2 = array.slice(half);
        return merge(mergeSort(arr1), mergeSort(arr2));
    }
}
