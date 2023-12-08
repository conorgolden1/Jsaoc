const day = 8

const { test, expect } = require('@jest/globals')
const { part1, part2 } = require(`./day_${day}.js`)


test(`day ${day} basic part 1`, () => {
    expect(part1(testData)).toBe(part1Result)
});


test(`day ${day} basic part 1.2`, () => {
    expect(part1(testData1)).toBe(part1Result1)
});


test(`day ${day} basic part 2`, () => {
    expect(part2(testData2)).toBe(part2Result)
});


// Update below fields to reflect test data
const part1Result = 2

const part1Result1 = 6

const part2Result = 6

const testData = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`

const testData1 = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`

const testData2 = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`
