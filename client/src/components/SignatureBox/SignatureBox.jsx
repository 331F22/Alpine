import React, { useRef, useState } from 'react'
import './SignatureBox.css';
import SignatureCanvas from 'react-signature-canvas'

const SignatureBox = () => {
    let sigCanvas = useRef();

    // this is here just for debugging/testing
    const [img, setImg] = useState("");   

    return (
        <>
            <div className='signature-wrapper'>
                <SignatureCanvas ref={(ref) => { sigCanvas = ref }}
                    penColor='black' canvasProps={{ className: 'signature' }} />
            </div>

            <div className='signature-controls'>
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
                    console.log()
                    
                    setImg(sigCanvas.toDataURL("image/png"))

                }}>Test</button>
            </div>

            <img src={img}></img>
        </>
    )
}

export default SignatureBox;