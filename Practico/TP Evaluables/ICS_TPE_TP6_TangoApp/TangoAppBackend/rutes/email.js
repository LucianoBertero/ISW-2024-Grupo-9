const { Router } = require("express");

const { email } = require("../controllers/email");

const router = Router();

router.get("/", [], email);

module.exports = router;
