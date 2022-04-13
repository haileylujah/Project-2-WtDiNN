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
    required: true,
  },

  introduction: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  hours: String,

  image: {
    type: String,
    required: true,
  },

  reviews: [reviewSchema],

});

module.exports = mongoose.model('Thing', thingSchema);