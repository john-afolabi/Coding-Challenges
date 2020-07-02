def twoStrings(s1, s2):
    char1 = {}
    output = "NO"

    s1 = list(s1)
    s2 = list(s2)

    for i, char in enumerate(s1):
        char1[char] = i

    for char in s2:
        if char in char1:
            output = "YES"
            break

    return output
