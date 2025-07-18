//// BEGIN - PROMPT
/**
 * You are given two intervals,
 * where each interval is a pair of integers. For example, interval = [start, end] = [1, 2].
 * The given intervals are closed which means that the interval [start, end]
 * includes both start and end.
 * For each given interval, it is assumed that its start is less or equal its end.
 * Your task is to determine whether the length of intersection of these two
 * intervals is a prime number.
 * Example, the intersection of the intervals [1, 3], [2, 4] is [2, 3]
 * whose length is 1, which is not a prime number.
 * If the length of the intersection is a prime number, return "YES",
 * otherwise, return "NO".
 * If the two intervals don't intersect, return "NO".
 *
 * [input/output] samples:
 * intersection([1, 2], [2, 3]) ==> "NO"
 * intersection([-1, 1], [0, 4]) ==> "NO"
 * intersection([-3, -1], [-5, 5]) ==> "YES"
 */

//// BEGIN - CANONICAL SOLUTION
/**
 * Check if a number is prime.
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
    if (num === 1 || num === 0) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Determine if the length of intersection of two intervals is prime.
 * @param {[number, number]} interval1
 * @param {[number, number]} interval2
 * @returns {string} "YES" if prime length, otherwise "NO"
 */
function intersection(interval1, interval2) {
    const l = Math.max(interval1[0], interval2[0]);
    const r = Math.min(interval1[1], interval2[1]);
    const length = r - l;
    if (length > 0 && isPrime(length)) {
        return "YES";
    }
    return "NO";
}

//// BEGIN - TEST
function check(candidate) {
    // Check some simple cases
    if (candidate([1, 2], [2, 3]) !== "NO") throw new Error("Test 1 failed");
    if (candidate([-1, 1], [0, 4]) !== "NO") throw new Error("Test 2 failed");
    if (candidate([-3, -1], [-5, 5]) !== "YES") throw new Error("Test 3 failed");
    if (candidate([-2, 2], [-4, 0]) !== "YES") throw new Error("Test 4 failed");

    // Check some edge cases that are easy to work out by hand.
    if (candidate([-11, 2], [-1, -1]) !== "NO") throw new Error("Test 5 failed");
    if (candidate([1, 2], [3, 5]) !== "NO") throw new Error("Test 6 failed");
    if (candidate([1, 2], [1, 2]) !== "NO") throw new Error("Test 7 failed");
    if (candidate([-2, -2], [-3, -2]) !== "NO") throw new Error("Test 8 failed");
}

//// BEGIN - CHECK
check(intersection);