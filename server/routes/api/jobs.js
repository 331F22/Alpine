const express = require('express')
const router = express.Router();
const mysql = require('mysql')
const dotenv = require('dotenv').config()

const db = mysql.createPool({ // createConnection
    host: 'localhost',
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DATABASE,
    port: process.env.DBPORT
})

// CREATE
// Create a job
router.post("/", (req, res) => {
    const newJob = {
        supervisorFirst: req.body.supervisorFirst,
        supervisorLast: req.body.supervisorLast,
        job: req.body.job,
        numVolunteersReq: req.body.numVolunteersReq
    }

    if (!newJob.supervisorFirst || !newJob.supervisorLast || !newJob.job || !newJob.numVolunteersReq){
        return res.status(400).json({msg: 'Please include all fields'})
    }

    else{
        const sqlInsert = `INSERT INTO jobs (supervisorFirst, supervisorLast, job, numVolunteersReq) VALUES ("${newJob.supervisorFirst}","${newJob.supervisorLast}","${newJob.job}",${newJob.numVolunteersReq});`
        db.query(sqlInsert, (err, result) => {
            if(err) throw err
            res.send(req.body)
        })
    }

})

// READ
// Gets all jobs
router.get("/", (req, res) => {
    const sqlSelect = "SELECT * FROM jobs;"
    db.query(sqlSelect, (err, result) => {
        if(err){
            throw err;
        }
        // res.send(result);
        res.json(result);
    })
})

// UPDATE
router.put("/api/put", (req, res) => {

    const sqlUpdate = "UPDATE jobs SET email_address = ? WHERE email_address = ?"
    db.query(sqlUpdate, (err, result)=>{
        if (err) throw err;
        console.log("Database Updated: ", )
        res.send(result)
    })
})

// DELETE
router.delete("/api/delete/:emailAddress", (req, res) => {
    const ea = req.params.emailAddress;
    console.log(ea)
    const sqlDelete = "DELETE FROM volunteers WHERE email_address = ?";
    db.query(sqlDelete, [ea], (err, result) => {
        if(err) throw err
        console.log("Server: deleted: ", ea)
        res.send(result)
    })
})

module.exports = router;