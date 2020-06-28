def checkMagazine(magazine, note):
    mag_words = dict()
    output = "Yes"
    for word in magazine:
        if word in mag_words:
            mag_words[word] += 1
        else:
            mag_words[word] = 1

    note_words = dict()
    for word in note:
        if word in note_words:
            note_words[word] += 1
        else:
            note_words[word] = 1

    # mag_words = collections.Counter(magazine)
    # note_words = collections.Counter(note)

    for word in note_words.keys():
        if word in mag_words:
            if note_words[word] > mag_words[word]:
                output = "No"
        else:
            output = "No"

    print(output)