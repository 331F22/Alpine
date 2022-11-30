const express = require('express')
const bodyParser = require ('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const dotenv = require('dotenv').config()

// createConnection
const db = mysql.createPool({
    host: 'localhost',
    user: process.dotenv.DBUSER,
    password: process.dotenv.DBPASS,
    database: process.dotenv.DATABASE,
    port: process.dotenv.DBPORT
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

//get codes by events
app.get("/api/read/codesByEvents/:evt", (req, res) => {
    const evt = req.params.evt
    const sqlSelect = "SELECT event_name, event_date, ticketCode FROM events JOIN volunteers ON events.volunteer_list_id = volunteers.volunteer_list_id JOIN tickets ON volunteers.volunteer_id = tickets.volunteer_id WHERE event_name = ?" // TODO: need query here
    db.query(sqlSelect,[evt], (err, result) => { 
        if(err){
            throw err;
        }
        res.send(result);
    })
})

//get people by codes
app.get("/api/read/peopleByCodes/:code", (req, res) => {
    const code = req.params.code
    const sqlSelect = "SELECT first_name, last_name, email_address, ticketCode FROM tickets JOIN volunteers ON tickets.volunteer_id = volunteers.volunteer_id WHERE ticketCode = ?" // TODO: need query here
    db.query(sqlSelect, [code], (err, result) => { 
        if(err){
            throw err;
        }
        res.send(result);
    })
})

//get codes by people
app.get("/api/read/codesByPeople", (req, res) => {
    const first = req.body.fn
    const last = req.body.ln
    const sqlSelect = "SELECT ticketCode, first_name, last_name FROM volunteers JOIN tickets ON volunteers.volunteer_id = tickets.volunteer_id WHERE first_name = ? AND last_name = ?" // TODO: need query here
    db.query(sqlSelect, [first, last], (err, result) => { 
        if(err){
            throw err;
        }
        res.send(result);
    })
})

//get people by events
app.get("/api/read/peopleByEvents/:evt", (req, res) => {
    const evt = req.params.evt
    const sqlSelect = "SELECT event_name, event_date, first_name, last_name FROM events JOIN volunteers ON events.volunteer_list_id = volunteers.volunteer_list_id WHERE event_name = ?" //TODO: need query here
    db.query(sqlSelect, [evt], (err, result) => { 
        if(err){
            throw err;
        }
        res.send(result);
    })
})

// get list of events for event selector
app.get("/api/read/eventsList"), (req, res) => {
    const sqlSelect = "SELECT event_name FROM events" // TODO: need query here
    db.query(sqlSelect, [evt], (err, result) => { 
        if(err){
            throw err;
        }
        res.send(result);
    })
}
