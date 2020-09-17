
describe("pow", function () {
    describe("raises x to power 3", function () {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });
});

describe("factorial", function () {
    describe("returns factorial of x", function () {

        it(`3 factorial is 6`, function () {
            assert.equal(factorial(3), 6);
        });

        it(`4 factorial is 24`, function () {
            assert.equal(factorial(4), 24);
        });

        it(`5 factorial is 120`, function () {
            assert.equal(factorial(5), 120);
        });

    });
});
