let express = require("express");
let router = express.Router();
let themeController = require("../controllers/themeController");

router.get("/themes", themeController.getThemes);
router.post("/themes", themeController.addTheme);
router.get("/themes/titre/:titreTheme", themeController.getThemeByTitre);
router.get("/themes/:themeId", themeController.getThemeById);
router.get("/themes/forums/:forumId", themeController.getThemeByForumId);
router.put("/themes/:themeId", themeController.modifyTheme);
router.delete("/themes/:themeId", themeController.deleteTheme);

module.exports = router;
