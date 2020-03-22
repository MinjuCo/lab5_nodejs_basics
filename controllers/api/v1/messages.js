const Message = require('../../../models/Message');

const getAll = (req, res) => {
    Message.find({}, (err, docs) => {
        if(!err){
            res.json({
                "status": "success",
                "message": {
                    docs
                }
            });
        }else{
            res.json({
                "status": "error",
                "message": "Could not get messages from the database."
            });
        }
    });
}

const getId = (req, res) => {
    let msgId = req.params.id
    Message.findById({_id: msgId}, (err, doc) => {
        if(!err){
            res.json({
                "status": "success",
                "message": doc
            });
        }else{
            res.json({
                "status": "error",
                "message": "Could not find message with id " + msgId 
            });
        }
    });
}

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

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;