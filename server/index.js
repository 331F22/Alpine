const express = require('express')
const bodyParser = require ('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')
const dotenv = require('dotenv').config()

const db = mysql.createPool({ // createConnection
    host: 'localhost',
    user: "user57",
    password: "57pass",
    database: "db57",
    port: "3306"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))



// READ
app.get("/api/read", (req, res) => {
    const sqlSelect = "SELECT * FROM volunteers;"
    db.query(sqlSelect, (err, result) => { 
        if(err){
            throw err;
        }
        res.send(result);
    })
})

// CREATE
app.post("/api/create", (req, res) => {
    const fn = req.body.first
    const ln = req.body.last
    const ea = req.body.email
    const sqlInsert = "INSERT INTO volunteers (first_name, last_name, email_address) VALUES (?,?,?);"
    db.query(sqlInsert, [fn, ln, ea], (err, result) => {
        if(err) throw err
        console.log("Server posted: ", fn, ln)
        res.send(result)
    })
}) 

// DELETE
app.delete("/api/delete", (req, res) => {
    const volunteerIDs = req.body.volunteers;
    console.log(volunteerIDs)
    const sqlDelete = "DELETE FROM volunteers WHERE id IN (?)";
    db.query(sqlDelete, [volunteerIDs], (err, result) => {
        if(err) throw err
        console.log("Server: deleted: ", volunteerIDs)
        res.send(result)
    }) 
})

// UPDATE
app.put("/api/update", (req, res) => {
    const updatedVolunteer = req.body.volunteer;
    const sqlUpdate = "UPDATE volunteers SET first_name = ?, last_name = ?, email_address = ? WHERE id = ?"
    db.query(sqlUpdate, [updatedVolunteer.first_name, updatedVolunteer.last_name, updatedVolunteer.email_address, updatedVolunteer.id], (err, result)=>{
        if(err)  throw err;
        console.log(`Server: Updated volunteer ${updatedVolunteer.id} to ${updatedVolunteer}`)
        res.send(result)
    })
})

const PORT = 3000 //process.env.EXPRESSPORT;
const msg = `Running on PORT ${PORT}`
app.get("/", (req, res) => {
    res.send(`<h1>Express Server</h1><p>${msg}<p>`)
})
app.listen(PORT, () => {
    console.log(msg)
})

