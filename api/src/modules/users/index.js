const router = require("express").Router();
const userSchema = require("./validator");
const validator = require("../../middlewares/validator");
const {authorize, isAdmin} = require("../../middlewares/auth");
const { findAll, getCurrentUser, createUser, createFavTrack, login, logout } = require("./controller");

router.get("/", authorize, isAdmin, findAll);
router.get("/me", authorize, getCurrentUser);
router.get("/logout", logout);
router.post('/', validator(userSchema), createUser);
router.post('/track/:idTrack', authorize, createFavTrack);
router.post("/login", login);

module.exports = router;