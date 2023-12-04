const { error } = require('console');

function part1(data) {
    const lines = data.split("\n")
    const games = lines.map((line) => { return parseGame(line) })
    const number = games.map((game) => {
        if (game[0] === undefined || game[1] === undefined) {
            return 0
        }
        return countWinning(parseNumbers(game[0]), parseNumbers(game[1]))
    })
    return number.reduce((acc, n) => { return acc + n }, 0)

}

function parseNumbers(nString) {
    return nString.split(' ')
}

function countWinning(winningNumbers, numbersArr) {
    let doubler = 0
    for (candidate of numbersArr) {
        if (candidate !== '' && winningNumbers.includes(candidate)) {
            if (doubler == 0) {
                doubler++
            } else {

                doubler *= 2
            }
        }
    }
    return doubler
}


function parseGame(line) {
    if (line.split(':')[1] === undefined) {
        return []
    }
    return line.split(':')[1].split('|')
}

function countMatches(winningNumbers, numbersArr) {
    let count = 0

    for (candidate of numbersArr) {
        if (candidate !== '' && winningNumbers.includes(candidate)) {
            count++
        }
    }
    return count
}
function part2(data) {
    const lines = data.split("\n")
    const games = lines.map((line) => { return parseGame(line) })
    if (games[games.length - 1].toString() === [].toString()) {
        games.pop()
    }
    const scratchCards = []

    for (let i = 1; i <= games.length; i++) {
        scratchCards.push(1)
    }
    for (i in games) {
        const multi = scratchCards[i]
        const count = countMatches(parseNumbers(games[i][0]), parseNumbers(games[i][1]))
        for (let x = 1; x <= count && Number(x) + Number(i) < games.length; x++) {
            scratchCards[Number(i) + Number(x)] += multi
        }
    }
    console.log(scratchCards)
    return scratchCards.reduce((acc, n) => { return acc + n }, 0)
}

module.exports = {
    part1,
    part2
}
