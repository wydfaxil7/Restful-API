const express = require('express')
const mongoose = require('mongoose')
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



mongoose.connect('mongodb+srv://wydfaxil07:Aprinov-1428@wydfaxilapi.9k2ck6z.mongodb.net/NODE-Restful-API')
.then(() => {
    //connection checking
    console.log('Succesfully connected to MongoDB')
    app.listen(3000, ()=> {
        console.log('Node API app is running on port 3000')
    });
}) .catch((error) =>{
    console.log(error)
})