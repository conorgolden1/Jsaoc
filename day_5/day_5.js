const { error } = require('console');

function part1(info) {
    const lines = info.split("\n\n")
    const data = parseData(lines)
    data.seeds = transformSeeds(data.seeds, data.seedToSoil)
    data.seeds = transformSeeds(data.seeds, data.soilToFertilizer)
    data.seeds = transformSeeds(data.seeds, data.fertilizerToWater)
    data.seeds = transformSeeds(data.seeds, data.waterToLight)
    data.seeds = transformSeeds(data.seeds, data.lightToTemperature)
    data.seeds = transformSeeds(data.seeds, data.temperatureToHumidity)
    data.seeds = transformSeeds(data.seeds, data.humidityToLocation)
    let lowest = Infinity
    for (seed of data.seeds) {
        if (seed < lowest) {
            lowest = seed
        }
    }
    return lowest


}

function transformSeeds(seeds, mapping) {
    const copy = []
    for (const seed of seeds) {
        let changed = false
        for (let y = 0; y < mapping.length; y += 2) {
            const n = parseInt(y)
            const lower = parseInt(mapping[n + 1][0])
            const bottom = parseInt(mapping[n][0])
            const upper = parseInt(mapping[n + 1][1])

            if (seed >= lower && seed < upper) {
                copy.push(seed - lower + bottom)
                changed = true
                break
            }
        }
        if (!changed) {
            copy.push(seed)
        }
    }
    return copy

}

function parseData(lines) {
    let data = []
    data.humidityToLocation = constructMap(lines.pop().split(':')[1].replaceAll('\n', ' ').slice(1).split(' '))
    data.temperatureToHumidity = constructMap(lines.pop().split(':')[1].replaceAll('\n', ' ').slice(1).split(' '))
    data.lightToTemperature = constructMap(lines.pop().split(':')[1].replaceAll('\n', ' ').slice(1).split(' '))
    data.waterToLight = constructMap(lines.pop().split(':')[1].replaceAll('\n', ' ').slice(1).split(' '))
    data.fertilizerToWater = constructMap(lines.pop().split(':')[1].replaceAll('\n', ' ').slice(1).split(' '))
    data.soilToFertilizer = constructMap(lines.pop().split(':')[1].replaceAll('\n', ' ').slice(1).split(' '))
    data.seedToSoil = constructMap(lines.pop().split(':')[1].replaceAll('\n', ' ').slice(1).split(' '))
    data.seeds = lines.pop().split(':')[1].replaceAll('\n', ' ').slice(1).split(' ')
    return data
}

function constructMap(arr) {
    const rangePairs = []
    for (let i = 0; i < arr.length; i += 3) {
        const n = parseInt(i)
        const source = parseInt(arr[n])
        const dest = parseInt(arr[n + 1])
        const rng = parseInt(arr[n + 2])
        rangePairs.push([source, source + rng])
        rangePairs.push([dest, dest + rng])
    }
    return rangePairs
}


function part2(data) {
    const lines = info.split("\n\n")
    const data = parseData(lines)
    data.seeds = transformSeeds(data.seeds, data.seedToSoil)
    data.seeds = transformSeeds(data.seeds, data.soilToFertilizer)
    data.seeds = transformSeeds(data.seeds, data.fertilizerToWater)
    data.seeds = transformSeeds(data.seeds, data.waterToLight)
    data.seeds = transformSeeds(data.seeds, data.lightToTemperature)
    data.seeds = transformSeeds(data.seeds, data.temperatureToHumidity)
    data.seeds = transformSeeds(data.seeds, data.humidityToLocation)
    console.log(data.seeds)
    let lowest = Infinity
    for (seed of data.seeds) {
        if (seed < lowest) {
            lowest = seed
        }
    }
    return lowest
}

module.exports = {
    part1,
    part2
}
