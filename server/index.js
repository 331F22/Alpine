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
    console.log(req)
    const sqlSelect = "SELECT * FROM volunteers;"
    db.query(sqlSelect, (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
})

app.get("/api/read/events", (req, res) => {
    const sqlSelect = "SELECT event_name FROM events;"
    db.query(sqlSelect, (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
})
app.get("/api/read/codesByEvent/", (req, res) => {
    const sqlSelect = "SELECT event_name, event_date, ticketCode FROM events JOIN volunteer_lists ON events.volunteer_list_id=volunteer_lists.volunteer_list_id JOIN volunteers ON volunteer_lists.volunteer_id=volunteers.volunteer_id JOIN tickets ON volunteers.volunteer_id=tickets.volunteer_id WHERE event_name=?;"
    db.query(sqlSelect, (err, result) => { //[evt], (err, result) => { 
        if(err){
          throw err;
        }
        res.send(result);
    })
})

app.get("/api/read/codesByEvent/:evt", (req, res) => {
    const evtt = req.params[0]
    const sqlSelect = "SELECT event_name, event_date, ticketCode FROM events JOIN volunteer_lists ON events.volunteer_list_id=volunteer_lists.volunteer_list_id JOIN volunteers ON volunteer_lists.volunteer_id=volunteers.volunteer_id JOIN tickets ON volunteers.volunteer_id=tickets.volunteer_id WHERE event_name=?;"
    db.query(sqlSelect, [evtt], (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
})

app.get("/api/read/peopleByCodes/", (req, res) => {
    //const cd = req.params.cd
    const sqlSelect = "SELECT first_name, last_name, email_address, ticketCode FROM tickets JOIN volunteers ON tickets.volunteer_id=volunteers.volunteer_id;"
    db.query(sqlSelect, (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
})

app.get("/api/read/peopleByCodes/:code", (req, res) => {
    const cd = req.params[0]
const sqlSelect = "SELECT first_name, last_name, email_address, ticketCode FROM tickets JOIN volunteers ON tickets.volunteer_id=volunteers.volunteer_id WHERE ticketCode=?;"
    db.query(sqlSelect, [cd], (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
        console.log(cd)
    })
})

app.get("/api/read/codesByPeople/:fn/:ln", (req, res) => {
    const first = req.params[0]
    const last = req.params[1]
    const sqlSelect = "SELECT ticketCode, first_name, last_name FROM volunteers JOIN tickets ON volunteers.volunteer_id=tickets.volunteer_id WHERE first_name=? and last_name=?;"
    db.query(sqlSelect, [first, last], (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
})

app.get("/api/read/peopleByEvents/:evt", (req, res) => {
    const evt = req.params[0]
    const sqlSelect = "SELECT event_name, event_date, first_name, last_name FROM events JOIN volunteer_lists ON events.volunteer_list_id=volunteer_lists.volunteer_list_id JOIN volunteers ON volunteer_lists.volunteer_id=volunteers.volunteer_id WHERE event_name=?;"
    db.query(sqlSelect, [evt], (err, result) => {
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
