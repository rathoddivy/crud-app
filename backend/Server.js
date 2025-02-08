const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const router = require('./Routes/Todoroutes');

const cors = require('cors');
const app=express();

const PORT=process.env.PORT || 5000;  //IF WE HAVE PORT SO USE THAT ANOTHER USE 5000


app.use(express.json());
app.use(cors());




//connect mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB Connected ...'))
.catch((err)=>console.log(err));


app.use('/api',router);

app.listen(PORT,()=> console.log(` Server Listening On ${PORT} ...` ) );


