//// BEGIN - PROMPT
/**
 * In this Kata, you have to sort an array of non-negative integers according to
 * number of ones in their binary representation in ascending order.
 * For similar number of ones, sort based on decimal value.
 *
 * It must be implemented like this:
 * sortArray([1, 5, 2, 3, 4]) == [1, 2, 3, 4, 5]
 * sortArray([-2, -3, -4, -5, -6]) == [-6, -5, -4, -3, -2]
 * sortArray([1, 0, 2, 3, 4]) == [0, 1, 2, 3, 4]
 */
function countOnes(x) {
    return x.toString(2).split('').filter(c => c === '1').length;
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function sortArray(arr) {
//// BEGIN - CANONICAL SOLUTION
    return arr
        .slice()
        .sort((a, b) => a - b)
        .sort((a, b) => countOnes(a) - countOnes(b));
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(true, true, "This prints if this assert fails 1 (good for debugging!)");
    assert.deepStrictEqual(candidate([1,5,2,3,4]), [1, 2, 4, 3, 5]);
    assert.deepStrictEqual(candidate([-2,-3,-4,-5,-6]), [-4, -2, -6, -5, -3]);
    assert.deepStrictEqual(candidate([1,0,2,3,4]), [0, 1, 2, 4, 3]);
    assert.deepStrictEqual(candidate([]), []);
    assert.deepStrictEqual(candidate([2,5,77,4,5,3,5,7,2,3,4]), [2, 2, 4, 4, 3, 3, 5, 5, 5, 7, 77]);
    assert.deepStrictEqual(candidate([3,6,44,12,32,5]), [32, 3, 5, 6, 12, 44]);
    assert.deepStrictEqual(candidate([2,4,8,16,32]), [2, 4, 8, 16, 32]);
    assert.deepStrictEqual(candidate([2,4,8,16,32]), [2, 4, 8, 16, 32]);

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(true, true, "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(sortArray)