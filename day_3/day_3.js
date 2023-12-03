const { error, log } = require('console');



function part1(data) {
    const lines = data.split("\n")
    const rowLength = lines[0].length
    const columnLength = lines.length - 1
    const numbers = lines.map((line) => { return getNumbers(line) })
    const numberCoords = []
    for (i in numbers) {
        if (numbers[i].toString() === [].toString()) {
            continue
        }
        for (number of numbers[i]) {
            const adjCoord = getAdjCoord(number.startIndex, number.endIndex, Number(i), rowLength, columnLength)
            numberCoords.push({'value': number.value,  'adjCoord': adjCoord })
        }
    }
    return numberCoords.reduce((acc, n) => {
        if (hasSymbol(n.adjCoord, lines)) {
            return acc + n.value
        }
        return acc
    }, 0)
}

function getAdjCoord(startIndex, endIndex, rowIndex, rowLength, columnLength) {
    const coordsToCheck = []
    // Check above
    if (rowIndex > 0) {
        // Check diagonally above
        if (startIndex > 0) {
            coordsToCheck.push([startIndex - 1, rowIndex - 1])
        }

        if (endIndex < rowLength - 1) {
            coordsToCheck.push([endIndex + 1, rowIndex - 1])
        }
        for (let i = startIndex; i <= endIndex; i++) {
            coordsToCheck.push([i, rowIndex - 1])
        }
    }

    // Check to the sides
    if (startIndex > 0) {
        coordsToCheck.push([startIndex - 1, rowIndex])
    }

    if (endIndex < rowLength - 1) {
        coordsToCheck.push([endIndex + 1, rowIndex])
    }

    // Check below
    if (rowIndex < columnLength - 1) {
        // Check diagonally below
        if (startIndex > 0) {
            coordsToCheck.push([startIndex - 1, rowIndex + 1])
        }

        if (endIndex < rowLength - 1) {
            coordsToCheck.push([endIndex + 1, rowIndex + 1])
        }
        for (let i = startIndex; i <= endIndex; i++) {
            coordsToCheck.push([i, rowIndex + 1])
        }
    }
    return coordsToCheck

}

function getNumbers(line) {
    const numbersInLine = []
    let numberFound = false
    let builderNumber = ""
    let startIndex = undefined
    for (i in line) {
        if (!isNaN(line[i])) {
            if (!numberFound) {
                startIndex = parseInt(i)
                numberFound = true
                builderNumber = ""
            }
            builderNumber += line[i]
        } else if (numberFound) {
            numbersInLine.push({ 'value': parseInt(builderNumber), 'startIndex': startIndex, 'endIndex': parseInt(i - 1) })
            builderNumber = ""
            numberFound = false
        }
    }

    if (numberFound && builderNumber !== "") {
        numbersInLine.push({ 'value': parseInt(builderNumber), 'startIndex': startIndex, 'endIndex': line.length - 1 })
    }
    return numbersInLine
}

function hasSymbol(coordsToCheck, data) {
    for (coord of coordsToCheck) {
        const x = coord[0]
        const y = coord[1]
        if (isSymbol(data[y][x])) {
            return true
        }
    }
    return false
}

function isSymbol(chr) {
    return (isNaN(chr) && chr !== '.')
}

function part2(data) {

}

module.exports = {
    part1,
    part2
}
