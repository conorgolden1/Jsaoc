const { error } = require('console');

//Note I mistakenly searched at the current node for possible routes instead of
//using the current node to move to the next route UGH!
function part1(data) {
    const lines = data.split("\n")
    const start = findStart(lines)
    let p = chooseStartDirection(lines, start)
    let prev_p = start
    for (let count = 1; true; count++) {
        const dirs = scanPoint(lines, p);
        if (dirs.length === 0) {
            return count / 2;
        }

        [p, prev_p] = chooseDir(dirs, p, prev_p)


/*         console.log(dirs);
        console.log(`P: ${p[0]}, ${p[1]} | Pre: ${p[0] + prev_p[0]}, ${p[1] + prev_p[1]}`); */
    }

}

function chooseDir(dirs, p, prev_p) {
    for (const dir of dirs) {
        if (prev_p === null || !(prev_p[0] === dir[0] && prev_p[1] === dir[1])) {
            return [[p[0] + dir[0], p[1] + dir[1]], [parseInt(dir[0] * -1), parseInt(dir[1] * -1)]]
        }
    }
    throw Error("Did not choose a direction")
}

const symbols = {
    '|': [[1, 0], [-1, 0]],
    '-': [[0, 1], [0, -1]],
    '7': [[0, -1], [1, 0]],
    'J': [[0, -1], [-1, 0]],
    'L': [[0, 1], [-1, 0]],
    'F': [[0, 1], [1, 0]],
}


function scanPoint(data, p) {
    const dirs = []
    const sym = data[p[0]][p[1]]
    if (sym === 'S') {
        return []
    }
    const checkDirs = symbols[sym]
    for (c of checkDirs) {
        dirs.push([c[0], c[1]])
    }
    return dirs
}

const check = [[-1, 0], [0, 1], [0, -1], [1, 0]]

const startSymbols = {
    '|': [[1, 0], [-1, 0]],
    '-': [[0, 1], [0, -1]],
    '7': [[0, 1], [-1, 0]],
    'J': [[0, 1], [1, 0]],
    'L': [[0, -1], [1, 0]],
    'F': [[0, -1], [-1, 0]],
}

function chooseStartDirection(data, p) {
    for (c of check) {
        const sym = data[p[0] + c[0]][p[1] + c[1]]
        if (typeof sym !== 'undefined' && sym !== '.') {
            const pos_dir = startSymbols[sym]
            if (c[0] === pos_dir[0][0] && c[1] === pos_dir[0][1]) {
                return [p[0] + c[0], p[1] + c[1]]
            } else if (c[0] === pos_dir[1][0] && c[1] === pos_dir[1][1]) {
                return [p[0] + c[0], p[1] + c[1]]
            }
        }
    }

}
function findStart(data) {
    for (y in data) {
        for (x in data[y]) {
            if (data[y][x] == 'S') {
                return [parseInt(y), parseInt(x)]
            }
        }
    }
    throw Error("Did not find start")
}

function part2(data) {

}

module.exports = {
    part1,
    part2
}
