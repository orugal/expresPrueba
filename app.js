var express 	= require("express");
var app 		= express();
var tools 		= require("./funciones");
app.set("view engine","jade");
app.get("/",function(req,res){
	//console.log(tools.nombres());
	res.render("index",
	{
		hola:"Hola Mundo!!",
		func:tools,
		nom:tools.nombres()
	});
});
app.listen(8081);
