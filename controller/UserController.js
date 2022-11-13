const UserSchema = require('../model/User');
const signup = (req, resp) => {
    const user = new UserSchema({
        email: req.body.email,
        password: req.body.password,
        fullName: req.body.fullName
    });

    UserSchema.findOne({email: req.body.email}).then(existsData => {
        if (existsData === null) {
            user.save().then(result => {
                resp.json({data: {status: 201, message: "Registered", result}});
            }).catch(error => {
                console.log(error);
                resp.json(error);
            })
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