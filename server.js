const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const mongoose = require('mongoose');
const db = require('./models');
const PORT = process.env.PORT || 8080;
// const controller = require('./controllers/articleController');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// cheerio needs to look for class cIugan to get reddit text.

app.get('/api/:ology', (req, response) => {
  const ology = req.params.ology;
  request(`https://www.reddit.com/r/${ology}`, (err, res, body) => {
    let articles = [];
    if (err) console.error(err);
      console.log('Status code:', res && res.statusCode);
      if (res.statusCode !== 404) {
      const $ = cheerio.load(body);
      $('article').each(function(i, elem){
        let article = {};
        article.title = $(this)
          .children('div')
          .children('div')
          .children('span')
          .children('a')
          .children('h2')
          .text();
        article.comments = $(this)
          .children('div')
          .children('div')
          .children('span')
          .children('a')
          .attr('href');
        article.text = $(this)
          .children('div')
          .children('div')
          .children('div')
          .children('div')
          .children('div')
          .children('a')
          .text();
        article.originalLink = $(this)
          .children('div')
          .children('div')
          .children('a')
          .attr('href')
        image = $(this)
          .children('div')
          .children('div')
          .children('a')
          .children('div')
          .attr('style')
          // .text() 
        if (image !== undefined) {
          Parseimage = image.split('(')[1].split(')')[0];
          if (Parseimage !== undefined) {
            article.image = Parseimage;
          }
        }
        articles.push(article);
      });
      response.json(articles);
    }
    else {
      response.json({error: "That's not an ology."});
    }
  });
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/savedarticles');

app.post('/saves/addArticle', (req, res) => {
  console.log('this route just got hit.');
  console.log(req.body);
  console.log(req.body.writer);
  db.Article.create(req.body)
    .then(dbCreation => {
      console.log(dbCreation);
      res.json(dbCreation);
    })
    .catch(error => console.error(error));
});

app.get('/saves/articles', (req, res) => {
  db.Article.find()
    .then(found => res.json(found))
    .catch(err => console.error(err));
});

app.listen(PORT, () => {
  console.log('express running on port', PORT);
});

/* <h2 class="s56cc5r-0 cIujan">Ancient rock carvings in India hint at a lost civilisation from 12,000 years ago.</h2> */