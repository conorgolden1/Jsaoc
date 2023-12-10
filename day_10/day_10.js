const { error } = require('console');

//Note I mistakenly searched at the current node for possible routes instead of
//using the current node to move to the next route UGH!
function part1(data) {
    const lines = data.split("\n")
    const start = findStart(lines)
    let p = chooseStartDirection(lines, start)
    let prev_p = [start[0] - p[0], start[1] - p[1]]
    for (let count = 1; true; count++) {
        const dirs = scanPoint(lines, p);
        if (dirs.length === 0) {
            return count / 2;
        }
        [p, prev_p] = chooseDir(dirs, p, prev_p)
    }
}

function chooseDir(dirs, p, prev_p) {
    for (const dir of dirs) {
        if (!(prev_p[0] === dir[0] && prev_p[1] === dir[1])) {
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

function replaceS(data, p) {
    const lines = data;
    const symbols = []
    for (c of check) {
        const sym = data[p[0] + c[0]][p[1] + c[1]]
        if (typeof sym !== 'undefined' && sym !== '.') {
            const pos_dir = startSymbols[sym]
            if (c[0] === pos_dir[0][0] && c[1] === pos_dir[0][1]) {
                symbols.push([parseInt(c[0] * -1), parseInt(c[1] * -1)])
            } else if (c[0] === pos_dir[1][0] && c[1] === pos_dir[1][1]) {
                symbols.push([parseInt(c[0] * -1), parseInt(c[1] * -1)])
            }
        }
    }
    const str1 = symbols.toString()
    const str2 = [symbols[1] + symbols[0]].toString()
    for (const key of Object.keys(startSymbols)) {
        const keystr = startSymbols[key].toString();
        if (keystr === str1 || keystr === str2) {
            lines[p[0]] = lines[p[0]].replace('S', key)
            break
        }
    }
    return lines
}

const walls = ['F', '7', '|']

function countEnclosed(line, points, row) {
    let boundry_count = 0
    let enclosed = 0
    for (i in line) {
        let isPoint = false
        for (p of points) {
            if (p[0] === row && p[1] === parseInt(i)) {
                isPoint = true
                break
            }
        }
        if (isPoint) {
            if (walls.includes(line[i])) {
                boundry_count++
            }
        } else if (boundry_count % 2 == 1) {
            enclosed++
        }
    }
    return enclosed
}


function part2(data) {
    const lines = data.split("\n")
    const start = findStart(lines)
    let p = chooseStartDirection(lines, start)
    let prev_p = [start[0] - p[0], start[1] - p[1]]
    let dirs = scanPoint(lines, p);
    let points = new Array(start)
    while (dirs.length !== 0) {
        points.push(p);
        [p, prev_p] = chooseDir(dirs, p, prev_p);
        dirs = scanPoint(lines, p);
    }

    const nLines = replaceS(lines, start)
    let sum = 0
    for (i in nLines) {
        sum += countEnclosed(nLines[i], points, parseInt(i))
    }
    return sum
}

module.exports = {
    part1,
    part2
}
