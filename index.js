const express = require('express')
const bodyParser = require('body-parser')
const app =  express()
const port = 1994
const db = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request,response) => {
    response.json({info : 'Node.js, Express and Postgres API'})
})

app.get('/vehicles',db.getAllVehicleDisplay)
app.get('/vehicle/:id',db.getVehicleDisplayById)

app.listen(port,() => {
    console.log(`App running on port ${port}`)
})

