const Message = require('../../../models/Message');

const create = (req, res, next) => {
    console.log(req.body);

    let message = new Message();
    message.text = req.body.text;
    message.user = req.body.user;

    console.log(message.text);
    console.log(message.user);
}

module.exports.create = create;