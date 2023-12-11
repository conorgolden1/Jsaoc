const { error } = require('console');
const { abs } = require('mathjs');

function part1(data) {
    const lines = expandColumns(expandRows(data.split("\n"), 1), 1)
    const hashPoints = findAllHash(lines)
    return hashPoints.reduce((acc, n) => {
        return acc + calcDist(n, hashPoints)
    }, 0) / 2
}

function calcDist(point, arr) {
    return arr.reduce((acc, p) => {
        if (p.toString() === point.toString()) {
            return acc
        }

        return acc + abs(point[0] - p[0]) + abs(point[1] - p[1])
    }, 0)
}

function expandRows(data, mult) {
    const newRow = new Array(data[0].length).fill('.', 0, data[0].length)
    const newData = []
    for (i in data) {
        newData.push(data[i])
        if (!data[i].includes('#')) {
            for (let n = 0; n < mult; n++) {
                newData.push(newRow)
            }
        }
    }
    return newData
}

function expandColumns(data, mult) {
    const newData = new Array(data.length).fill('', 0, data.length)
    for (let x = 0; x < data[0].length; x++) {
        let foundHash = false
        for (let y = 0; y < data.length; y++) {
            if (data[y][x] === '#') {
                foundHash = true
            }
            newData[y] += (data[y][x])
        }
        if (!foundHash) {
            for (let y = 0; y < data.length; y++) {
                for (let i = 0; i < mult; i++) {
                    newData[y] += ('.')
                }
            }
        }
    }
    return newData
}

function findAllHash(data) {
    hashPoints = []
    for (y in data) {
        for (x in data[y]) {
            if (data[y][x] === '#') {
                hashPoints.push([y, x])
            }
        }
    }
    return hashPoints
}



function part2(data) {
    const mult = 9
    const lines = expandColumns(expandRows(data.split("\n"), mult), mult)
    const hashPoints = findAllHash(lines)
    return hashPoints.reduce((acc, n) => {
        return acc + calcDist(n, hashPoints)
    }, 0) / 2

/* Real answer (298924 * 999998) + 9521550 */
}

module.exports = {
    part1,
    part2
}
