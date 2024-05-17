const express = require('express')
const app = express()

//to access the port on browser, we need to make routes
// also we can make multiple routes
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

// checking nodemon working
app.get('/blog', (req, res) => {
    res.send('Hello blog, My name is DevFaxil')
    //nodemon working perfectly
})

app.listen(3000, ()=> {
    console.log('Node API app is running on port 3000')
})