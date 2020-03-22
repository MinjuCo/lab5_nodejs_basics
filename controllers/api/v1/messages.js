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
        }
    });
}

const getId = (req, res) => {
    console.log(req.params.id);
    //let msgId = req.params.id
    //Message.findById();
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