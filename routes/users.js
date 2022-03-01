var express = require('express');
var router = express.Router();

const users = [];

router.get('/', function(req, res, next) {
  res.send(users);
});

router.post('/score', function(req, res, next) {
    const {score, userName} = req.body;
    users.push({score, userName});
    res.send({success:true});
});

module.exports = router;
