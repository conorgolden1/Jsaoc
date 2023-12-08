const { error } = require('console');

function part2(data) {
    const lines = data.split("\n")

    const dataPairs = lines.map((line) => { return line.split(" ") })
    dataPairs.pop()
    dataPairs.sort(function(a, b) {
        return compareHands(a[0], b[0], 2)
    })
    let rank = 0
    return dataPairs.reduce((acc, n) => { rank++; return acc + (n[1] * rank) }, 0)
}


function compareHands(a, b) {
    const aScore = scoreJ(a)
    const bScore = scoreJ(b)
    let cmp = null
    if (aScore === bScore) {
        cmp = cardsCmp(a, b)
    }
    if (aScore > bScore || cmp) {
        return 1
    }
    return -1
}

function cardsCmp(a, b) {
    const cards = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J']
    for (i in a) {
        if (cards.indexOf(a[i]) === cards.indexOf(b[i])) {
            continue
        }
        return cards.indexOf(a[i]) < cards.indexOf(b[i])
    }
    throw Error("Same hand")
}

function score(hand) {
    let score = 0
    for (c of hand) {
        score += (hand.split(c).length - 1)
    }
    return score;
}
function scoreJ(hand) {
    const cards = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
    let handScore = 0
    for (c of cards) {
        handScore = Math.max(handScore, score(hand.replaceAll('J', c)))
    }

    return handScore;
}
module.exports = {
    part2
}
