import { useState, useRef } from 'react';
import AddEntry from './AddEntry.jsx';
import {Route, Router} from 'react-router-dom';
import axios from 'axios'

const DisplayJob = () => {


    const redirectToApp = () => {
        window.location.href="/App.js";
    }


    return (
        <div className="DisplayJob">
            <h1>Job Assignment</h1>
            <div className="jobData">
                <h2>Your job: </h2>
                <h2>Location: </h2>
                <h2>Supervisor: </h2>
            </div>
            <button onClick={redirectToApp}>Done</button>
        </div>
    )
}

export default DisplayJob;