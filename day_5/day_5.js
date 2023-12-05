const { error } = require('console');

function part1(info) {
    const lines = info.split("\n\n")
    const mappings = []
    const seeds = lines.shift().split(':')[1].replaceAll('\n', ' ').slice(1).split(' ').map((s) => { return parseInt(s) })
    for (let i = 0; i < 7; i++) {
        mappings.push(constructMap(lines.shift().split(':')[1].replaceAll('\n', ' ').slice(1).split(' ')))
    }
    let lowest = Infinity
    for (let seed of seeds) {
        for (seedMap of mappings) {
            seed = transformSeed(seed, seedMap)
        }
        if (seed < lowest) {
            lowest = seed
        }
    }
    return lowest
}

function transformSeed(seed, mapping) {
    for (seedMap of mapping) {
        const lower = parseInt(seedMap[0])
        const range = parseInt(seedMap[1])
        const destination = parseInt(seedMap[2])
        if (seed >= lower && seed < lower + range) {
            return (seed - lower + destination)
        }
    }
    return seed

}

function constructMap(arr) {
    const rangePairs = []
    for (let i = 0; i < arr.length; i += 3) {
        const n = parseInt(i)
        const destination = parseInt(arr[n])
        const source = parseInt(arr[n + 1])
        const range = parseInt(arr[n + 2])
        rangePairs.push([source, range, destination])
    }
    return rangePairs
}



function processRangeSeeds(seeds, ranges, seedMaps) {
    let newSeeds = []
    let newRanges = []
    const fragments = seeds
    const rangeFragments = ranges
    while (fragments.length !== 0) {
        const seedBottom = fragments.pop()
        const seedRange = rangeFragments.pop()
        const seedTop = seedBottom + seedRange
        const oldSeedsLength = newSeeds.length
        for (let m = 0; m < seedMaps.length && oldSeedsLength === newSeeds.length; m++) {
            const mapBottom = seedMaps[m][0]
            const mapRange = seedMaps[m][1]
            const mapTop = mapBottom + mapRange
            const dest = seedMaps[m][2]
            //Just transform what is only in the range
            //Iterate over fragments until no changes
            if (seedBottom < mapBottom && seedTop > mapTop) {
                fragments.push(seedBottom)
                rangeFragments.push(mapBottom - seedBottom)

                newSeeds.push(dest)
                newRanges.push(mapTop - mapBottom)

                fragments.push(mapTop)
                rangeFragments.push(seedTop - mapTop)
                //split into 3rds
            } else if (seedBottom < mapBottom && seedTop > mapBottom) {
                fragments.push(seedBottom)
                rangeFragments.push(mapBottom - seedBottom)

                newSeeds.push(dest)
                newRanges.push(seedTop - mapBottom)
                //split into mapBottom half
            } else if (seedBottom >= mapBottom && seedBottom < mapTop && seedTop > mapTop) {
                newSeeds.push(seedBottom - mapBottom + dest)
                newRanges.push(mapTop - seedBottom - 1)

                fragments.push(mapTop)
                rangeFragments.push(seedTop - mapTop)
                //split into mapTop half
            } else if (seedBottom >= mapBottom && seedTop <= mapTop) {
                newSeeds.push(seedBottom - mapBottom + dest)
                newRanges.push(seedRange)
                //No split. just transform
            }
        }
        if (newSeeds.length === oldSeedsLength) {
            newSeeds.push(seedBottom)
            newRanges.push(seedRange)
        }
    }

    return [newSeeds, newRanges]
}

function part2(info) {
    const lines = info.split("\n\n")
    const mappings = []
    const seeds = lines.shift().split(':')[1].replaceAll('\n', ' ').slice(1).split(' ').map((s) => { return parseInt(s) })
    for (let i = 0; i < 7; i++) {
        mappings.push(constructMap(lines.shift().split(':')[1].replaceAll('\n', ' ').slice(1).split(' ')))
    }

    let lowest = Infinity
    for (let i = 0; i < seeds.length; i += 2) {
        const n = parseInt(i)
        let testSeeds = [seeds[n]]
        let ranges = [seeds[n + 1]]
        for (mapp of mappings) {
            [testSeeds, ranges] = processRangeSeeds(testSeeds, ranges, mapp)
        }

        for (const seed of testSeeds) {
            if (seed < lowest) {
                lowest = seed
            }
        }
    }
    return lowest
}

module.exports = {
    part1,
    part2
}
