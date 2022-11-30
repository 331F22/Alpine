import React from 'react'
import SignatureCanvas from 'react-signature-canvas'

const SignatureBox = () => {
    console.log("hi")

    return (
        <>
        <SignatureCanvas penColor='black'
        canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />
        </>
    )
}

export default SignatureBox;