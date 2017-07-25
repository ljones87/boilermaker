const express = require('express') 
const app = express() 
const volleyball = require('volleyball') 
const path = require('path') 
const bodyParser = require('body-parser')
const session = require('express-session')
const db = require('./db/index')
const passport = require('passport')

// logging middleware for debugging
app.use(volleyball) 

// parsing middleware to use req.body in routes
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: true})) 

// setting up static middleware
app.use(express.static(path.join(__dirname, '../public'))) 

// prefixing /api
app.use('/api', require('./api'))

const SequelizeStore = require('connect-session-sequelize')(session.Store)
const dbStore = new SequelizeStore({db})

dbStore.sync()

app.use(session({
    secret: process.env.SESSION_SECRET || 'insecure secret!',
    store: dbStore,
    resave: false,
    saveUninitialized: false
}))

// initialized passport
app.use(passport.initialize())
app.use(passport.session()) // consumes session object and attaches user to the req object

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


