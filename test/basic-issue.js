describe("bind method", function () {
    it('test setup and teardown', function (i, n) {
        expect(beforeEach instanceof Function).toBeTruthy()
        expect(afterEach instanceof Function).toBeTruthy()
    })
    it("contains spec with an expectation", function () {
        x = 9;
        var module = {
            x: 81,
            getX: function () {
                return this.x;
            }
        };

        expect(module.getX()).toEqual(81)
        var getX = module.getX;
        expect(getX()).toEqual(9)
// create a new function with 'this' bound to module
        var boundGetX = getX.bind(module);
        //boundGetX(); // 81
        expect(boundGetX()).toEqual(81);
    });
    it('test bind arguments invoke', function (event) {
        function list() {
            //expect(arguments).
            return Array.prototype.slice.call(arguments);
        }

        var list1 = list(1, 2, 3); // [1, 2, 3]
        //expect(list1).toEqual()
//  Create a function with a preset leading argument
        var leadingZeroList = list.bind(undefined, 37);

        var list2 = leadingZeroList(); // [37]
        var list3 = leadingZeroList(1, 2, 3); // [37, 1, 2, 3]
    })
});
