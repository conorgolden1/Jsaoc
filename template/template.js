const { error } = require('console');

function part1(data) {

}

function part2(data) {

}

function main() {
    const fs = require('fs');

    const filePath = './data.txt';

    fs.readFile(filePath, 'utf-8', (error, fileContent) => {
        if (error) {
            console.error('Error reading the file:', error.message);
            return;
        }
        //Uncomment when finished function
        //console.log(part1(data))
        //console.log(part2(data))
    });
}

main()

module.exports = {
    part1,
    part2
}
