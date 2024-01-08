const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const productRoute = require('./src/routes/api')
const app = express()

dotenv.config()

//middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(cors({}))
//route middleware
app.use('/api/v1',productRoute)

//db and server
const port = process.env.PORT || 8000
mongoose.connect("mongodb+srv://monir:1234@cluster0.bzyuo9d.mongodb.net/contact?retryWrites=true&w=majority").then(()=>{
    console.log(`DB Connected in ${mongoose.connection.host}`);
}).catch((err)=>console.log(err)).finally(()=>{
    app.listen(port,()=>console.log(`server runnin in ${port}`))
})
