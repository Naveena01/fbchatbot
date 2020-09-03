
var express=require("express");
var app = express();

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.post("/riskpredictor",function(req,res)
{	
	console.log(req.body.taskname)
	console.log(req.body.age)
	console.log(req.body.hemo)
	console.log(req.body.dys)
	console.log(req.body.uncon)
	console.log(req.body.noc)
	console.log(req.body.cancer)
	console.log(req.body.nlr)
	console.log(req.body.ld)
	console.log(req.body.db)
	res.send(req.body.cancer)
});

app.get("/",function(req,res)
{	
res.sendFile(__dirname+"/form.html")
});



app.set('port',process.env.PORT||5000)

app.listen(app.get('port'),function()
{
	console.log("SERVER STARTED SUCCESSFULLY................")
})


function covid(input_X, input_A, input_H, input_D, input_Un, input_noc, input_ch, input_N, input_L, input_DB){
  const cf_X=1.2205;
  const cf_A=0.0276;
  const cf_H=1.5116;
  const cf_D=0.632;
  const cf_Un=1.5494;
  const cf_noc=0.4668;
  const cf_ch=1.4037;
  const cf_N= 0.0562;
  const cf_L= 0.0024;
  const cf_DB= 0.1376;
   
   var sum =(input_X*cf_X)+(input_A*cf_A)+(input_H*cf_H)+(input_D*cf_D)
   +(input_Un*cf_Un)+(input_noc*cf_noc)+(input_ch*cf_ch)+(input_N*cf_N)
   +(input_L*cf_L)+(input_DB*cf_DB)-6.6127;

   var risk_score= math.exp(sum)/(1+math.exp(sum));
   return risk_score
	// body...
}

var tmp_X = document.getElementById(“customSwitch1”).value;
var tmp_A = document.getElementById(“customSwitch2”).value;
var tmp_H = document.getElementById(“customSwitch3”).value;
var tmp_D = document.getElementById(“customSwitch4”).value;
var tmp_Un = document.getElementById(“customSwitch5”).value;
var tmp_noc = document.getElementById(“customSwitch6”).value;
var tmp_ch = document.getElementById(“customSwitch7”).value;
var tmp_N = document.getElementById(“customSwitch8”).value;
var tmp_L= document.getElementById(“customSwitch9”).value
var tmp_DB= document.getElementById(“customSwitch10”).value;

var score= covid(tmp_X, tmp_A, tmp_H, tmp_D, tmp_Un, tmp_noc, tmp_ch, tmp_N, tmp_L, tmp_DB);
var per_score= score*100;
if(per_score<1.7){
	console.log("Low Risk")
}else if(per_score>1.7 & per_score<40.04){
	console.log("Medium Risk")
}else{
	console.log("High Risk")
}