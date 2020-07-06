It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their _initial_ position in the queue. Initial positions increment by **_1_** from **_1_** at the front of the line to **_n_** at the back.

Any person in the queue can bribe the person _directly in front_ of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe _at most two others_. For example, if **_n = 8_** and **_Person 5_** bribes **_Person 4_** , the queue will look like this: **_1, 2, 3, 5, 4, 6, 7, 8_**.

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

**Function Description**

Complete the function _minimumBribes_ in the editor below. It must print an integer representing the minimum number of bribes necessary, or `Too chaotic` if the line configuration is not possible.

minimumBribes has the following parameter(s):

- _q_: an array of integers

**Input Format**

The first line contains an integer **_t_**, the number of test cases.

Each of the next **_t_** pairs of lines are as follows:

- The first line contains an integer **_t_**, the number of people in the queue
- The second line has **_n_** space-separated integers describing the final state of the queue.

**Constraints**

- **_1 <= t <= 10_**
- **_1 <= n <= 10^5_**

**Subtasks**

For **_60%_** score **_1 <= n <= 10^3_**
For **_100%_** score **_1 <= n <= 10^5_**

**Output Format**

Print an integer denoting the minimum number of bribes needed to get the queue into its final state. Print `Too chaotic` if the state is invalid, i.e. it requires a person to have bribed more than **_2_** people.

**Sample Input**

```
2
5
2 1 5 3 4
5
2 5 1 3 4

```

**Sample Output**

```
3
Too chaotic

```

**Explanation**

**Test Case 1**

The initial state:

![](https://s3.amazonaws.com/hr-challenge-images/494/1451665589-31d436ba19-pic11.png "pic1(1).png")

After person **_5_** moves one position ahead by bribing person **_4_**:

![](https://s3.amazonaws.com/hr-challenge-images/494/1451665679-6504422ed9-pic2.png "pic2.png")

Now person **_4_** moves another position ahead by bribing person **_3_**:

![](https://s3.amazonaws.com/hr-challenge-images/494/1451665818-27bd62bb0d-pic3.png "pic3.png")

And person **_2_** moves one position ahead by bribing person **_1_**:

![](https://s3.amazonaws.com/hr-challenge-images/494/1451666025-02a2395a00-pic5.png "pic5.png")

So the final state is **_2, 1, 5, 3, 4_** after three bribing operations.

**Test Case 2**

No person can bribe more than two people, so its not possible to achieve the input state.
