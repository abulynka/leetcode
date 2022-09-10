import { check } from '../lib/lib.js';

/**
 * @param {number[][]} properties
 * @return {number}
 */
const numberOfWeakCharacters = function(properties) {
    let result = 0;

    properties
        .sort((a, b) => b[0] - a[0] || a[1] - b[1])
        .reduce((previousValue, currentValue) => {
            if (currentValue[1] < previousValue) {
                result += 1;
            } else {
                previousValue = currentValue[1];
            }
            return previousValue;
        }, 0);

    return result;
};

check(numberOfWeakCharacters([[5,5],[6,3],[3,6]]), 0);
check(numberOfWeakCharacters([[2,2],[3,3]]), 1);
check(numberOfWeakCharacters([[1,5],[10,4],[4,3]]), 1);
