describe("Largest number", function () {

    it("cho mang [9, 99, 98, 998, 9997] tra ra so lon nhat 999999799898", function () {
        expect(999999799898).toBe(largestNumber([9, 99, 98, 998, 9997]));
    });

    it("cho mang [3, 2, 1] tra ra so lon nhat 321", function () {
        expect(321).toBe(largestNumber([3, 2, 1]));
    });

    it("cho mang [5, 6, 7] tra ra so lon nhat 765", function () {
        expect(765).toBe(largestNumber([5, 6, 7]));
    });

    it("cho mang [30, 34, 33] tra ra so lon nhat 343330", function () {
        expect(343330).toBe(largestNumber([30, 34, 33]));
    });

    it("cho mang [99, 98, 996] tra ra so lon nhat 9999698", function () {
        expect(9999698).toBe(largestNumber([99, 98, 996]));
    });

    it("cho mang [108, 25, 55] tra ra so lon nhat 5525108", function () {
        expect(5525108).toBe(largestNumber([108, 25, 55]));
    });
});

describe("Set matrix zeros", function() {
    it("cho mang [1, 1, 1],[1, 0, 1],[1, 1, 1] 1 diem bang 0 thi chieu ngang va doc deu bang 0", function() {
        expect([[1, 0, 1],[0, 0, 0],[1, 0, 1]]).toEqual(setMatrixZeros([
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ]))
    });
});