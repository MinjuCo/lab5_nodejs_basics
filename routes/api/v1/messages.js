const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    res.json({
        "status": "success",
        "message": "Posting a new message for user Pikachu"
    });
})

module.exports= router;