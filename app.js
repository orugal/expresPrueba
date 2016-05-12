var express 	= require("express");
var app 		= express();
var tools 		= require("./funciones");
app.set("view engine","jade");
app.get("/",function(req,res){
	res.render("index",
	{
		hola:"Hola Mundo!!",
		func:tools
	});
});
app.listen(8081);
