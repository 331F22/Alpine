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
        jobName: req.query.jobName,
        supervisorFirst: req.query.supervisorFirst,
        supervisorLast: req.query.supervisorLast,
        numVolunteersReq: req.query.numVolunteersReq,
    }

    // If any fields are empty, return 400 and error msg
    if (!newJob.supervisorFirst || !newJob.supervisorLast || !newJob.jobName || !newJob.numVolunteersReq){
        return res.status(400).json({msg: 'Please include all fields'})
    }

    // Else, add the job to the database
    else{
        const sqlInsert = `INSERT INTO jobs (jobName, supervisorFirst, supervisorLast, numVolunteersReq) VALUES ("${newJob.jobName}","${newJob.supervisorFirst}","${newJob.supervisorLast}",${newJob.numVolunteersReq});`
        db.query(sqlInsert, (err, result) => {
            if(err) throw err
            res.send(newJob)
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
        // Actual result data
        // res.send(result);
        res.json(result);
    })
})

// UPDATE
// Update job
router.put("/:jobID", (req, res) => {

    const updateJobID = req.body;

    // = {
    //     supervisorFirst: req.body.supervisorFirst,
    //     supervisorLast: req.body.supervisorLast,
    //     job: req.body.job,
    //     numVolunteersReq: req.body.numVolunteersReq
    // }

    const getJob = `SELECT * FROM jobs WHERE jobID = ${updateJobID}`
    db.query(getJob, (err, result)=>{

    })


    const sqlUpdate = `UPDATE jobs SET ${''} = "${''}" WHERE jobID = "${updateJobID}"`
    db.query(sqlUpdate, (err, result)=>{
        if (err) throw err;
        res.send(result)
    })
})

// DELETE
router.delete("/", (req, res) => {
    
    const deleteJobID = req.query.jobID; 
    console.log(deleteJobID)

    const sqlDelete = `DELETE FROM jobs WHERE jobID = "${deleteJobID}"`;
    db.query(sqlDelete, (err, result) => {
        if(err) throw err
        res.send()
    })
})

module.exports = router;