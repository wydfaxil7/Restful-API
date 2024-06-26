const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModels')
const app = express()

// using the express middleware to let us interact with the Database
app.use(express.json());

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

// now here is the procedure on how we can use the product model

// CREATING data
app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// FETCH data
app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({}); // it will fetch all products present in database
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})

    }
})

// FETCH data by ID
app.get('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id); 
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// UPDATE data
app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body); //req.body is the data that is sent from clients
        
        if(!product){
            return res.status(404).json({message: 'cannot find any product with this ID'});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// DELETE data by id
app.delete('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id); 
        if(!product){
            return res.status(404).json({message: 'cannot find any product with this ID'})
        }    
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
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