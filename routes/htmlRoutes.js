const router = require("express").Router();
const path = require("path");
const auth = require("../middleware/auth");
const randomfacts = require("../public/js/randomfacts");


// user authorized views - they all use the "auth" middleware
router.get("/", auth, (req, res) => {
  const randomFact = randomfacts.rfacts[Math.floor(Math.random() * randomfacts.rfacts.length)];
  const randomImage = randomfacts.rimages[Math.floor(Math.random() * randomfacts.rimages.length)];
  console.log(randomImage.img);
  const randomQuote = randomfacts.rquotes[Math.floor(Math.random() * randomfacts.rquotes.length)];
  res.render("dashboard", {
    fact:randomFact.fact,
    img:randomImage.img,
    quote:randomQuote.quote
  });
});
router.get("/sightings", auth, (req, res) => res.render("sightings"));
// router.get("/user/profile", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/profile.html")));

// login and register forms view
router.get("/user/login", (req, res) => res.render("login"));
router.get("/user/register", (req, res) => res.render("register"));

module.exports = router;