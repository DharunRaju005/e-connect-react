const { signup, login,googleAuth } = require("../Controllers/AuthController");
const { checkUser } = require("../Middlewares/AuthMiddleware");

const router = require("express").Router();
router.post("/google-auth",googleAuth);
router.post("/",checkUser);
router.post("/signup", signup);
router.post("/login", login);



module.exports = router;
