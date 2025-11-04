var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send({"name": "Antonin", "age": 21});
});

module.exports = router;
