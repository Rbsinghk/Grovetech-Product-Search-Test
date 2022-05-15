const express = require('express');
const app = express();
require('./db/conn')
const postSchema = require('./models/productSchema')
const port = process.env.PORT || 1000;

app.use(express.json());

// Insertion of a products
app.post('/v1/products', async (req, res) => {
    try {
        const newPost = new postSchema(req.body);
        const reg = await newPost.save();
        res.status(201).send(reg)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Search of products by category
app.get('/v1/products/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const get = await postSchema.find({ category })
        res.send(get)

    } catch (error) {
        res.send(error)
    }
})

app.listen(port, () => {
    console.log(`port is running at ${port}`)
})