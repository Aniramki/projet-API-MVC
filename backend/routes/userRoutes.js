const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Routes
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);


module.exports = router;