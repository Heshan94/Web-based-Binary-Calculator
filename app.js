const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(path.join(__dirname,'')));
app.use('/css',express.static('css'));

app.get('/',(req,res)=>{
    res.sendFile('','index.html');
});

app.listen(3000);