const mongoose = require("mongoose");
const new_mong = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    tags: [{
        type: String,
    }],
    category: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});
const postSchema = new mongoose.model("postSchema", new_mong);
module.exports = postSchema;
