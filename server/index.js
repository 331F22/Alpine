const express = require('express')
const bodyParser = require ('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const dotenv = require('dotenv').config()

const db = mysql.createPool({ // createConnection
    host: 'localhost',
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DATABASE,
    port: process.env.DBPORT
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

// SELECT * FROM volunteers WHERE date_signed < DATE_SUB(NOW(),INTERVAL 1 YEAR) AND first_name=? AND last_name=? AND email_address=?;
// update volunteers set date_signed = now() where first_name=? and last_name=? and email_address=?;


// get date_signed
app.get("/api/checkwaiver", (req, res) => {
    const fn = req.query.first
    const ln = req.query.last
    const ea = req.query.email
    const sqlCheck = "select if(date_signed < now() - interval 1 year,false,true) as Status from volunteers where first_name=? AND last_name=? AND email_address=?;"
    db.query(sqlCheck, [fn, ln, ea], (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
})

// update waiver date
app.put("/api/updatewaiver", (req, res) => {
    const fn = req.body.first
    const ln = req.body.last
    const ea = req.body.email
    const sqlUpdateWaiver = "UPDATE volunteers set date_signed = if((date_signed < now() - interval 1 year OR date_signed=NULL), now(), now()) where first_name=? and last_name=? and email_address=?;"
    db.query(sqlUpdateWaiver, [fn, ln, ea], (err, result)=>{
        if(err)  throw err;
        res.send(result)
    })
})

// CREATE
app.post("/api/create", (req, res) => {
    const fn = req.body.first
    const ln = req.body.last
    const ea = req.body.email
    const ha = req.body.home
    const sig = req.body.home

    // create a mysql compliant time 
    // source: https://stackoverflow.com/questions/5129624/convert-js-date-time-to-mysql-datetime
    const datesigned = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const sqlInsert = "INSERT IGNORE INTO volunteers (first_name, last_name, email_address, home_address, date_signed, signature_img) VALUES (?,?,?,?,?,?);"
    db.query(sqlInsert, [fn, ln, ea, ha, datesigned, sig], (err, result) => {
        if(err) throw err
        console.log("Server posted: ", fn, ln)
        res.send(result)
    })
})

// DELETE
app.delete("/api/delete/:emailAddress", (req, res) => {
    const ea = req.params.emailAddress;
    console.log(ea)
    const sqlDelete = "DELETE FROM volunteers WHERE email_address = ?";
    db.query(sqlDelete, [ea], (err, result) => {
        if(err) throw err
        console.log("Server: deleted: ", ea)
        res.send(result)
    })
})

// UPDATE
app.put("/api/update", (req, res) => {
    // console.log(req)

    const ne = req.body.new;
    const oe = req.body.old;
    console.log("Ready to change: ", oe, "to", ne)
    const sqlUpdate = "UPDATE volunteers SET email_address = ? WHERE email_address = ?"
    db.query(sqlUpdate, [ne, oe], (err, result)=>{
        if(err)  throw err;
        console.log("Server changed: ", oe, "to", ne)
        res.send(result)
    })
})

const PORT = process.env.EXPRESSPORT;
const msg = `Running on PORT ${PORT}`
app.get("/", (req, res) => {
    res.send(`<h1>Express Server</h1><p>${msg}<p>`)
})
app.listen(PORT, () => {
    console.log(msg)
})

