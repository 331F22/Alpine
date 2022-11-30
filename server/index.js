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

//get codes by events
app.get("/api/read/codesByEvents/:evt", (req, res) => {
    const evt = req.params.evt
    const sqlSelect = "" //need query here
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
    const sqlSelect = "" //need query here
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
    const sqlSelect = "" //need query here
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
    const sqlSelect = "" //need query here
    db.query(sqlSelect, [evt], (err, result) => { 
        if(err){
            throw err;
        }
        res.send(result);
    })
})
