let express = require("express");
let router = express.Router();
let postController = require("../controllers/postController");

router.get("/posts", postController.getPosts);
router.post("/posts", postController.addPost);
router.get("/posts/:postId", postController.getPostById);
router.put("/posts/:postId", postController.modifyPost);
router.delete("/posts/:postId", postController.deletePost);

module.exports = router;