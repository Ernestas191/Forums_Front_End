const express = require("express");
const { result } = require("lodash");
const mysql = require ("mysql");
const cors = require("cors");

const app =express();


app.use(express.json());
app.use(cors());


const db = mysql.createConnection ({
    user:"root",
    host:"localhost",
    password:"java",
    database: "pleasework",
});

app.post("/Reggister",(req, res) =>{

const username = req.body.username
const gmail = req.body.gmail
const password = req.body.password

db.query(
    
    "INSERT INTO Register (username, password, gmail) VALUES (?,?,?) ",
    [username , password , gmail],
    (err, result) => {
        console.log(err);
    }
    );
        });


app.post('/Login' , (req, res) => {
    const username = req.body.username
    const password = req.body.password
    
    db.query(
        
        "SELECT * FROM Register WHERE username = ? AND password = ?",
        [username , password ],
        (err, result) => {

            if(err) {
                res.send({err: err})
            }
                
            if (result.Length > 0) {
                  res.send(result)  
            }else {
                    res.send({message: "Wrong username or password!"});
            }
           
        }
            
        
        );


});


app.listen(8080, () => {
    console.log("running server");
});







