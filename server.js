const express = require('express')
const app = express()

/*moment().format('MMMM Do YYYY, h:mm:ss ');*/
/*var d = new Date();*/
app.get('/', (req, res) => {
    res.send("hello")
})
app.get('/greet', (req, res) => {
    res.send(`hello ${req.query.name}`)
})
let todos=[]

app.get('/showtodo', (req, res) => {
    res.send(todos)
})
app.get('/addtodo', (req, res) => {
    todos.push(req.query.task)
    res.redirect('/showtodo')
})



app.listen(4000)