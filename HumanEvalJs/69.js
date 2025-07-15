//// BEGIN - PROMPT
/**
 * You are given a non-empty list of positive integers. Return the greatest integer that is greater than
 * zero, and has a frequency greater than or equal to the value of the integer itself.
 * The frequency of an integer is the number of times it appears in the list.
 * If no such a value exists, return -1.
 * Examples:
 *   search([4, 1, 2, 2, 3, 1]) == 2
 *   search([1, 2, 2, 3, 3, 3, 4, 4, 4]) == 3
 *   search([5, 5, 4, 4, 4]) == -1
 *
 * @param {number[]} lst
 * @returns {number}
 */
function search(lst) {
//// BEGIN - CANONICAL SOLUTION
    const maxVal = Math.max(...lst);
    const frq = new Array(maxVal + 1).fill(0);
    for (const i of lst) {
        frq[i]++;
    }
    let ans = -1;
    for (let i = 1; i < frq.length; i++) {
        if (frq[i] >= i) {
            ans = i;
        }
    }
    return ans;
}

//// BEGIN - TEST
const assert = require('assert');
function check(candidate) {
    // manually generated tests
    assert.strictEqual(candidate([5, 5, 5, 5, 1]), 1);
    assert.strictEqual(candidate([4, 1, 4, 1, 4, 4]), 4);
    assert.strictEqual(candidate([3, 3]), -1);
    assert.strictEqual(candidate([8, 8, 8, 8, 8, 8, 8, 8]), 8);
    assert.strictEqual(candidate([2, 3, 3, 2, 2]), 2);

    // automatically generated tests
    assert.strictEqual(candidate([2, 7, 8, 8, 4, 8, 7, 3, 9, 6, 5, 10, 4, 3, 6, 7, 1, 7, 4, 10, 8, 1]), 1);
    assert.strictEqual(candidate([3, 2, 8, 2]), 2);
    assert.strictEqual(candidate([6, 7, 1, 8, 8, 10, 5, 8, 5, 3, 10]), 1);
    assert.strictEqual(candidate([8, 8, 3, 6, 5, 6, 4]), -1);
    assert.strictEqual(candidate([6, 9, 6, 7, 1, 4, 7, 1, 8, 8, 9, 8, 10, 10, 8, 4, 10, 4, 10, 1, 2, 9, 5, 7, 9]), 1);
    assert.strictEqual(candidate([1, 9, 10, 1, 3]), 1);
    assert.strictEqual(candidate([6, 9, 7, 5, 8, 7, 5, 3, 7, 5, 10, 10, 3, 6, 10, 2, 8, 6, 5, 4, 9, 5, 3, 10]), 5);
    assert.strictEqual(candidate([1]), 1);
    assert.strictEqual(candidate([8, 8, 10, 6, 4, 3, 5, 8, 2, 4, 2, 8, 4, 6, 10, 4, 2, 1, 10, 2, 1, 1, 5]), 4);
    assert.strictEqual(candidate([2, 10, 4, 8, 2, 10, 5, 1, 2, 9, 5, 5, 6, 3, 8, 6, 4, 10]), 2);
    assert.strictEqual(candidate([1, 6, 10, 1, 6, 9, 10, 8, 6, 8, 7, 3]), 1);
    assert.strictEqual(candidate([9, 2, 4, 1, 5, 1, 5, 2, 5, 7, 7, 7, 3, 10, 1, 5, 4, 2, 8, 4, 1, 9, 10, 7, 10, 2, 8, 10, 9, 4]), 4);
    assert.strictEqual(candidate([2, 6, 4, 2, 8, 7, 5, 6, 4, 10, 4, 6, 3, 7, 8, 8, 3, 1, 4, 2, 2, 10, 7]), 4);
    assert.strictEqual(candidate([9, 8, 6, 10, 2, 6, 10, 2, 7, 8, 10, 3, 8, 2, 6, 2, 3, 1]), 2);
    assert.strictEqual(candidate([5, 5, 3, 9, 5, 6, 3, 2, 8, 5, 6, 10, 10, 6, 8, 4, 10, 7, 7, 10, 8]), -1);
    assert.strictEqual(candidate([10]), -1);
    assert.strictEqual(candidate([9, 7, 7, 2, 4, 7, 2, 10, 9, 7, 5, 7, 2]), 2);
    assert.strictEqual(candidate([5, 4, 10, 2, 1, 1, 10, 3, 6, 1, 8]), 1);
    assert.strictEqual(candidate([7, 9, 9, 9, 3, 4, 1, 5, 9, 1, 2, 1, 1, 10, 7, 5, 6, 7, 6, 7, 7, 6]), 1);
    assert.strictEqual(candidate([3, 10, 10, 9, 2]), -1);
}

//// BEGIN - CHECK
check(search);