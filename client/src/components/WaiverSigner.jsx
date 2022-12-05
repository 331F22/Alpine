import React, { useRef, useState } from 'react'
import SignatureBox from './SignatureBox/SignatureBox.jsx';

const WaiverSigner = ({ firstName, lastName, emailAddress }) => {
 
    //Query the database after information is in and hide or show the signature box.


    return (
        <>
            <div>{firstName}</div>
            <a>Read Waiver</a>
            <label htmlFor="signature">Signature</label>
            <SignatureBox id="signature" />
        </>
    )
}

export default WaiverSigner;