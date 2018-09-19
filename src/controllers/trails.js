const axios = require('axios')

async function trailById (id) {
    const response = await axios.get(`https://www.hikingproject.com/data/get-trails-by-id?ids=${id}&key=200355674-2678e760ceac9155c45dc4d568511bda`)
    return response
}

module.exports = {
    trailById
}