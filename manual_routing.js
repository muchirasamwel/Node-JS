let dev=require("./mycustommodules")
let http = require('http');
let fs=require("fs");
let data1="";
fs.readFile("./404.html",function (err,data) {
    data1=data;
});
http.createServer(function (req, res) {
    let url=req.url;
    let file="";
    if(url=="/"){
        file="./pages/index.html";
    }
    else if(url=="/home")
    {
        file="./pages/index.html";
    }
    else if(url=="/about")
    {
        file="./pages/about.html";
    }
    else if(url=="/contact")
    {
        file="./pages/contact.html";
    }
    fs.readFile(file, function(err, data) {
        let exist=fs.existsSync(file);
        if(!exist)
        {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data1);
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
    console.log("SERVER UP ON localhost:8000 - courtesy of "+dev.devName()+"");
}).listen(8000);
