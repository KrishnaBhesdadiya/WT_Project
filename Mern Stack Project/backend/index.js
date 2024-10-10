const express = require('express');
const mongoose = require('mongoose');
const Product = require('./Product');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded());

app.get('/home',(req,res)=>{
    res.send("welcome");
});
const connectionString ="mongodb+srv://"+process.env.DBUSER+":"+process.env.DBPASS+"@cluster0.dgz8t.mongodb.net/wt_project"
mongoose.connect(connectionString).then(() =>{
    console.log("Connected with cloudDB");

    //get All
    app.get('/products',async (req,res) => {
        const ans = await Product.find();
        res.send(ans);
    });

    //get By Id
    app.get('/products/:id',async (req,res) => {
        res.send(await Product.findOne({id:req.params.id}));
    })

    //Insert
    app.post('/products/add',async (req,res) =>{
        const pro = new Product({
            ...req.body
        });
        const ans = await pro.save();
        res.send(ans);
    });

    //Update
    app.patch('/products/edit/:id',async (req,res) => {
        const pro = await Product.findOne({id:req.params.id});
        pro.name = req.body.name;
        res.send(await pro.save());
    });

    //Delete
    app.delete('/products/:id',async (req,res) =>{
        res.send(await Product.deleteOne({id:req.params.id}));
    });
    
    app.listen(process.env.PORT, () => {
        console.log("Server listening @ " + process.env.PORT);
    });
});

