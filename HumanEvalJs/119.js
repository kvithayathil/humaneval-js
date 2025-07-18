//// BEGIN - PROMPT
/**
 * You are given a list of two strings, both strings consist of open
 * parentheses '(' or close parentheses ')' only.
 * Your job is to check if it is possible to concatenate the two strings in
 * some order, that the resulting string will be good.
 * A string S is considered to be good if and only if all parentheses in S
 * are balanced. For example: the string '(())()' is good, while the string
 * '())' is not.
 * Return 'Yes' if there's a way to make a good string, and return 'No' otherwise.
 *
 * Examples:
 * matchParens(['()(', ')']) == 'Yes'
 * matchParens([')', ')']) == 'No'
 */
function matchParens(lst) {
//// BEGIN - CANONICAL SOLUTION
    function check(s) {
        let val = 0;
        for (const ch of s) {
            if (ch === '(') {
                val += 1;
            } else {
                val -= 1;
            }
            if (val < 0) {
                return false;
            }
        }
        return val === 0;
    }
    const S1 = lst[0] + lst[1];
    const S2 = lst[1] + lst[0];
    return (check(S1) || check(S2)) ? 'Yes' : 'No';
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate(['()(', ')']), 'Yes');
    assert.strictEqual(candidate([')', ')']), 'No');
    assert.strictEqual(candidate(['(()(())', '())())']), 'No');
    assert.strictEqual(candidate([')())', '(()()(']), 'Yes');
    assert.strictEqual(candidate(['(())))', '(()())((']), 'Yes');
    assert.strictEqual(candidate(['()', '())']), 'No');
    assert.strictEqual(candidate(['(()(', '()))()']), 'Yes');
    assert.strictEqual(candidate(['((((', '((())']), 'No');
    assert.strictEqual(candidate([')(()', '(()(']), 'No');
    assert.strictEqual(candidate([')(', ')(']), 'No');

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate(['(', ')']), 'Yes');
    assert.strictEqual(candidate([')', '(']), 'Yes');
}

//// BEGIN - CHECK
check(matchParens);