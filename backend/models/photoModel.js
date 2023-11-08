
const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    name : String,
    description : String,
    price : Number,
    category: String,
    image: String,
    user: {type : Types.ObjectId, ref : 'user'},
    createdAt: Date,
});

module.exports = model('photo',myschema);