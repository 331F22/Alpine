import React, { useEffect, useState } from 'react'
import SignatureBox from './SignatureBox/SignatureBox.jsx';
import axios from 'axios'

const WaiverSigner = ({ firstName, lastName, emailAddress, homeAddress, setSignatureImage}) => {

    const [needNew, setNeedNew] = useState(false)
    const [startedTesting, setStartedTesting] = useState(false)


    // slowModeId refers to the timeout that waits 1 seconds after the user last inputed something
    // we need to keep track of it so we can cancel old timers 
    const [slowModeId, setSlowModeId] = useState(undefined)


    // this will run every time firstname, lastname or email address changes
    useEffect(() => {

        function testForExistingWaiver() {
            setSlowModeId(undefined) // reset

            // if nothing give up: it's not our focus for our project to work on input validation, 
            // this is the bare minimum to not check for existing so much
            if (firstName === "" || lastName === "" || emailAddress === "" || homeAddress === "") {
                return;
            }
            setStartedTesting(true);


            // test whether we need a need waiver signature
            axios.get(`${process.env.REACT_APP_HOST}/api/checkwaiver`, { params: { first: firstName, last: lastName, email: emailAddress } }).then((response) => {
                console.log(response.data)
                if (typeof response.data[0] === 'undefined' || response.data[0].Status === 0) {
                    setNeedNew(true)
                }
                else {
                    setNeedNew(false)
                }
                // setNeedNew(response.data[0].Status==0 ? true : false);
            })
            setNeedNew(true);

        }


        // reset any previous timeout before it finishes
        if (slowModeId !== undefined)
            clearTimeout(slowModeId)

        setSlowModeId(setTimeout(testForExistingWaiver, 1000)) // start up new timer

    }, [firstName, lastName, emailAddress, homeAddress]);



    return (
        <>
            {!startedTesting ?
                <div>Enter your first name, last name, email, and address to see if you need to sign up for any waivers.</div>
                :
                needNew ?
                    <>
                        <a href="https://github.com/331F22/resources/blob/c41f31287f51e4a23e6b3d4f88bcb79cf8fd17ae/Volunteer%20Competition%20Worker%20Registration%20USSA.pdf">Read Waiver</a>
                        <label htmlFor="signature">Signature</label>
                        <SignatureBox id="signature" setImg={setSignatureImage}/>
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