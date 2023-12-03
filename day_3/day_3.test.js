const day = 3

const { test, expect } = require('@jest/globals')
const { part1, part2 } = require(`./day_${day}.js`)


test(`day ${day} basic part 1`, () => {
    expect(part1(testData)).toBe(part1Result)
});

test(`day ${day} basic part 1.1`, () => {
    expect(part1(testDataa)).toBe(123)
});

test(`day ${day} basic part 2`, () => {
    expect(part2(testData2)).toBe(part2Result)
});


// Update below fields to reflect test data
const part1Result = 4361

const part2Result = undefined

const testData = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

const testDataa = `...
..!
123`

const testData2 = undefined
