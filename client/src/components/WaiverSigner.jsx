import React, { useEffect, useState } from 'react'
import SignatureBox from './SignatureBox/SignatureBox.jsx';
import axios from 'axios';


const WaiverSigner = ({ firstName, lastName, emailAddress }) => {

    const [needNew, setNeedNew] = useState(false);
    const [entryList, setEntryList] = useState([])

    // slowModeId refers to the timeout that waits 1 seconds after the user last inputed something
    // we need to keep track of it so we can cancel old timers 
    const [slowModeId, setSlowModeId] = useState(undefined)

    function testForExistingWaiver() {
        setSlowModeId(undefined) // reset

        // if nothing give up: it's not our focus for our project to work on input validation, 
        // this is the bare minimum to not check for existing so much
        if (firstName == "" || lastName == "" || emailAddress == "") {
            return;
        }


        //@TODO

        axios.get(`${process.env.REACT_APP_HOST}/api/checkwaiver`, { first: firstName, last: lastName, email: emailAddress }).then((response) => {
            setNeedNew(response.data==1 ? true : false) 
          })

        console.log("Performing check for existing waiver......")
        // setNeedNew(true); // or false depending on what the database tells us 
    }


    // this will run every time firstname, lastname or email address changes
    useEffect(() => {

        // reset any previous timeout before it finishes
        if (slowModeId != undefined)
            clearTimeout(slowModeId)

        setSlowModeId(setTimeout(testForExistingWaiver, 1000)) // start up new timer

    }, [firstName, lastName, emailAddress]);



    return (
        <>
            {needNew ?
                <>
                    <a>Read Waiver</a>
                    <label htmlFor="signature">Signature</label>
                    <SignatureBox id="signature" />
                </>
                :
                <>
                    <div>Your past waiver is still valid.</div>
                </>
            }

        </>
    )
}

export default WaiverSigner;