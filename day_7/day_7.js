const { error } = require('console');

function part1(data) {
    const lines = data.split("\n")

    const dataPairs = lines.map((line) => {
        const arr = line.split(" ")
        return [findMatches(arr[0]), arr[1]]
    })
    dataPairs.sort(function(a, b) {
        const c = compareHands(a[0], b[0])
        if (c) {
            return 1
        }
        return -1
    })

    console.log(dataPairs)
    let rank = 0
    return dataPairs.reduce((acc, n) => { rank++; return acc + (n[1] * rank) }, 0)
}

//hand = [highest, highest#, sec, sec#]
//true if hand1 > hand2
//false if hand2 > hand1
function compareHands(hand1, hand2) {
    const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
    if (hand1[1] > hand2[1]) {
        return true
    }
    if (hand2[1] > hand1[1]) {
        return false
    }

    if ((hand1[1] === 2 && hand1[3] === 2) || (hand2[1] === 2 && hand2[3] === 2)) {
        return compareTwoPair(hand1, hand2)
    }

    if ((hand1[1] === 3 && hand1[3] === 2) || (hand2[1] === 3 && hand2[3] === 2)) {
        return compareFullHouse(hand1, hand2)
    }

    if (hand1[1] === hand2[1] && hand1[0] === hand2[0]) {
        return cards.indexOf(hand1[3]) < cards.indexOf(hand2[3])
    }
    return cards.indexOf(hand1[0]) < cards.indexOf(hand2[0])
}

function compareTwoPair(hand1, hand2) {
    const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']

    if (hand1[3] !== 2) {
        return false
    }

    if (hand2[3] !== 2) {
        return true
    }

    if (cards.indexOf(hand1[0]) !== cards.indexOf(hand2[0])) {
        return cards.indexOf(hand1[0]) < cards.indexOf(hand2[0])

    }

    if (cards.indexOf(hand1[2]) !== cards.indexOf(hand2[2])) {
        return cards.indexOf(hand1[2]) < cards.indexOf(hand2[2])
    }

    return cards.indexOf(hand1[4]) < cards.indexOf(hand2[4])

}

//hand = [highest, highest#, sec, sec#]
function compareFullHouse(hand1, hand2) {
    const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
    //hand1 not full house
    if (hand1[3] !== 2) {
        return false
    }
    //hand2 not full house
    if (hand2[3] !== 2) {
        return true
    }

    if (hand1[0] !== hand2[0]) {
        return cards.indexOf(hand1[2]) < cards.indexOf(hand2[2])
    }

    return cards.indexOf(hand1[0]) < cards.indexOf(hand2[0])
}

function findMatches(hand) {
    const matches = {}
    for (const card of hand) {
        if (card in matches) {
            matches[card]++
        } else {
            matches[card] = 1
        }

    }
    return highestHand(matches)
}

function highestHand(matches) {
    let highestCard = null
    let highestNumber = null
    let secondHighest = null
    let secondHighestNumber = null
    let third = null
    for (const card of Object.keys(matches)) {
        const numOfCard = matches[card]
        if (highestCard == null) {
            highestCard = card
            highestNumber = numOfCard
            continue
        }
        if (!compareCards(highestCard, highestNumber, card, numOfCard)) {
            third = secondHighest
            secondHighestNumber = highestNumber
            secondHighest = highestCard
            highestCard = card
            highestNumber = numOfCard
            continue
        }
        if (secondHighest == null) {
            secondHighest = card
            secondHighestNumber = numOfCard
            continue
        }

        if (!compareCards(secondHighest, secondHighestNumber, card, numOfCard)) {
            third = secondHighest
            secondHighestNumber = numOfCard
            secondHighest = card
        }

        if (third === null) {
            third = card
        }

    }
    return [highestCard, highestNumber, secondHighest, secondHighestNumber, third]
}
// True if card1 better
// False if card2 better
function compareCards(card1, numCard1, card2, numCard2) {
    const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
    if (numCard1 > numCard2) {
        return true
    }
    if (numCard2 > numCard1) {
        return false
    }
    return cards.indexOf(card1) < cards.indexOf(card2)

}

function part2(data) {

}

module.exports = {
    part1,
    part2
}
