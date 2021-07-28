const PORT = 5000
const express = require('express')
const path = require('path')

app = express()

app.get('/', (req, res) => {
    res.send('<a href="login"> Login </a> <br> <a href="register"> Register </a>')
})


app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'))

})

app.get('/register', (req, res) => {
    res.send('<h1>Register Under Construction</h1>')

})

app.post('/', (req, res) => {
    //How to Process Post Params Here
    res.send('Authenticated')
})

app.listen(PORT, () => {
    console.log('Server Listening...on Port 5000')
})
