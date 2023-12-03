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
    return buildString
}

function getFirstAndLastDigit(line) {
    let firstDigit = null
    let secondDigit = null

    let firstIndex = 0

    while (firstIndex < line.length) {
        if (!isNaN(line[firstIndex])) {
            firstDigit = line[firstIndex]
            break
        }
        firstIndex++
    }

    let secondIndex = line.length

    while (secondIndex > -1) {
        if (!isNaN(line[secondIndex])) {
            secondDigit = line[secondIndex]
            break
        }
        secondIndex--
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
