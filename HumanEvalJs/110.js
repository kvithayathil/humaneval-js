//// BEGIN - PROMPT
/**
 * In this problem, you will implement a function that takes two lists of numbers,
 * and determines whether it is possible to perform an exchange of elements
 * between them to make lst1 a list of only even numbers.
 * There is no limit on the number of exchanged elements between lst1 and lst2.
 * If it is possible to exchange elements between the lst1 and lst2 to make
 * all the elements of lst1 to be even, return "YES".
 * Otherwise, return "NO".
 * For example:
 * exchange([1, 2, 3, 4], [1, 2, 3, 4]) => "YES"
 * exchange([1, 2, 3, 4], [1, 5, 3, 4]) => "NO"
 * It is assumed that the input lists will be non-empty.
 * @param {number[]} lst1
 * @param {number[]} lst2
 * @returns {string} "YES" if possible else "NO"
 */

function exchange(lst1, lst2) {
//// BEGIN - CANONICAL SOLUTION
    let odd = 0;
    let even = 0;
    for (const i of lst1) {
        if (i % 2 === 1) {
            odd++;
        }
    }
    for (const i of lst2) {
        if (i % 2 === 0) {
            even++;
        }
    }
    if (even >= odd) {
        return "YES";
    }
    return "NO";
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate([1, 2, 3, 4], [1, 2, 3, 4]), "YES");
    assert.strictEqual(candidate([1, 2, 3, 4], [1, 5, 3, 4]), "NO");
    assert.strictEqual(candidate([1, 2, 3, 4], [2, 1, 4, 3]), "YES");
    assert.strictEqual(candidate([5, 7, 3], [2, 6, 4]), "YES");
    assert.strictEqual(candidate([5, 7, 3], [2, 6, 3]), "NO");
    assert.strictEqual(candidate([3, 2, 6, 1, 8, 9], [3, 5, 5, 1, 1, 1]), "NO");

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate([100, 200], [200, 200]), "YES");
}

//// BEGIN - CHECK
check(exchange);