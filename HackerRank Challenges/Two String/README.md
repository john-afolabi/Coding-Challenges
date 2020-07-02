Given two strings, determine if they share a common substring. A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring **_a_**. The words "be" and "cat" do not share a substring.

**Function Description**

Complete the function _twoStrings_ in the editor below. It should return a string, either `YES` or `NO` based on whether the strings share a common substring.

twoStrings has the following parameter(s):

- _s1, s2_: two strings to analyze .

**Input Format**

The first line contains a single integer **_p_** , the number of test cases.

The following **_p_** pairs of lines are as follows:

- The first line contains string **_s1_**.
- The second line contains string **_s2_**.

**Constraints**

- **_s1_** and **_s2_** consist of characters in the range ascii[a-z].
- **_1 <= p <= 10_**
- **_1 <= |s1|, |s2| <= 10^5_**

**Output Format**

For each pair of strings, return `YES` or `NO`.

**Sample Input**

```
2
hello
world
hi
world

```

**Sample Output**

```
YES
NO

```

**Explanation**

We have - **_p = 2_** pairs to check:

1. **_s1 = "hello"_** , **_s2 = "world"_** . The substrings **_o_** and **_l_** are common to both strings.
2. **_a = "hi"_** , **_b = "world"_** . **_a_** and **_b_** share no common substrings.

Change Theme
