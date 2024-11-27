const sumAll = function(start, end) {
    let sum = 0;

    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }

    if (start > end) {
        const tmp = start;
        start = end;
        end = tmp;
    }

    for (let curr = start; curr <= end; curr++) {
        sum += curr;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
