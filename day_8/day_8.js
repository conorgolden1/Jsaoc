const { error } = require('console');
const { lcm } = require('mathjs');
function part1(data) {
    const lines = data.split("\n\n")
    const instructions = lines[0]
    const n = lines[1].split("\n").slice(0, -1).map((n) => {
        const spl = n.split(" = (");
        const dest = spl[1].slice(0, -1).split(", ")
        return [spl[0], dest]
    })

    const nodes = {}

    for (const node of n) {
        nodes[node[0]] = node[1]
    }

    let curr = 'AAA'
    let count = 0
    while (curr !== 'ZZZ') {
        for (const inst of instructions) {
            count += 1
            if (inst === 'L') {
                curr = nodes[curr][0]
            } else {
                curr = nodes[curr][1]
            }

            if (curr === 'ZZZ') {
                break
            }
        }
    }

    return count
}

function findAllA(nodes) {
    const keys = []
    for (const k of Object.keys(nodes)) {
        if (k[2] === 'A') {
            keys.push(k)
        }
    }
    return keys
}

function countSteps(start, nodes, instructions) {
    let curr = start
    let count = 0
    while (curr[2] !== 'Z') {
        for (const inst of instructions) {
            count += 1
            if (inst === 'L') {
                curr = nodes[curr][0]
            } else {
                curr = nodes[curr][1]
            }

            if (curr[2] === 'Z') {
                break
            }
        }
    }
    return count
}

function part2(data) {
    const lines = data.split("\n\n")
    const instructions = lines[0]
    const n = lines[1].split("\n").slice(0, -1).map((n) => {
        const spl = n.split(" = (");
        const dest = spl[1].slice(0, -1).split(", ")
        return [spl[0], dest]
    })

    const nodes = {}

    for (const node of n) {
        nodes[node[0]] = node[1]
    }
    const keys = findAllA(nodes)
    const steps = keys.map((k) => { return countSteps(k, nodes, instructions) })
    return lcm(...steps)
}

module.exports = {
    part1,
    part2
}
