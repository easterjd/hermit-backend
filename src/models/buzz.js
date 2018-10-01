const googleTrends = require('google-trends-api')

const getBuzz = async ({ trail, date }) => {
    try {
        // Later use Google Maps to reverse geocode the region
        const relDate = getRelativeDate(date)
        const first = new Date(relDate)
        first.setMonth(first.getMonth() - 4)
        const last = new Date(relDate)
        last.setMonth(last.getMonth() + 4)
        const newName = betterName(trail.name).length > 5 ? betterName(trail.name) : trail.name
        const buzz = await googleTrends.interestOverTime({
            keyword: newName,
            startTime: first,
            endTime: last,
        })
        const info = JSON.parse(buzz).default.timelineData.find(day => {
            let thisDate = new Date(day.formattedTime)
            if (thisDate.getFullYear() === relDate.getFullYear() &&
            thisDate.getMonth() === relDate.getMonth() &&
            thisDate.getDate() === relDate.getDate()) {
                return day
            }
        })
        if (info) return info.value
        else return null
    } catch (e) {
        console.log(e)
        return e
    }
}

const getRelativeDate = (date) => {
    date = new Date(date)
    let day = date.getDay()
    let lastYear = new Date(date)
    lastYear.setFullYear(lastYear.getFullYear() - 1)
    let lastDay = lastYear.getDay()
    let diff = day - lastDay
    return new Date(lastYear.setDate(lastYear.getDate() + diff))
}

const betterName = (name) => {
    if (name.includes('and')) {
        return name.split('and')[0]
    }
    if (name.includes('via')) {
        return name.split('via')[0]
    }
    if (name.includes('from')) {
        return name.split('from')[0]
    }
    if (name.includes('-')) {
        return name.split(' - ')[1]
    }
    if (name.includes(': ')) {
        return name.split(': ')[1]
    }
    return name
}

module.exports = {
    getBuzz
}