const Message = require('../../../models/Message');

const getAll = (req, res) => {
    let user = req.query.user;
    if(user){
        Message.find({user: user}, (err, docs) => {
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
                    "message": "Could not get messages for user " + user
                });
            }
        });
    }else{
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

const update = (req, res) => {
    let text = req.body.text;
    let msgId = req.params.id;
    Message.findOneAndUpdate({
        _id: msgId
    },{
        text: text
    }, {new: true}).then(doc => {
        res.json({
            "status": "success",
            "message": doc
        });
    }).catch(err => {
        res.json({
            "status": "error",
            "message": err
        });
    });
}

const remove = (req, res) => {
    let msgId = req.params.id;
    Message.findOneAndDelete({
        _id: msgId
    }).then(result => {
        res.json({
            "status": "success",
            "message": "The message was removed"
        });
    }).catch(err => {
        res.json({
            "status": "error",
            "message": err
        });
    });
}

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;