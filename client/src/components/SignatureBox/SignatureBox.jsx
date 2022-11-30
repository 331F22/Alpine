import React, { useRef } from 'react'
import './SignatureBox.css';
import SignatureCanvas from 'react-signature-canvas'

const SignatureBox = () => {
    console.log("hi")
    let sigCanvas = useRef();

    return (
        <>
            <div className='signature-wrapper'>
                <SignatureCanvas ref={(ref) => { sigCanvas = ref }}
                    penColor='black' canvasProps={{ className: 'signature' }} />
            </div>

            <button onClick={() => {
                sigCanvas.clear();
            }}>Clear</button>

            <button onClick={() => {
                // Using the non-react demo: https://jsfiddle.net/szimek/osenxvjc/

                let data = sigCanvas.toData();
                if (data) {
                    data.pop();
                    sigCanvas.fromData(data); // reload it after poping off the last stroke
                }
            }}>Undo</button>

            <button onClick={() => {
                console.log(sigCanvas.toDataURL("image/jpeg"))

            }}>Test</button>
        </>
    )
}

export default SignatureBox;