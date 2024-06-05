var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* POST request */
router.post('/post', (req, res,next) => {
  res.send('Got a POST request');
});

/* PUT request */
router.put('/put', (req, res,next) => {
  res.send('Got a PUT request at /user');
});

/* DELETE request */
router.delete('/delete', (req, res) => {
  res.send('Got a DELETE request at /user');
});
module.exports = router;
