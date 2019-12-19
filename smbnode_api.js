let express=require('express');
let apidata=require("./apidatastore")
let app=express();
let port=8000;



app.get("/smb_api/accounts", (req, resp) => {
    resp.json(apidata.accounts);
});

app.get("/smb_api/accounts/:id", (req, resp) => {
    const accountId = Number(req.params.id);
    const getAccount = apidata.accounts.find((account) => account.id === accountId);

    if (!getAccount) {
        resp.status(500).send('Account not found.')
    } else {
        resp.json(getAccount);
    }
});
app.post("/smb_api/accounts",(req,resp)=>{
    resp.status(500).send('testing api' + req);
});
//keeps my image alive :)
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
