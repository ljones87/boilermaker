const express = require('express') 
const app = express() 
const volleyball = require('volleyball') 
const path = require('path') 
const bodyParser = require('body-parser') 

// logging middleware for debugging
app.use(volleyball) 

// parsing middleware to use req.body in routes
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: true})) 

// setting up static middleware
app.use(express.static(path.join(__dirname, '../public'))) 

// prefixing /api
app.use('/api', require('./api'))

app.use((err, req, res, next) => {
    err.status = err.status || 500
    res.send('fail whale')
})

// just remember this sucker here.. flying solo
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')) 
})

app.listen(8080, () => {
    console.log("Bro! you're listening on port 8080!")
})


