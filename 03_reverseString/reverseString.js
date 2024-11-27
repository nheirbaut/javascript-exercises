const reverseString = function(word) {
    let reversedString = '';

    for (let i = word.length; i > 0; i--) {
        reversedString += word[i -  1];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
