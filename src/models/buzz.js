const googleTrends = require('google-trends-api')

const getBuzz = async ({ trails, date }) => {
    try {
        // Later use Google Maps to reverse geocode the region
        const relDate = getRelativeDate(date)
        const first = new Date(relDate)
        first.setMonth(first.getMonth() - 4)
        const last = new Date(relDate)
        last.setMonth(last.getMonth() + 4)
        let result = []
        for (let i = 0; i < trails.length; i++) {
            let trail = trails[i]
            const buzz = await googleTrends.interestOverTime({
                keyword: trail.name,
                startTime: first,
                endTime: last
            })
            const info = JSON.parse(buzz).default.timelineData.find(day => {
                let thisDate = new Date(day.formattedTime)
                if (thisDate.getFullYear() === relDate.getFullYear() &&
                thisDate.getMonth() === relDate.getMonth() &&
                thisDate.getDate() === relDate.getDate()) {
                    return day
                }
            })
            info ? result.push({ ...trail, buzz: info.value}) : result.push({ ...trail, buzz: null})
            
        }
        // console.log(relDate)
        return result
        
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

module.exports = {
    getBuzz
}