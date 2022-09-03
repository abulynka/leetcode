/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const numsSameConsecDiff = function(n, k) {
    const results = new Set();
    function getNumber(digits) {
        if (digits.length === n) {
            results.add(parseInt(digits.join('')));
            return;
        }

        const currentNumber = digits[digits.length - 1];

        if (currentNumber + k < 10) {
            getNumber([...digits, currentNumber + k]);
        }

        if (currentNumber - k >= 0) {
            getNumber([...digits, currentNumber - k]);
        }
    }

    for (let i = 1; i < 10; i += 1) {
        getNumber([i]);
    }

    return [...results].sort((a, b) => a - b);
};

console.log(numsSameConsecDiff(3, 7), [181,292,707,818,929]);
console.log(numsSameConsecDiff(2, 1), [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]);
