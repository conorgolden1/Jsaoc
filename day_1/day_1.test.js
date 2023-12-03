const day = 1

const { test, expect } = require('@jest/globals')
const { part1, part2 } = require(`./day_${day}.js`)


test(`day ${day} basic part 1`, () => {
    expect(part1(testData)).toBe(part1Result)
});
test(`day ${day} basic part 2`, () => {
    expect(part2(testData2)).toBe(part2Result)
});


// Update below fields to reflect test data
const part1Result = 142

const part2Result = 281

const testData = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

const testData2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`
