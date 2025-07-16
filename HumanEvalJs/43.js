//// BEGIN - PROMPT
/**
 * pairsSumToZero takes an array of integers as an input.
 * It returns true if there are two distinct elements in the array that
 * sum to zero, and false otherwise.
 *
 * @param {number[]} arr
 * @returns {boolean}
 *
 * @example
 * pairsSumToZero([1, 3, 5, 0]); // false
 * pairsSumToZero([1, 3, -2, 1]); // false
 * pairsSumToZero([1, 2, 3, 7]); // false
 * pairsSumToZero([2, 4, -5, 3, 5, 7]); // true
 * pairsSumToZero([1]); // false
 */
function pairsSumToZero(arr) {
//// BEGIN - CANONICAL SOLUTION
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    assert.strictEqual(candidate([1, 3, 5, 0]), false);
    assert.strictEqual(candidate([1, 3, -2, 1]), false);
    assert.strictEqual(candidate([1, 2, 3, 7]), false);
    assert.strictEqual(candidate([2, 4, -5, 3, 5, 7]), true);
    assert.strictEqual(candidate([1]), false);

    assert.strictEqual(candidate([-3, 9, -1, 3, 2, 30]), true);
    assert.strictEqual(candidate([-3, 9, -1, 3, 2, 31]), true);
    assert.strictEqual(candidate([-3, 9, -1, 4, 2, 30]), false);
    assert.strictEqual(candidate([-3, 9, -1, 4, 2, 31]), false);
}
//// BEGIN - CHECK
check(pairsSumToZero)