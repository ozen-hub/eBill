const UserSchema = require('../model/User');
const bcrypt = require('bcrypt');

const signup = (req, resp) => {


    UserSchema.findOne({email: req.body.email}).then(existsData => {
        if (existsData === null) {

            bcrypt.hash(req.body.password, 10, function(err, hash) {

                const user = new UserSchema({
                    email: req.body.email,
                    password: hash,
                    fullName: req.body.fullName
                });

                user.save().then(result => {
                    resp.json({data: {status: 201, message: "Registered", result}});
                }).catch(error => {
                    console.log(error);
                    resp.json(error);
                })

            });

        } else {
            resp.status(403).json({data: {status: 403, message: "Already exists"}});
        }
    }).catch(error => {
        console.log(error);
        resp.json(error);
    })


};
module.exports = {
    signup
}