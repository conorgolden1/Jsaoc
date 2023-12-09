const day = 9

const { test, expect } = require('@jest/globals')
const { part1, part2 } = require(`./day_${day}.js`)


test(`day ${day} basic part 1`, () => {
    expect(part1(testData)).toBe(part1Result)
});
test(`day ${day} basic part 1.1`, () => {
    expect(part1(tesData1)).toBe(part1Result)
});

test(`day ${day} basic part 2`, () => {
    expect(part2(testData2)).toBe(part2Result)
});


// Update below fields to reflect test data
const part1Result = 114

const part2Result = 2

const testData = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`

const tesData1 = `9 13 9 -9 -42 -81 -94 2 388 1410 3664 8094 16095 29610 51207 84119 132227 199963 292107 413449 568284`
const testData2 = testData
