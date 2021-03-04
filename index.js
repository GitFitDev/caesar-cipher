// We have to use ASCII Numbers to get char values: http://www.asciitable.com/
//charCodeAt() takes a letter and gives you ascii code
// fromCharCode() takes asciiNum and returns a letter
/**
 * "a".charCodeAt() == 97
 *  String.fromCharCode(97 + 0) == "a"
 *  String.fromCharCode(97 + 1 % 27)== "b"
 */

 /**
  *
  * @param {*} string
  * @param {*} value
  */

let caesarCipher = (string, value) => {
    // split the given array of letters
    // create new array of chars  w/ map
    // use modulo to get next value
    // join together
    return string.split("").map(char => {
        return String.fromCharCode(char.charCodeAt() + value % 27);
    }).join("");
};

module.exports = caesarCipher;