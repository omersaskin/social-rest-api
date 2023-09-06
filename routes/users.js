const router = require("express").Router();

router.get("/", async (req, res) => {
   res.send("Hey its user route") 
})

module.exports = router