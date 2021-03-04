const caesarCipher = require("./index");
test("adds a positive number to the character code", () => {
    let expected = "bbb";
    let actual = caesarCipher("aaa", 1)
    expect(actual).toEqual(expected);
});

test("adds a big positive number to the character code", () => {
    let expected = "aaa";
    let actual = caesarCipher("aaa", 27)
    expect(actual).toEqual(expected);
});

test("adds a negative number to the character code", () => {
    let expected = "aaa";
    let actual = caesarCipher("bbb", -1)
    expect(actual).toEqual(expected);
});

test("adds a big negative number to the character code", () => {
    let expected = "aaa";
    let actual = caesarCipher("bbb", -28)
    expect(actual).toEqual(expected);
});

test("adds a big negative number to the uppercase character code", () => {
    let expected = "AAA";
    let actual = caesarCipher("BBB", -28)
    expect(actual).toEqual(expected);
});

test("adds a positive to shift number to the character code", () => {
    let expected = "Cd";
    let actual = caesarCipher("Ab", 2)
    expect(actual).toEqual(expected);
});