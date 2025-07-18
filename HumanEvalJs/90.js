//// BEGIN - PROMPT
/**
 * You are given an array of integers.
 * Write a function nextSmallest() that returns the 2nd smallest element of the array.
 * Return null if there is no such element.
*
* nextSmallest([1, 2, 3, 4, 5]) === 2
* nextSmallest([5, 1, 4, 3, 2]) === 2
* nextSmallest([]) === null
* nextSmallest([1, 1]) === null
*/
function nextSmallest(lst) {
//// BEGIN - CANONICAL SOLUTION
    const unique = Array.from(new Set(lst));
    unique.sort((a, b) => a - b);
    return unique.length < 2 ? null : unique[1];
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate([1, 2, 3, 4, 5]), 2);
    assert.strictEqual(candidate([5, 1, 4, 3, 2]), 2);
    assert.strictEqual(candidate([]), null);
    assert.strictEqual(candidate([1, 1]), null);
    assert.strictEqual(candidate([1, 1, 1, 1, 0]), 1);
    assert.strictEqual(candidate([1, 0**0]), null);
    assert.strictEqual(candidate([-35, 34, 12, -45]), -35);

    // Check some edge cases that are easy to work out by hand.
    assert.ok(true);
}

//// BEGIN - CHECK
check(nextSmallest);