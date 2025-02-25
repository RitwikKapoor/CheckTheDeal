const express = require('express')
const app = express()
const errorMiddleware = require("./middlerware/error")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
const path = require('path')

// dotenv.config()
dotenv.config({path:"config/config.env"})



app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser());
app.use(fileUpload());

//route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");


app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1", payment);


app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})

// if(process.env.NODE_ENV!=="PRODUCTION"){
//     require("dotenv").config({path:"backend/config/config.env"})
// }


//middleware for errors

app.use(errorMiddleware)

module.exports = app