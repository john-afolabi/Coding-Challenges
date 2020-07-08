function twoStrings(s1, s2) {
    const charStore = {}
    let output = "NO"

    const str1 = Array.from(s1)
    const str2 = Array.from(s2)

    for (let [i, char] of str1.entries()) {
        charStore[char] = i
    }

    for (let char of str2) {
        if (char in charStore) {
            output = "YES"
            break
        }
    }


    return output
}
