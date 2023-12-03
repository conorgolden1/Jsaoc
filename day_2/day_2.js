const { error } = require('console');

function part1(data) {
    const lines = data.split("\n")
    const games = lines.map((line) => { return parseGame(line) })
    const possibleGames = []

    for (i in games) {
        let isPossible = false
        for (set of games[i]) {
            isPossible = setIsPossible(set)
            if (!isPossible) {
                break
            }
        }
        if (isPossible) {
            possibleGames.push(Number(i) + 1)
        }
    }
    return possibleGames.reduce((acc, n) => { return acc + n }, 0)
}

function setIsPossible(set) {
    const colors = { 'red': 12, 'green': 13, 'blue': 14 }
    for (entry of set) {
        const cubes = entry.substr(1).split(' ')
        const color = cubes[1]
        const numCubes = cubes[0]
        if (numCubes > colors[color]) {
            return false
        }
    }
    return true

}

function parseGame(line) {
    if (line.split(':')[1] === undefined) {
        return []
    }
    return line.split(':')[1].split(';').map((line) => { return line.split(',') });
}

function part2(data) {

}

module.exports = {
    part1,
    part2
}
