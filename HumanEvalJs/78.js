//// BEGIN - PROMPT
/**
 * You have been tasked to write a function that receives 
 * a hexadecimal number as a string and counts the number of hexadecimal 
 * digits that are primes (prime number, or a prime, is a natural number 
 * greater than 1 that is not a product of two smaller natural numbers).
 * Hexadecimal digits are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.
 * Prime numbers are 2, 3, 5, 7, 11, 13, 17,...
 * So you have to determine a number of the following digits: 2, 3, 5, 7, 
 * B (=decimal 11), D (=decimal 13).
 * Note: you may assume the input is always correct or empty string, 
 * and symbols A,B,C,D,E,F are always uppercase.
 *
 * Examples:
 * For num = "AB" the output should be 1.
 * For num = "1077E" the output should be 2.
 * For num = "ABED1A33" the output should be 4.
 * For num = "123456789ABCDEF0" the output should be 6.
 * For num = "2020" the output should be 2.
 */
function hexKey(num) {
//// BEGIN - CANONICAL SOLUTION
    const primes = ['2', '3', '5', '7', 'B', 'D'];
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        if (primes.includes(num[i])) {
            total += 1;
        }
    }
    return total;
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
    // Check some simple cases
    assert.strictEqual(candidate("AB"), 1, "First test error: " + candidate("AB"));
    assert.strictEqual(candidate("1077E"), 2, "Second test error: " + candidate("1077E"));
    assert.strictEqual(candidate("ABED1A33"), 4, "Third test error: " + candidate("ABED1A33"));
    assert.strictEqual(candidate("2020"), 2, "Fourth test error: " + candidate("2020"));
    assert.strictEqual(candidate("123456789ABCDEF0"), 6, "Fifth test error: " + candidate("123456789ABCDEF0"));
    assert.strictEqual(candidate("112233445566778899AABBCCDDEEFF00"), 12, "Sixth test error: " + candidate("112233445566778899AABBCCDDEEFF00"));

    // Check some edge cases that are easy to work out by hand.
    assert.strictEqual(candidate([]), 0);
}

//// BEGIN - CHECK
check(hexKey);