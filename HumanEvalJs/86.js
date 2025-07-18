//// BEGIN - PROMPT
/**
 * Write a function that takes a string and returns an ordered version of it.
 * Ordered version of string, is a string where all words (separated by space)
 * are replaced by a new word where all the characters arranged in
 * ascending order based on ascii value.
 * Note: You should keep the order of words and blank spaces in the sentence.
 *
 * For example:
 * antiShuffle('Hi') returns 'Hi'
 * antiShuffle('hello') returns 'ehllo'
 * antiShuffle('Hello World!!!') returns 'Hello !!!Wdlor'
 */
function antiShuffle(s) {
//// BEGIN - CANONICAL SOLUTION
  return s
    .split(' ')
    .map(i => i.split('').sort().join(''))
    .join(' ');
}

//// BEGIN - TEST
const METADATA = {};
const assert = require('assert');

function check(candidate) {
  // Check some simple cases
  assert.strictEqual(candidate('Hi'), 'Hi');
  assert.strictEqual(candidate('hello'), 'ehllo');
  assert.strictEqual(candidate('number'), 'bemnru');
  assert.strictEqual(candidate('abcd'), 'abcd');
  assert.strictEqual(candidate('Hello World!!!'), 'Hello !!!Wdlor');
  assert.strictEqual(candidate(''), '');
  assert.strictEqual(
    candidate('Hi. My name is Mister Robot. How are you?'),
    '.Hi My aemn is Meirst .Rboot How aer ?ouy'
  );
  // Check some edge cases that are easy to work out by hand.
  assert.ok(true);
}

//// BEGIN - CHECK
check(antiShuffle);