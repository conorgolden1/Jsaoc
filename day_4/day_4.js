const { error } = require('console');

function part1(data) {
    const lines = data.split("\n")
    const games = lines.map((line) => { return parseGame(line) })
    const number = games.map((game) => {
        if (game[0] === undefined || game[1] === undefined) {
            return 0
        }
        return countWinning(parseNumbers(game[0]), parseNumbers(game[1])) })
    console.log(number)
    return number.reduce((acc, n) => { return acc + n }, 0)

}

function parseNumbers(nString) {
    return nString.split(' ')
}

function countWinning(winningNumbers, numbersArr) {
    console.log(winningNumbers, numbersArr)
    let count = 0
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
    console.log(count)
    return doubler
}

function parseGame(line) {
    if (line.split(':')[1] === undefined) {
        return []
    }
    return line.split(':')[1].split('|')
}
function part2(data) {

}

module.exports = {
    part1,
    part2
}
