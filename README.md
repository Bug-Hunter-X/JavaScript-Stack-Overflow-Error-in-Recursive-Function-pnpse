# JavaScript Stack Overflow Bug

This repository demonstrates a common JavaScript error: a stack overflow caused by improper recursion.  The `foo()` function is recursively defined, but the base case handling is incomplete, leading to infinite recursion for certain even inputs.  The solution provides a corrected version with a complete base case.