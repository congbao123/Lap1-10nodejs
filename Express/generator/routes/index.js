var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST request */
router.post('/user', (req, res) => {
  res.send('Got a POST request');
});

/* PUT request */
router.put('/user/put', (req, res) => {
  res.send('Got a PUT request at /user');
});

/* DELETE request */
router.delete('/user/delete', (req, res) => {
  res.send('Got a DELETE request at /user');
});
module.exports = router;
