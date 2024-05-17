//let say we are linking the database with the products that we are gonna be deal with
const mongoose = require('mongoose')

// Now initializing the SCHEMA for the model to integrate it in the database
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    },
    //creating timeStamps to determine when data is created or updated or modified
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;