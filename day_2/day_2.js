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

function maxSet(set, maxGame) {
    const newGame = maxGame;
    for (entry of set) {
        const cubes = entry.substr(1).split(' ')
        const color = cubes[1]
        const numCubes = Number(cubes[0])
        if (newGame[color] < numCubes) {
            newGame[color] = numCubes
        }
    }
    return newGame

}
function part2(data) {
    const lines = data.split("\n")
    const games = lines.map((line) => { return parseGame(line) })
    const powerSets = []
    for (i in games) {
        let maxGame = { 'red': 0, 'blue': 0, 'green': 0 }
        for (set of games[i]) {
            maxGame = maxSet(set, maxGame)
        }
        powerSets.push(Object.values(maxGame).reduce((acc, n) => { return acc * n }, 1))
    }
    return powerSets.reduce((acc, n) => { return acc + n }, 0)
}

module.exports = {
    part1,
    part2
}
