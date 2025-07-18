//// BEGIN - PROMPT
/**
 * Given an array of strings, where each string consists of only digits, return an array.
 * Each element i of the output should be "the number of odd elements in the
 * string i of the input." where all the i's should be replaced by the number
 * of odd digits in the i'th string of the input.
 *
 * @param {string[]} lst
 * @returns {string[]}
 *
 * @example
 * oddCount(['1234567']);
 * // ["the number of odd elements 4n the str4ng 4 of the 4nput."]
 * @example
 * oddCount(['3', '11111111']);
 * // ["the number of odd elements 1n the str1ng 1 of the 1nput.",
 * //  "the number of odd elements 8n the str8ng 8 of the 8nput."]
 */
function oddCount(lst) {
//// BEGIN - CANONICAL SOLUTION
    const res = [];
    for (const arr of lst) {
        let n = 0;
        for (const d of arr) {
            if (parseInt(d, 10) % 2 === 1) {
                n++;
            }
        }
        res.push("the number of odd elements " + n + "n the str" + n + "ng " + n + " of the " + n + "nput.");
    }
    return res;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate(['1234567']), ["the number of odd elements 4n the str4ng 4 of the 4nput."], "Test 1");
    assert.deepStrictEqual(candidate(['3', '11111111']), ["the number of odd elements 1n the str1ng 1 of the 1nput.", "the number of odd elements 8n the str8ng 8 of the 8nput."], "Test 2");
    assert.deepStrictEqual(candidate(['271', '137', '314']), [
        'the number of odd elements 2n the str2ng 2 of the 2nput.',
        'the number of odd elements 3n the str3ng 3 of the 3nput.',
        'the number of odd elements 2n the str2ng 2 of the 2nput.'
    ], "Test 3");

    // Check some edge cases that are easy to work out by hand.
    assert.deepStrictEqual(true, "This prints if this assert fails 2 (also good for debugging!)");
}

//// BEGIN - CHECK
check(oddCount);