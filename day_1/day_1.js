const { error } = require('console');

function part1(data) {
    const lines = data.split("\n")
    return lines.map((line) => {
        return getFirstAndLastDigit(line)
    }).reduce((acc, n) => { return acc + n }, 0);
}

function part2(data) {
    const lines = data.split("\n")
    return lines.map((line) => {
        return getFirstAndLastDigit(replaceIntegers(line))
    }).reduce((acc, n) => { return acc + n }, 0);
}

function replaceIntegers(line) {
    let buildString = ""
    const sNums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for (i in line) {
        if (!isNaN(line[i])) {
            buildString += line[i]
            continue
        }
        for (n in sNums) {
            const length = sNums[n].length
            if (length > (line.length - i)) {
                continue
            }
            const substr = line.substr(i, length)
            if (substr === sNums[n]) {
                buildString += (Number(n) + 1)
                continue
            }
        }

    }
    console.log(line, buildString)
    return buildString
}

function getFirstAndLastDigit(line) {
    let firstDigit = null
    let secondDigit = null

    for (const char of line) {
        if (!isNaN(char)) {
            if (firstDigit === null) {
                firstDigit = char
            } else {
                secondDigit = char
            }
        }
    }

    if (firstDigit === null) {
        return 0
    }
    if (secondDigit === null) {
        return parseInt(`${firstDigit}${firstDigit}`);
    }
    return parseInt(`${firstDigit}${secondDigit}`);
}

module.exports = {
    part1,
    part2
}
