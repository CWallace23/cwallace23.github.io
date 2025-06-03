---
layout: page
title: "Functional limit theorems"
---

<h3>Who this project is for:</h3>

Ideally you’ll be a fourth-year student (otherwise, you probably want to look at my <a href="http://cwallace23.github.io/teaching/final-year-projects/assessment-and-feedback">third-year project</a> instead).

You really enjoyed the part of Probability II about modes of convergence of random variables, and you thought “I’d love to spend more time taking this even further.” You had similar feelings about the spaces of functions in Analysis III.

<h3>Overview:</h3>

You’re probably familiar with the Law of Large Numbers, which says that the average of $$n$$ i.i.d random variables converges to the expectation.

Not that sort of large numbers.

You’re probably also familiar with the Central Limit Theorem, which says that the error we make in the “close to” part of the Law of Large Numbers is usually Normally distributed:

In this project, we look at how these two ideas work for functions.

Firstly, if we take $$n$$ steps of a random walk in which each increment has mean $$\mu$$, then (if $$n$$ is large enough) the trajectory eventually will look like a straight line with slope $$\mu$$:

$$1/n X_n(t) \approx \mu t.$$

This is the Law of Large Numbers: the “average increase” over any section of the trajectory is close to the expectation.

On the other hand, if we look at the error around that straight line, we get something that is “Normally distributed”. Once again the right scaling is $$\frac{1}{\sqrt{n}}$$, and the functional counterpart to the Normal distribution is Brownian motion.

If we want to prove any of these claims, we’ll need some serious analysis: we need to define almost sure convergence and convergence in distribution such that they make sense for objects in infinite-dimensional spaces of functions. There’s a lot of measure theory and functional analysis going on in the background.
Plan:

We’ll follow Patrick Billingsley’s book “Convergence of Probability Measures” through the first two chapters, looking at what it means for the distribution of one continuous function to converge to that of another. Hopefully we’ll then move on to answer (some of) the following questions:
<ul>
<li> What happens in higher dimensions? </li>
<li> What about discontinuous trajectories? </li>
<li> What can we say about random walks with different distributions? </li>
<li>How does this relate to the mysterious <a href="https://maths.dur.ac.uk/users/clare.wallace/MF/Chapter6.html">last line of the Michaelmas Math Finance lecture notes</a>? </li>
</ul>

<h3>Prerequisites:</h3>

For this project, you’ll need to have taken Probability II and Analysis III. Stochastic Processes is also probably helpful.

<h3>Resources:</h3>

There are two main textbooks I plan to use.

For a speedrun version of the content, “Weak Convergence of Measures” (Billingsley, 1971) has all the greatest hits.

If you prefer a (slightly) gentler treatment, “Convergence of Probability Measures” (Billingsley, 1991) fills in a few more of the details.
