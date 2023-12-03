const day = 3
const filePath = 'day_3/data.txt'
const { part1, part2 } = require(`./day_${day}.js`)

function main() {
    const fs = require('fs');

    fs.readFile(filePath, 'utf-8', (error, fileContent) => {
        if (error) {
            console.error('Error reading the file:', error.message);
            return;
        }
        //Uncomment when finished function
        console.log(part1(fileContent))
        console.log(part2(fileContent))
    });
}

main()

