const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, default: 5},

  user: {type: Schema.Types.ObjectId, ref: 'User'}, 
  userName: String, 
  userAvatar: String
}, {
});

const thingSchema = new Schema({
  name: {
    type: String,
  },

  introduction: {
    type: String,

  },
  address: {
    type: String,

  },

  openingHours:{
    type: String,

  },

  image: {
    type: String,

 },
});

module.exports = mongoose.model('Thing', thingSchema);