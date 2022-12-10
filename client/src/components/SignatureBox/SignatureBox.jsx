import React, { useRef, useState } from 'react'
import './SignatureBox.css';
import SignatureCanvas from 'react-signature-canvas'

const SignatureBox = (props) => {
    let sigCanvas = useRef();

    function updateImg() {
        if (sigCanvas.isEmpty()) {
            props.setImg('')
        }
        else {
            props.setImg(sigCanvas.toDataURL("image/png")) // save signature as image and propogate it up
        }
    }

    return (
        <>
            <div className='signature-wrapper'>
                <SignatureCanvas ref={(ref) => { sigCanvas = ref }} onEnd={() => { updateImg() }}
                    penColor='black' canvasProps={{ className: 'signature' }} />
            </div>

            <div className='signature-controls'>
                <button onClick={() => {
                    sigCanvas.clear();
                    updateImg();
                }}>Clear</button>

                <button onClick={() => {
                    // Using the non-react demo: https://jsfiddle.net/szimek/osenxvjc/

                    let data = sigCanvas.toData();
                    if (data) {
                        data.pop();
                        sigCanvas.fromData(data); // reload it after poping off the last stroke
                    }

                    updateImg();
                }}>Undo</button>

            </div>

        </>
    )
}

export default SignatureBox;