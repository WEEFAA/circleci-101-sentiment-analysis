const { getWord } = require('./../../utils/getWord')

test("getWord should return truthy values", () => {
    let word = getWord("Example word, weef weef weef")
    expect(word).toBeTruthy()

    word = getWord()
    expect(word).not.toBeNull()
    expect(word).not.toBeUndefined()
    
})