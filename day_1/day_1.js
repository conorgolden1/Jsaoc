const { error } = require('console');
const filePath = 'day_1/data.txt';

function part1(data) {
    const lines = data.split("\n")
    return lines.map((line) => {
        return getFirstAndLastDigit(line)
    }).reduce((acc, n) => { return acc + n }, 0);
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

function part2(data) {

}

function main() {
    const fs = require('fs');

    fs.readFile(filePath, 'utf-8', (error, fileContent) => {
        if (error) {
            console.error('Error reading the file:', error.message);
            return;
        }
        //Uncomment when finished function
        console.log(fileContent)
        console.log(part1(fileContent))
        //console.log(part2(data))
    });
}

main()

module.exports = {
    part1,
    part2
}
