const portals = [
    { location: 55, destination: 38 },
    { location: 14, destination: 35 },
    { location: 91, destination: 48 },
    { location: 30, destination: 8 },
    { location: 31, destination: 70 },
    { location: 63, destination: 83 },
    { location: 3, destination: 39 },
    { location: 47, destination: 86 },
    { location: 71, destination: 93 },
    { location: 21, destination: 4 },
    { location: 44, destination: 65 },
    { location: 96, destination: 66 },
    { location: 79, destination: 42 },
    { location: 87, destination: 54 },
    { location: 90, destination: 119 },
    { location: 120, destination: 149 },
    { location: 150, destination: 179 },
    { location: 180, destination: 200 },
]

const quickestPath = (portals) => {

    // Create portal map
    const portalMap = new Map()
    for (const portal of portals) {
        portalMap.set(portal.location, portal.destination)
    }

    const queue = [[1, 0]] // start [position, turn]
    const visited = new Set([1]) 

    while (queue.length > 0) {
        const [current, turns] = queue.shift()

        // Destination
        if (current === 200) {
            return turns
        }

        // Try to walk
        for (let step = 1; step <= 11; step++) {
            let next = current + step
            if (next > 200) {
                continue
            }

            // Check portal
            if (portalMap.has(next)) {
                next = portalMap.get(next)
            }

            // Check in visited
            if (!visited.has(next)) {
                visited.add(next)
                queue.push([next, turns + 1])
            }
        }
    }

    return -1
}

console.log(quickestPath(portals))