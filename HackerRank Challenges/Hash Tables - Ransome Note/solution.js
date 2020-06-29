function checkMagazine(magazine, note) {
    let output = "Yes"

    const mag_words = {}
    magazine.forEach(word => {
        if(word in mag_words){
            mag_words[word] += 1
        } else {
            mag_words[word] = 1
        }
    });

    const note_words = {}
    note.forEach(word => {
        if(word in note_words){
            note_words[word] += 1
        } else {
            note_words[word] = 1
        }
    });

    Object.keys(note_words).forEach(word => {
        if(word in mag_words){
            if(note_words[word] > mag_words[word]){
                output = "No"
            }
        } else {
            output = "No"
        }
    })

    console.log(output)
}