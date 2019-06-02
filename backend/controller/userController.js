const userSchema = require('../model/userModel');
const bcrypt = require('bcrypt-nodejs');

const register = (req, res) => {

    var fullName = req.body.fullName;
    var email = req.body.email;
    var password = req.body.password;

    let hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    let user = new userSchema({
        fullName: fullName,
        email: email,
        password: hash
    })

    user.save((err, result) => {
        if (err) {
            // res.json({ status: false, msg: "error found", error: err })
            res.status(404).send(['Internal server error'])
        } else {
            res.json({ status: true, msg: "user signup successfully", data: result })
        }
    })

}

module.exports = {
    register
}