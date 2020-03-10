const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("<h1>home</h1>");
});

router.get("/:page", (req, res) => {
  res.send(`<h1>${req.params.page}</h1>`);
});

module.exports = router;
