
const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    title : String,
    description : String,
    price : Number,
    category: String,
    image: String,
    seller: {type : Types.ObjectId, ref : 'main'},
    createdAt: Date,
});

module.exports = model('photo',myschema);