const UserSchema = require('../model/User');
const signup=(req,resp)=>{
    const user= new UserSchema({
        email: req.body.email,
        password: req.body.password,
        fullName: req.body.fullName
    });
    user.save().then(result=>{
        resp.json({data:{status:201,message:"Registered"}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};
module.exports = {
    signup
}