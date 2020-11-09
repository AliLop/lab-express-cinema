const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET /movies page */
router.get('/movies', (req, res) => {
  Movie.find()
  .then((allTheMoviesFromDB) => {
    console.log(allTheMoviesFromDB)
    res.render('movies', { movies : allTheMoviesFromDB})
  });
});

router.get('/movies/:movieId', (req, res) => {
    let movieId = req.params.movieId;
    console.log(movieId);

    Movie.findById(movieId)
    .then((theOneMovie) => {
        res.render('movie-details', {movie: theOneMovie})
    })
    .catch((err) => {
      console.log( `Error is ${err}`)
      res.render('not-found',  {err});
    })
});

module.exports = router;
