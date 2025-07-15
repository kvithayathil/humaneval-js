## BEGIN - PROMPT


def triangle_area(a, h):
    """Given length of a side and high return area for a triangle.
    >>> triangle_area(5, 3)
    7.5
    """

## BEGIN - CANONICAL SOLUTION
    return a * h / 2.0

## BEGIN - TEST


METADATA = {}


def check(candidate):
    assert candidate(5, 3) == 7.5
    assert candidate(2, 2) == 2.0
    assert candidate(10, 8) == 40.0


## BEGIN - CHECK
check(triangle_area)