const express = require('express'); // npm i express [if ubuntu,linux,mac] => sudo
// nodemon => keep running => npm i -g nodemon
const bodyParser = require('body-parser'); // npm i body-parser
const mongoose= require('mongoose'); // npm i mongoose
const cors = require('cors') // npm i cors
require('dotenv').config();
const port=process.env.SERVER_PORT; // npm i dotenv
const base_url=process.env.BASE_URL;

//========================
const customerRoute = require('./route/CustomerRoute');
const userRoute = require('./route/UserRoute');
//========================

const app = express();
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/ebill').then(()=>{
    app.listen(port, () => {
        console.log(`server is up & running on port ${port}`);
    });
}).catch(err=>{
    console.log(err);
})

app.post('/',(req,resp)=>{
    console.log(req.body);
    resp.json({data:'success!'});
});
//============================
app.use(base_url+'customer',customerRoute); // http://localhost:3000/api/v1/customer/save
app.use(base_url+'user',userRoute);
//============================