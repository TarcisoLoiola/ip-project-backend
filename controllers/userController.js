const db = require('../models')
const data = require('../users')

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    console.log('Users Controller FindAll')
    data.find({
      where: {
        id: '5c0fed9d25eaeacb1fd5da8c'
      }
    })
    .then(data => res.json(data))
    .catch(err => res.json('Error 404'))
  },

  findById: function(req, res) {
    console.log('Users Controller FindById')
    return res.json('Users Controller FindById')
  },

  create: function(req, res) {
    console.log('Users Controller Create')
    data.push(req.body)
    return res.json(data)
  },

  update: function(req, res) {
    console.log('Users Controller Update')
    return res.json('Users Controller Update')
  },

  remove: function(req, res) {
    console.log('Users Controller Remove')
    return res.json('Users Controller Remove')
  }
}
