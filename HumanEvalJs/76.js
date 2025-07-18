//// BEGIN - PROMPT
/**
 * Your task is to write a function that returns true if a number x is a simple
 * power of n and false in other cases.
 * x is a simple power of n if n**int = x
 * For example:
 * isSimplePower(1, 4) => true
 * isSimplePower(2, 2) => true
 * isSimplePower(8, 2) => true
 * isSimplePower(3, 2) => false
 * isSimplePower(3, 1) => false
 * isSimplePower(5, 3) => false
 */
function isSimplePower(x, n) {
//// BEGIN - CANONICAL SOLUTION
    if (n === 1) {
        return x === 1;
    }
    let power = 1;
    while (power < x) {
        power *= n;
    }
    return power === x;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(16, 2), true, "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate(143214, 16), false, "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate(4, 2), true, "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate(9, 3), true, "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate(16, 4), true, "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate(24, 2), false, "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate(128, 4), false, "This prints if this assert fails 1 (good for debugging!)");
    assert.strictEqual(candidate(12, 6), false, "This prints if this assert fails 1 (good for debugging!)");

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(1, 1), true, "This prints if this assert fails 2 (also good for debugging!)");
    assert.strictEqual(candidate(1, 12), true, "This prints if this assert fails 2 (also good for debugging!)");
}
//// BEGIN - CHECK
check(isSimplePower);