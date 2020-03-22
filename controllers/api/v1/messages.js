const Message = require('../../../models/Message');

const create = (req, res, next) => {
    let message = new Message();
    message.text = req.body.text;
    message.user = req.body.user;

    message.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "Could not save message"
            });
        }else{
            res.json({
                "status": "success",
                "message": {
                    "user": doc.user,
                    "text": doc.text
                }
            });
        }
    });
}

module.exports.create = create;