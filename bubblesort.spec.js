describe('Bubble Sort', function() {

    beforeEach(function() {
        var swapCounter = 0;
        var compCounter = 0;
    })

    it('handles an empty array', function() {
        expect(bubbleSort([])).toEqual([]);
    });
    it('calls swap 0 times', function() {
        spyOn(window, 'swap').and.callThrough();
        var array = [];
        bubbleSort(array);
        expect(swap.calls.count()).toEqual(0);
    });
    it('calls compare 0 times', function() {
        spyOn(window, 'compare').and.callThrough();
        var array = [];
        bubbleSort(array);
        expect(compare.calls.count()).toEqual(0);
    });
    it('handles a populated array', function() {
        expect(bubbleSort([3, 2, 6])).toEqual([2, 3, 6])
    })
    it('calls swap one time', function() {
        spyOn(window, 'swap').and.callThrough();
        var array = [3, 2, 6];
        bubbleSort(array);
        expect(swap.calls.count()).toEqual(1);
    });
    it('calls compare one time', function() {
        spyOn(window, 'compare').and.callThrough();
        var array = [3, 2, 6];
        bubbleSort(array);
        expect(compare.calls.count()).toEqual(3);
    });
    it('handles a populated array', function() {
        expect(bubbleSort([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 89])).toEqual([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 89])
    })
    it('calls swap one time', function() {
        spyOn(window, 'swap').and.callThrough();
        var array = [5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 89];
        bubbleSort(array);
        expect(swap.calls.count()).toEqual(16);
    });
    it('calls compare one time', function() {
        spyOn(window, 'compare').and.callThrough();
        var array = [5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 89];
        bubbleSort(array);
        expect(compare.calls.count()).toEqual(66);
    });



});
