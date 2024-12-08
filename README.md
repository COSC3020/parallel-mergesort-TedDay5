# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

worst-case complexity: $\Theta(nlogn)$

The usual depth of $logn$ for divide and conquer and a factor $n$ for the merging part.
The span is $\Theta(nlogn)$.
Is asymptotically the same as regular mergeSort but has the advantage of parallelization.
Parallelization does the same amount of work but spread across different threads which decreases the runtime in practice.

Used lecture04-parallel slides.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”
