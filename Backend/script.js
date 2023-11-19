const express = require ("express");

const bodyParser  = require("body-parser");



const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.get("/home",(req,res) =>{
    res.send("hello world to all !!!")
});

app.listen(PORT, (req,res) => {
    console.log(`server is running on http://localhost:${PORT}`);
})

