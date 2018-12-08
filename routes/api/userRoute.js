const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/user/find")
  .get(userController.findOne)

router.route("/user/create")
  .post(userController.create)

router.route("/update/:id")
  .put(userController.update)

router.route("/remove/:id")
  .destroy(userController.remove)

module.exports = router;