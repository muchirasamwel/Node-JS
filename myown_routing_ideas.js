let http = require('http');
let dev=require("./mycustommodules");
let fs=require("fs");
let url = require('url');

let data1="";
fs.readFile("./404.html",function (err,data) {
    data1=data;
});
http.createServer(function (req, res) {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("WOW COME SEE The Server Started ");
        res.end();

    console.log("SERVER UP ON localhost:8000 - courtesy of "+dev.devName()+"");
}).listen(8000);
