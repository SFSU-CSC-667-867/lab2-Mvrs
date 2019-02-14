const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

const addFunction = (a, b) => {
    return a + b
}

app.get('/add', (req, res) => res.send(`The result of 10 + 10 is ${addFunction(10, 10)}`))
app.get('/hello', (req, res) => {
    console.log(req.query)
    res.send(`Hello ${req.query.name}`)
})

app.get('/network', (req, res) => {
    axios.get('http://localhost:3001/world')
    .then((networkResponse) => {
        res.send(networkResponse.data)
    })
    .catch(() => {
        res.send('Did not work')

    })
})

app.listen(port, () => console.log(`This port is running on localhost: ${port}`) )

console.log('wassup dude');