var mongojs = require("mongojs");
var db = mongojs("mongodb://vedha:krishna123@cluster0-shard-00-00-kbuhh.mongodb.net:27017/FBHackathon?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin",["doctors","requests","accepted"]);
var express=require("express");
const env = require('dotenv/config')
var bodyParser=require('body-parser');
var app = express();

// Initialization and setup

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// Routes

app.get("/",function(req,res){
    // Use this route for the front end tasks.
	res.send("Use This Route For Front End Works");
});

app.get("/findDoc/:dept/:loc",function(req,res){
	db.doctors.find({dept:req.params.dept,loc:req.params.loc},function(err,data){
		if(err) throw err
		if(data.length>0){
			res.send({status:"Found the doctor in the requested location",data:data});
		}else{
			res.send(status:"Could not find a doctor in the requested location");
		}
	})
});

app.get("/requestAppointment/:patient_name/:prob_name:/:prob_disc/:docName",function(req,res){
	var patient_details = {
			patient_name:req.params.patient_name,
			prob_name:req.params.prob_name,
			prob_disc:req.params.prob_disc,
			docName:req.params.docName
		}
	db.requests.insertOne(patient_details,function(err,data){
		if(err){
			console.log(err);
		}else{
			res.send({status:"Data successfully inserted"}); // We will get in touch with you if the doctor accepts your request
		}
	});
})


app.listen(process.env.PORT || 4000,function(){
	console.log("Server started at at port no." + process.env.PORT)
})
