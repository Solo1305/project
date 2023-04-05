const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    /*
        name,
        description,
        price,
        category,
        image, multiple images for showcase gallery,
        stock,
        createdAt
    */
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name can not be more than 100 characters']
    },

    description: {
        type: String,
        required: [true, 'Please enter product description'],
        maxLength: [500, 'Product description can not be more than 500 characters']
    },

    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        default: 0.0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Books',
                'T-Shirts',
                'Accessories'
            ],
            message: 'Please select a category'
        }
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);