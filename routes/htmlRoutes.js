const router = require("express").Router();
const path = require("path");
const auth = require("../middleware/auth");


// user authorized views - they all use the "auth" middleware
router.get("/", auth, (req, res) => res.render("dashboard"));
router.get("/sightings", auth, (req, res) => res.render("sightings"));
router.get("/user/profile", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/profile.html")));

// login and register forms view
router.get("/user/login", (req, res) => res.sendFile(path.join(__dirname, "../public/login.html")));
router.get("/user/register", (req, res) => res.sendFile(path.join(__dirname, "../public/register.html")));

module.exports = router;