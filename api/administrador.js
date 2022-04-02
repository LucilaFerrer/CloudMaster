var express = require("express");
var router = express.Router();
var listajson = require("./administradorJson");

router.get("/", function(req, res){
    res.json(listajson);
});

module.exports = router;
