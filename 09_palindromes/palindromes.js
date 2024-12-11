const palindromes = function (word) {
    const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedWord = word
        .toLowerCase()
        .split('')
        .filter(c => allowed.includes(c))
        .join('');

    const reversedWord = cleanedWord
        .split('')
        .reverse()
        .join('');

    return cleanedWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
