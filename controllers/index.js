const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Classified',
    message: 'Free Car Classified'
  });
});
router.get('/pageone', function(req, res, next) {
    res.render('pageone', {
        title: 'Classified',
        message: ''
    });
});
router.get('/pagetwo', function(req, res, next) {
    res.render('pagetwo', {
        title: 'HatchBack',
        message: ''
    });
});
router.get('/pagethree', function(req, res, next) {
    res.render('pagethree', {
        title: 'SUV',
        message: 'Shop SUV'
    });
});
router.get('/pagefour', function(req, res, next) {
    res.render('pagefour', {
        title: 'Convertible',
        message: ''
    });
});
router.get('/pagefive', function(req, res, next) {
    res.render('pagefive', {
        title: 'Sports',
        message: ''
    });
});

// // GET: /about
// router.get('/about', function(req, res, next) {
//     // load the about view
//     res.render('about', {
//       title: 'About car tracker',
//       message: 'this app is built with the mean stack.'
//     });
// });
module.exports = router;






















