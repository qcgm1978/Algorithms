require(['bower_components/javascript-algorithms-master/src/' +
'sorting/bubblesort'], function () {
    var sort = bubbleSort
    var arr = [2, 5, 1, 0, 4];


    describe("bubbleSort", function () {
        it("contains spec with an expectation", function () {
            expect(sort(arr)).toEqual([0, 1, 2, 4, 5]);
        });
        it('accept decimal', function () {
            var arr1 = [], p = 0.1
            $.each(arr, function (i, n) {
                arr1[i] = arr[i] + p
                p += 0.1
            })
            expect(arr1 instanceof Array).toBeTruthy()
            expect(sort(arr1)).toEqual([0.4, 1.3, 2.1, 4.5, 5.2])
        })
        //it('callback test', function (event) {
        //    expect(sort(arr, function comparator(a, b) {
        //        return a - b;
        //    })).toThrow(function(event){
        //
        //    })
        //})
    });

});
