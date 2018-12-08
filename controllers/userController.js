const db = require("../models")

// Defining methods for the userController
module.exports = {
  findOne: function(req, res) {
    console.log("Users Controller FindOne")
    db.users
      .find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  findById: function(req, res) {
    db.users
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    console.log("Users Controller Create")
    console.log(req.body)
    db.users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  update: function(req, res) {
    console.log("Users Controller Update")
    db.users
      .findOneAndUpdate({ _id: req.params._id }, req.body )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  remove: function(req, res) {
    console.log("Users Controller Remove")
    db.users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
