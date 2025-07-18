//// BEGIN - PROMPT
/**
 * You are given a rectangular grid of wells. Each row represents a single well,
 * and each 1 in a row represents a single unit of water.
 * Each well has a corresponding bucket that can be used to extract water from it,
 * and all buckets have the same capacity.
 * Your task is to use the buckets to empty the wells.
 * Output the number of times you need to lower the buckets.
 *
 * Example 1:
 *     Input:
 *         grid : [[0,0,1,0], [0,1,0,0], [1,1,1,1]]
 *         bucket_capacity : 1
 *     Output: 6
 *
 * Example 2:
 *     Input:
 *         grid : [[0,0,1,1], [0,0,0,0], [1,1,1,1], [0,1,1,1]]
 *         bucket_capacity : 2
 *     Output: 5
 *
 * Example 3:
 *     Input:
 *         grid : [[0,0,0], [0,0,0]]
 *         bucket_capacity : 5
 *     Output: 0
 *
 * Constraints:
 *     * all wells have the same length
 *     * 1 <= grid.length <= 10^2
 *     * 1 <= grid[:,1].length <= 10^2
 *     * grid[i][j] -> 0 | 1
 *     * 1 <= capacity <= 10
 */

/**
 * Calculate the total number of times buckets need to be lowered to empty all wells.
 *
 * @param {number[][]} grid - A rectangular grid where each 1 represents a unit of water.
 * @param {number} capacity - The capacity of each bucket.
 * @returns {number} The number of times buckets are lowered.
 */
function maxFill(grid, capacity) {
//// BEGIN - CANONICAL SOLUTION
    return grid.reduce(
        (total, row) => total + Math.ceil(row.reduce((sum, v) => sum + v, 0) / capacity),
        0
    );
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
    assert.strictEqual(candidate([[0,0,1,0], [0,1,0,0], [1,1,1,1]], 1), 6, "Error");
    assert.strictEqual(candidate([[0,0,1,1], [0,0,0,0], [1,1,1,1], [0,1,1,1]], 2), 5, "Error");
    assert.strictEqual(candidate([[0,0,0], [0,0,0]], 5), 0, "Error");

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(true, true, "This prints if this assert fails 2 (also good for debugging!)");
    assert.strictEqual(candidate([[1,1,1,1], [1,1,1,1]], 2), 4, "Error");
    assert.strictEqual(candidate([[1,1,1,1], [1,1,1,1]], 9), 2, "Error");
}

//// BEGIN - CHECK
check(maxFill);