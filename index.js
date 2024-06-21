const express =  require("express");

const app = express();

app.use(express.json())

app.get("/test", function(req, res){

    res.json("Hello there")
})

app.listen(8080)