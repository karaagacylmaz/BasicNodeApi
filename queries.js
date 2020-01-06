const Pool = require('pg').Pool
const pool = new Pool({
    user: '', //db user
    host: '', //db host etc: 127.0.0.1
    database: '', //db name
    password: '', // password
    port: 0000 // db port etc: 5432 for postgresql
})

const getAllVehicleDisplay = (request, response) => {
    pool.query('select * from vehicles', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getVehicleDisplayById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('select * from vehicles where vehicle_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getAllVehicleDisplay,
    getVehicleDisplayById
}