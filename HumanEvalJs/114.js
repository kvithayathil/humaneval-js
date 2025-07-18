//// BEGIN - PROMPT
/**
 * Given an array of integers nums, find the minimum sum of any non-empty sub-array
 * of nums.
 * Example:
 *   minSubArraySum([2, 3, 4, 1, 2, 4]) == 1
 *   minSubArraySum([-1, -2, -3]) == -6
 */

/**
 * Finds the minimum subarray sum.
 * @param {number[]} nums - Array of integers.
 * @returns {number} The minimum subarray sum.
 */
function minSubArraySum(nums) {
//// BEGIN - CANONICAL SOLUTION
    let max_sum = 0;
    let s = 0;
    for (const num of nums) {
        s += -num;
        if (s < 0) {
            s = 0;
        }
        max_sum = Math.max(s, max_sum);
    }
    if (max_sum === 0) {
        max_sum = Math.max(...nums.map(i => -i));
    }
    return -max_sum;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate([2, 3, 4, 1, 2, 4]), 1, "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate([-1, -2, -3]), -6);
    assert.strictEqual(candidate([-1, -2, -3, 2, -10]), -14);
    assert.strictEqual(candidate([-9999999999999999]), -9999999999999999);
    assert.strictEqual(candidate([0, 10, 20, 1000000]), 0);
    assert.strictEqual(candidate([-1, -2, -3, 10, -5]), -6);
    assert.strictEqual(candidate([100, -1, -2, -3, 10, -5]), -6);
    assert.strictEqual(candidate([10, 11, 13, 8, 3, 4]), 3);
    assert.strictEqual(candidate([100, -33, 32, -1, 0, -2]), -33);

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate([-10]), -10, "This prints if this assert fails 2 (also good for debugging!)");
    assert.strictEqual(candidate([7]), 7);
    assert.strictEqual(candidate([1, -1]), -1);
}

//// BEGIN - CHECK
check(minSubArraySum);