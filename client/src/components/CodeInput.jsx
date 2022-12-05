import React from "react"
import { useState, useRef, useEffect } from "react"
import axios from "axios"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

const CodeInput = (props) => {

    const [columns, setColumns] = useState([])
    const [results, setResults] = useState([])

    useEffect(() => {axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByCodes/${ref1.current.value}`).then((response) => {
        setResults(response.data)
      })}, [])

    const ref1 = useRef(null)

    const [code, setCode] = useState('')

    const search = () => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByCodes/${ref1.current.value}`).then((response) => {
            setResults(response.data)}).catch(function (error) {if (error.response) {}})
        setColumns(["First Name", "Last Name", "Email Address", "Ticket Code"])
    }

   /*  function getObjectByValue(objVal) {
      let objectWithValue = {}
      results.forEach(entry => {
        if (Object.values(entry).indexOf(objVal) > -1) { // email value is inside obj inside array
          console.log('entry', entry)
          objectWithValue = entry
        }
      })
      return objectWithValue
    } */

    const checkLen = () => {
      if (code.length > 0) {
        search(code);
      }
    }

    return(
        <div>
        <div id="code-input">
            <TextField
              sx={{
                width: .33, 
                justifySelf: "center"
              }}
              id="codeInput"
              label="Code"
              ref={ref1}
              onChange={e => setCode(e.target.value)}
            />
            <br/>
            <Button id="search-button" variant="contained" sx={{ textTransform: 'capitalize', borderRadius:0, color: "#b01b1f", borderColor: "#b01b1f", backgroundColor:"white", ':hover': {backgroundColor:"#b01b1f", color:"white"}, ':click': {backgroundColor:"#b01b1f", color:"white"} }} onClick={() => {checkLen()}}>Search</Button>
        </div>
        </div>
    )
}
export default CodeInput