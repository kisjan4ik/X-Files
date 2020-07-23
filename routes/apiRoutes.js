const router = require("express").Router();
const express = require("express")
// use this file to code your API routes

module.exports = function(app) {
app.get("/", function(req, res, next) {
    res.render("#")
})
}
// module.exports = router;