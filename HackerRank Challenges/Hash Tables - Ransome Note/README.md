Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are _case-sensitive_ and he _must_ use only whole words available in the magazine. He _cannot_ use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print `Yes` if he can replicate his ransom note _exactly_ using whole words from the magazine; otherwise, print `No`.

For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is **_No_** .

**Function Description**

Complete the _checkMagazine_ function in the editor below. It must print **_Yes_** if the note can be formed using the magazine, or **_No_** .

checkMagazine has the following parameters:

- _magazine_: an array of strings, each a word in the magazine
- _note_: an array of strings, each a word in the ransom note

**Input Format**

The first line contains two space-separated integers, **_m_** and **_n_** , the numbers of words in **_magazine_** the and the **_note_** ..  
The second line contains **_m_** space-separated strings, each **_magazine[i]_** .  
The third line contains **_n_** space-separated strings, each **_note[i]_** .

**Constraints**

- **_1 <= m, n <= 30000_**

- .**_1 <= |magazine[i]|, |note[i]|<= 5_**
- Each word consists of English alphabetic letters (i.e., **_a_** to **_z_** and **_A_** to **_Z_** ).

**Output Format**

Print `Yes` if he can use the magazine to create an untraceable replica of his ransom note. Otherwise, print `No`.

**Sample Input 0**

6 4
give me one grand today night
give one grand today

**Sample Output 0**

Yes

**Sample Input 1**

6 5
two times three is not four
two times two is four

**Sample Output 1**

No

**Explanation 1**

'two' only occurs once in the magazine.

**Sample Input 2**

7 4
ive got a lovely bunch of coconuts
ive got some coconuts

**Sample Output 2**

No

**Explanation 2**

Harold's magazine is missing the word **_some_** .
