const router = require('express').Router();
const UserController = require('../controllers/userController');
// Matches with '/api/users'
router.route('/user/findall')
.get(UserController.findAll)

router.route('/user/create')
  .post(UserController.create)

router.route('/update/:id')
  .put(UserController.update)

router.route('/remove/:id')
  .delete(UserController.remove)

module.exports = router;