let express = require("express");
let router = express.Router();
let commentController =  require("../controllers/commentController");

router.get("/comments/:postId", commentController.getCommentByPost);
router.get("/comments", commentController.getComments);
router.post("/comments/:postId", commentController.addComment);
router.delete("/comments/:commentId", commentController.deleteComment);
router.put("/comments/:commentId", commentController.modifyComment);

module.exports = router;