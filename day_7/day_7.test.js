const day = 7
const filePath = 'day_7/data.txt'

const { test, expect } = require('@jest/globals')
const { part2 } = require(`./day_${day}.js`)


test(`day ${day} basic part 2`, () => {
    expect(part2(testData2)).toBe(part2Result)
});

const fs = require('fs');

test(`day ${day} basic part 2.2`, () => {
    fs.readFile(filePath, 'utf-8', (error, fileContent) => {
        if (error) {
            console.error('Error reading the file:', error.message);
            return;
        }
        expect(part2(fileContent)).toBe(result)

    });
});

// Update below fields to reflect test data

const part2Result = 5905

const result = 249356515

const testData = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

const testData2 = testData

