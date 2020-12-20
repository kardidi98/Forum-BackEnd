let express = require("express");
let router = express.Router();
let userController = require("../controllers/userController");

router.get("/users", userController.getUsers);
router.post("/users/register", userController.addUser);
router.post("/users/login", userController.login);
router.get("/users/:userId", userController.getUserById);
router.get("/users/email/:email", userController.getUserByEmail);
router.put("/users/:userId", userController.modifyUser);
router.delete("/users/:userId", userController.deleteUser);

module.exports = router;