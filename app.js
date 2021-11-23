const express = require('express')
const bodyParser = require('body-parser')
const config = require('./app/private/config');
const app = express()
app.use(bodyParser.json());
//middleware

const introduction = require('./app/routes/introduction')
app.use('/introduction', introduction)



app.get('/', (req, res) => {
    res.send('testing root')
})

/** Server deployment **/
const port = config.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port: ${port} `)
})
