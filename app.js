
// ROUTING BASED ON EXPRESS
let express = require('express')
let app = express()
const port = 8000;

app.get('/', function(req, res){
    res.sendFile("./pages/index.html",{ root: __dirname });
});
app.get('/home', (req, res) => res.sendFile("./pages/index.html",{ root: __dirname }));
app.get('/contact', (req, res) => res.sendFile("./pages/contact.html",{ root: __dirname }));
app.get('/about', (req, res) => res.sendFile("./pages/about.html",{ root: __dirname }));
app.get('/assets/images/404.jpg', (req, res) => res.sendFile("./assets/images/404.jpg",{ root: __dirname }));

app.use(function(req, res) {
    let err = new Error('Not Found');
    err.status = 404;
        console.log("No image in this path, throw error");
        res.sendFile("./pages/404.html",{ root: __dirname });
});

app.listen(port, function() {
    console.log('NODE SERVER RUNNING on localhost:'+port);
})
