const day = 11

const { test, expect } = require('@jest/globals')
const { part1, part2 } = require(`./day_${day}.js`)


test(`day ${day} basic part 1`, () => {
    expect(part1(testData)).toBe(part1Result)
});

test(`day ${day} basic part 2`, () => {
    expect(part2(testData2)).toBe(part2Result)
});


// Update below fields to reflect test data
const part1Result = 374

const part2Result = 8410

const testData = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`

const testData2 = testData
