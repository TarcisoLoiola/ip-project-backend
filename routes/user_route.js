const express = require('express');
const router = express.Router();
const db = require('../models');
// const passport = require("passport");

/* GET users listing. */
router.get('/users', (req, res, next) => {
  db.users
    .findAll({})
    .then(data => res.json(data))
    .catch(error => res.json(error))
});

module.exports = router