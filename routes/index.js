var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'admin'
});
connection.connect(function (err) {
  if(!err){
    console.log("myaql db connected.");
  }else{
      console.log("error!");
  }
});


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Himanshu'
  });
  connection.query('select * from login',function (error,document) {
      console.log(document[0].userid);
  });
});

router.post('/',function (req,res) {
  connection.query("insert into login values ('"+req.body.userid+"','"+req.body.password+"')");
  //?",{userid:req.body.userid,password:req.body.password});
  res.redirect('/');
});

module.exports = router;
