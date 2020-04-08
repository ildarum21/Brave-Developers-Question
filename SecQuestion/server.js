const express = require('express');
const bodyParser =require('body-parser');



const app =express();
var urlencodedParser =bodyParser.urlencoded({extended:false});

app.set('view engine','ejs');
app.use('/public',express.static('public'))



app.get('/',function (req,res) {
    res.render('index',{text:" Выбери оператора и нажми оплатить"});
 });
 app.get('/pagepay/:oper',function (req,res) {
    res.render('pagepay',{operName:req.params.oper});
 });



 app.post('/index',urlencodedParser,function(req,res){
         setTimeout(function(){
            let i =Math.random();
             if(i<0.5){
                res.render('index',{text:"Операция успешна!"});
                console.log(req.body);
            }
             else{
                 return res.render('err');
             }
         },3000)
 })

 



 app.listen(7000);