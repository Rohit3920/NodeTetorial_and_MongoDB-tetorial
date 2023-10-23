const express = require("express")
const connMySQL = require("./configMySQL")

const app = express();
app.use(express.json())

app.get("/", (req, resp) => {
    connMySQL.query("select * from products", (err, result) => {
        var data = err ? err : result;
        console.log(data);
        resp.send(data);
    })
})

app.post("/upload", (req, resp) => {
    //...............................Static Data.................................
    // const insert = {
    //     name: "Rohan",
    //     country: "INDAIN",
    // }

    //...............................Pass Data using POSTMAN.................................
    const insert = req.body;


    connMySQL.query("INSERT INTO products SET ?", insert, (err, resl, feilds) => {
        if (err) throw err
        resp.send(resl);
    })
});
app.listen(5400);