A _left rotation_ operation on an array shifts each of the array's elements **_1_** unit to the left. For example, if **_2_** left rotations are performed on array **_[1, 2, 3, 4, 5]_** , then the array would become **_[3, 4, 5, 1, 2]_** .

Given an **_a_** array of **_n_** integers and a number, **_d_** , perform **_d_** left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

**Function Description**

Complete the function _rotLeft_ in the editor below. It should return the resulting array of integers.

rotLeft has the following parameter(s):

- An array of integers **_a_**.
- An integer **_d_**, the number of rotations.

**Input Format**

The first line contains two space-separated integers **_n_** and **_d_**, the size of **_a_** and the number of left rotations you must perform.  
The second line contains **_n_** space-separated integers **_a[i]_** .

**Constraints**

- **_1 <= n <= 10^5_**
- **_1 <= d <= n_**
- **_1 <= a[i]<= 10^5_**

**Output Format**

Print a single line of **_n_** space-separated integers denoting the final state of the array after performing **_d_** left rotations.

**Sample Input**

```
5 4
1 2 3 4 5

```

**Sample Output**

```
5 1 2 3 4

```

**Explanation**

When we perform **_d = 4_** left rotations, the array undergoes the following sequence of changes:

> **_[1, 2, 3, 4, 5] -> [2, 3, 4, 5, 1] -> [3, 4, 5, 1, 2] -> [4, 5, 1, 2, 3] -> [5, 1, 2, 3, 4]_**
