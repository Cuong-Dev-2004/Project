const router = require("express").Router();
const AuthController = require("../app/controllers/AuthController");

// Register User
router.post("/register", AuthController.RegisterUser);
// Sign In
router.post("/Login", AuthController.LoginUser);
// Sign Out
router.post("/logout", AuthController.LogOutUser);
// RefreshToken User
router.post("/RefreshToken", AuthController.RefreshToken);

module.exports = router;
