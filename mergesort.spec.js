describe('Merge Sort', function() {
    it('is able to merge two sorted arrays into one sorted array', function() {
        var arr = [3, 6];
        mergeSort(arr);
        expect(mergeSort([3, 6])).toEqual([3, 6]);
    });
    it('is able to merge two sorted arrays into one sorted array', function() {
        var arr = [];
        mergeSort(arr);
        expect(mergeSort([])).toEqual([]);
    });
    it('is able to merge two sorted arrays into one sorted array', function() {
        var arr = [3, 6];
        mergeSort(arr);
        expect(mergeSort([3, 6, 7, 2, 8, 3])).toEqual([2, 3, 3, 6, 7, 8]);
    });
});
