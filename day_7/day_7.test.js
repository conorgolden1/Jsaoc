const day = 7

const { test, expect } = require('@jest/globals')
const { part1, part2 } = require(`./day_${day}.js`)


test(`day ${day} basic part 1`, () => {
    expect(part1(testData)).toBe(part1Result)
});

test(`day ${day} basic part 2`, () => {
    expect(part2(testData2)).toBe(part2Result)
});


// Update below fields to reflect test data
const part1Result = 6440

const part2Result = undefined

const testData = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

const testData2 = undefined
