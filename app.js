const express = require('express')

const app = express()

app.use(express.static('public'))



app.get('/', (res,req,next) => {
    res.sendFile(__dirname+'views/home.html')
})

app.get('/about', (res,req,next) => {
    res.sendFile(__dirname+'views/about.html')
})

app.get('/works', (res,req,next) => {
    res.sendFile(__dirname+'views/works.html')
})


app.listen(1234)
