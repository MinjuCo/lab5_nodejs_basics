const create = (req, res) => {
    res.json({
        "status": "success",
        "message": "Posting a new message for user Pikachu"
    });
}

module.exports.create = create;