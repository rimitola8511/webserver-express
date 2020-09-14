const express = require('express')
const app = express()

const hbs = require('hbs')
require('./hbs/helpers')

const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`))

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home', {
        name: 'ricardo'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})