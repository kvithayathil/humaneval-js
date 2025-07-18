//// BEGIN - PROMPT
/**
 * Task
 * We are given two strings s and c, you have to delete all the characters in s that are equal to any character in c
 * then check if the result string is palindrome.
 * A string is called palindrome if it reads the same backward as forward.
 * You should return a tuple containing the result string and True/False for the check.
 * Example
 * For s = "abcde", c = "ae", the result should be ('bcd', False)
 * For s = "abcdef", c = "b"  the result should be ('acdef', False)
 * For s = "abcdedcba", c = "ab", the result should be ('cdedc', True)
 *
 * @param {string} s
 * @param {string} c
 * @returns {[string, boolean]}
 */
function reverseDelete(s, c) {
  //// BEGIN - CANONICAL SOLUTION
  const filtered = s.split('').filter(char => !c.includes(char)).join('');
  const isPal = filtered === filtered.split('').reverse().join('');
  return [filtered, isPal];
}

//// BEGIN - TEST
const METADATA = {
    author: 'jt',
    dataset: 'test'
};

const assert = require('assert');

function check(candidate) {
  assert.deepStrictEqual(candidate("abcde", "ae"), ['bcd', false]);
  assert.deepStrictEqual(candidate("abcdef", "b"), ['acdef', false]);
  assert.deepStrictEqual(candidate("abcdedcba", "ab"), ['cdedc', true]);
  assert.deepStrictEqual(candidate("dwik", "w"), ['dik', false]);
  assert.deepStrictEqual(candidate("a", "a"), ['', true]);
  assert.deepStrictEqual(candidate("abcdedcba", ""), ['abcdedcba', true]);
  assert.deepStrictEqual(candidate("abcdedcba", "v"), ['abcdedcba', true]);
  assert.deepStrictEqual(candidate("vabba", "v"), ['abba', true]);
  assert.deepStrictEqual(candidate("mamma", "mia"), ['', true]);
}

//// BEGIN - CHECK
check(reverseDelete);