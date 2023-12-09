const { error } = require('console');

function part1(data) {
    const lines = data.split("\n").map((line) => { return line.split(" ").map(n => { return parseInt(n) }) })
    const post = lines.map(line => {
        return processExtrapolation(line)
    })
    return post.reduce((acc, n) => {
        if (isNaN(n)) {
            return acc
        }
        return acc + n
    }, 0)

}

function processExtrapolation(arr) {
    const difference = []
    if (arr.length === 0) {
        return 0
    }
    for (let i = 1; i < arr.length; i++) {
        i = parseInt(i)
        difference.push(arr[i] - arr[i - 1])
    }

    return arr[arr.length - 1] + processExtrapolation(difference)
}

function processExtrapolation2(arr) {
    const difference = []
    if (arr.length === 0) {
        return 0
    }
    for (let i = 1; i < arr.length; i++) {
        i = parseInt(i)
        difference.push(arr[i] - arr[i - 1])
    }

    return arr[0] - processExtrapolation2(difference)
}

function part2(data) {
    const lines = data.split("\n").map((line) => { return line.split(" ").map(n => { return parseInt(n) }) })
    const post = lines.map(line => { return processExtrapolation2(line) })
    return post.reduce((acc, n) => {
        if (isNaN(n)) {
            return acc
        }
        return acc + n
    }, 0)

}

module.exports = {
    part1,
    part2
}
