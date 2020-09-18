
describe("pow", function () {
    describe("raises x to power n (n is integer)", function () {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 2; x <= 4; x++) {
            makeTest(x);
        }

        it(`5 in the power 0 is 1`, function () {
            assert.equal(pow(5, 0), 1);
        });


        it(`2 in the power 1.5 is NaN`, function () {
            assert.equal(Number.isNaN(pow(2, 1.5)), true);
        });

        it(`2 in the power -1 is 0.5`, function () {
            assert.equal(pow(2, -1), 0.5);
        });

        it(`2 in the power -3.5 is NaN`, function () {
            assert.equal(Number.isNaN(pow(2, -3.5)), true);
        });

        it(`0 in the power 15 is 0`, function () {
            assert.equal(pow(0, 15), 0);
        });

        it(`0 in the power -15 is NaN`, function () {
            assert.equal(Number.isNaN(pow(0, -15)), true);
        });

        it(`0 in the power 0 is 1`, function () {
            assert.equal(pow(0, 0), 1);
        });
    });
});

describe("factorial", function () {
    describe("returns factorial of x", function () {

        it(`0 factorial is 1`, function () {
            assert.equal(factorial(0), 1);
        });

        it(`3 factorial is 6`, function () {
            assert.equal(factorial(3), 6);
        });

        it(`4 factorial is 24`, function () {
            assert.equal(factorial(4), 24);
        });

        it(`5 factorial is 120`, function () {
            assert.equal(factorial(5), 120);
        });

        it(`-5 factorial is NaN`, function () {
            assert.equal(Number.isNaN(factorial(-5)), true);
        });

        it(`-3.5 factorial is NaN`, function () {
            assert.equal(Number.isNaN(factorial(-3.5)), true);
        });

        it(`3.5 factorial is NaN`, function () {
            assert.equal(Number.isNaN(factorial(3.5)), true);
        });

    });
});


describe("palindrome", function () {
    describe("returns true if input is palindrome", function () {

        it(`abba is palindrome`, function () {
            assert.equal(palindrome('abba'), true);
        });

        it(`google is not palindrome`, function () {
            assert.equal(palindrome('google'), false);
        });

        it(`11 22 11 is palindrome`, function () {
            assert.equal(palindrome('11 22 11'), true);
        });

        it(`112 is not palindrome`, function () {
            assert.equal(palindrome('112'), false);
        });

        it(`radar is palindrome`, function () {
            assert.equal(palindrome('radar'), true);
        });

    });
});
