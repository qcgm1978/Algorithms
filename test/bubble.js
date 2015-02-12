require(['bower_components/javascript-algorithms-master/src/' +
'sorting/bubblesort'], function () {
    var arr = [2, 5, 1, 0, 4];

    describe("bubbleSort", function () {
        var myBubbleSort
        beforeEach(function (i, n) {
            myBubbleSort = function (arr) {
                $.each(arr, function (i, n) {

                })
            }
        })
        it("contains spec with an expectation", function () {
            expect(bubbleSort(arr)).toEqual([0, 1, 2, 4, 5]);
        });
        it('accept decimal', function () {
            var arr1 = [], p = 0.1
            $.each(arr, function (i, n) {
                arr1[i] = arr[i] + p
                p += 0.1
            })
            expect(arr1 instanceof Array).toBeTruthy()
            expect(bubbleSort(arr1)).toEqual([0.4, 1.3, 2.1, 4.5, 5.2])
        })
        it('callback test', function (event) {
            expect(bubbleSort(arr, function comparator(a, b) {
                return a - b;
            })).toEqual([0, 1, 2, 4, 5])
            expect(bubbleSort(arr, function comparator(a, b) {
                return b - a;
            })).toEqual([5, 4, 2, 1, 0])
        })
        it('bubble algorithm', function (event) {
            function bubbleTest(arr) {
                //$.each(arr, function (i, n) {
                //    $.each(arr.slice(0,i), function (p,q) {
                //        if(q<arr[p+1]){
                //            var temp = arr[p + 1];
                //            arr[p+1]=q
                //            arr[p]= temp
                //        }
                //    })
                //})
                for(var i=0;i<arr.length;i++){
                    for(var p=i;p>=0;p--){
                        if(arr[p]>arr[p-1]){
                            var temp=arr[p];
                            arr[p]=arr[p-1]
                            arr[p-1]=temp
                        }
                    }
                }
                return arr
            }

            expect(bubbleTest instanceof Function).toBeTruthy()
            expect(bubbleTest([1, 2, 3]) instanceof Array).toBeTruthy()
            expect(bubbleTest([1,2,3])).toEqual([3,2,1])
            expect(bubbleTest([1,2,3,6,5])).toEqual([6,5,3,2,1])
        })
    });

});
