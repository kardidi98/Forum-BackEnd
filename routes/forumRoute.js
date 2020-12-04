let express = require("express");
let router = express.Router();
let forumController = require("../controllers/forumController");

router.get("/forums", forumController.getForums);
router.post("/forums", forumController.addForum);
router.get("/forums/:forumId", forumController.getForumById);
router.get("/forums/title/:forumTitle", forumController.getForumByTitle);
router.put("/forums/:forumId", forumController.modifyForum);
router.delete("/forums/:forumId", forumController.deleteForum);

module.exports = router;