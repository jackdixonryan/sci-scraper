const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  }, 
  link: {
    type: String, 
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  comments: {
    type: String
  }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;