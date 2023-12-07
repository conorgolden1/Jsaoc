const { error } = require('console');

function part1(data) {
    const lines = data.split("\n")

    const dataPairs = lines.map((line) => {
        const arr = line.split(" ")
        return [arr[0].split(''), arr[1]]
    })
    dataPairs.pop()
    dataPairs.sort(function(a, b) {
        return  compareHands(a[0], b[0])
    })

    //console.log(dataPairs)
    let rank = 0
    return dataPairs.reduce((acc, n) => { rank++; return acc + (n[1] * rank) }, 0)
}
// Find how many cards have matches
// Compare
// If same compare each card in hand
function cmpCards(a, b) {
    const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
    if (a === b) {
        return 0
    }
    if (cards.indexOf(a) < cards.indexOf(b)) {
        return -1
    }
    return 1
}

function compareHands(hand1, hand2) {
    if (compareHandsInner(hand1, hand2)) {
        //console.log(`Result: ${hand1} > ${hand2}`)
        return 1
    }
    //console.log(`Result: ${hand2} > ${hand1}`)
    return -1
}

//hand = [highest, highest#, sec, sec#]
//true if hand1 > hand2
//false if hand2 > hand1
function compareHandsInner(hand1, hand2) {
    const hand1Unique = countUnique(hand1)
    const hand2Unique = countUnique(hand2)
    const hand1Values = findMaxAndSecMax(Object.values(hand1Unique))
    const hand2Values = findMaxAndSecMax(Object.values(hand2Unique))
    //console.log(`Comparing: ${hand1}, ${hand2}\nUnique: ${hand1Unique}, ${hand2Unique}\nValues: ${hand1Values}, ${hand2Values}`)
    if (hand1Values[0] !== hand2Values[0]) {
        return hand1Values[0] > hand2Values[0]
    }

    if (hand1Values[1] !== hand2Values[1]) {
        return hand1Values[1] > hand2Values[1]
    }

    for (i in hand1) {
        const cmp = cmpCards(hand1[i], hand2[i])
        if (cmp === 0) {
            continue
        }
        //console.log(`Card cmp: ${hand1[i]}, ${hand2[i]} | Index: ${i}, Result: ${cmp}`)
        return cmp < 0
    }
    throw Error("Unreachable")
}

function countUnique(arr) {
    const counts = {}
    for (i in arr) {
        counts[arr[i]] = 1 + (counts[arr[i]] || 0);
    }
    return counts;
}

function findMaxAndSecMax(arr) {
    let max = arr[0];
    let sec = -Infinity
    for (let i = 1; i < arr.length; i++) {
        const v = arr[i]
        if (v > max) {
            sec = max
            max = v
            continue
        }
        if (v > sec) {
            sec = v
        }
    }
    return [max, sec]
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
}



function part2(data) {

}

module.exports = {
    part1,
    part2
}
