//// BEGIN - PROMPT
/**
 * Given a string representing a space separated lowercase letters, return an object
 * of the letter with the most repetition and containing the corresponding count.
 * If several letters have the same occurrence, return all of them.
 *
 * Example:
 * histogram('a b c') == {a: 1, b: 1, c: 1}
 * histogram('a b b a') == {a: 2, b: 2}
 * histogram('a b c a b') == {a: 2, b: 2}
 * histogram('b b b b a') == {b: 4}
 * histogram('') == {}
 *
 * @param {string} test - space separated lowercase letters
 * @returns {Object.<string, number>} an object mapping the most frequent letters to their counts
 */
function histogram(test) {
//// BEGIN - CANONICAL SOLUTION
    const dict1 = {};
    const list1 = test.split(" ");
    let t = 0;
    for (const i of list1) {
        const count = list1.filter(x => x === i).length;
        if (count > t && i !== '') {
            t = count;
        }
    }
    if (t > 0) {
        for (const i of list1) {
            const count = list1.filter(x => x === i).length;
            if (count === t) {
                dict1[i] = t;
            }
        }
    }
    return dict1;
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

/**
 * Run tests on candidate function.
 * @param {function(string): Object.<string, number>} candidate
 */
function check(candidate) {
    // Check some simple cases
    assert.deepStrictEqual(candidate('a b b a'), {a: 2, b: 2}, "This prints if this assert fails 1 (good for debugging!)");
    assert.deepStrictEqual(candidate('a b c a b'), {a: 2, b: 2}, "This prints if this assert fails 2 (good for debugging!)");
    assert.deepStrictEqual(candidate('a b c d g'), {a: 1, b: 1, c: 1, d: 1, g: 1}, "This prints if this assert fails 3 (good for debugging!)");
    assert.deepStrictEqual(candidate('r t g'), {r: 1, t: 1, g: 1}, "This prints if this assert fails 4 (good for debugging!)");
    assert.deepStrictEqual(candidate('b b b b a'), {b: 4}, "This prints if this assert fails 5 (good for debugging!)");
    assert.deepStrictEqual(candidate('r t g'), {r: 1, t: 1, g: 1}, "This prints if this assert fails 6 (good for debugging!)");
    
    // Check some edge cases that are easy to work out by hand.
    assert.deepStrictEqual(candidate(''), {}, "This prints if this assert fails 7 (also good for debugging!)");
    assert.deepStrictEqual(candidate('a'), {a: 1}, "This prints if this assert fails 8 (also good for debugging!)");
}

//// BEGIN - CHECK
check(histogram);