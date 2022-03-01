var express = require('express');
var router = express.Router();

const users = [];

router.get('/', function(req, res, next) {
  res.send(
      users
        .sort((user1, user2) => {
            if (user1.score < user2.score) {
                return 1;
            }
            if (user1.score > user2.score) {
                return -1;
            }
            return 0;
        })
        .slice(0,10)
  );
});

router.post('/score', function(req, res, next) {
    const {score, userName} = req.body;
    users.push({score, userName});
    res.send({success:true});
});

module.exports = router;
