import React from "react"
import { useState, useRef } from "react"
import axios from "axios"
import Button from '@mui/material/Button'

const PeopleInput = () => {

    const [fInput, setFinput] = useState('')
    const [lInput, setLinput] = useState('')
    const [results, setResults] = useState([])
    const [columns, setColumns] = useState([])

    const search = () => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByPeople/${fInput}/${lInput}`).then((response) => {
            setResults(response.data)}).catch(function (error) {if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            })
        setColumns(["Ticket Code", "First Name", "Last Name"])
    }

    const ref1 = useRef(null)
    const ref2 = useRef(null)

    return(
        <div id="people-inputs">
            <label htmlFor="firstName">First Name: </label>
                <input ref={ref1} type="text" name="firstName" id="firstName" onInput={e => setFinput(e.target.value)}></input>
            <label htmlFor="lastName">Last Name: </label>
                <input ref={ref2} type="text" name="lastName" id="lastName" onInput={e => setLinput(e.target.value)}></input>
            <div>
              <br/>
                <Button id="search-button" variant="contained" sx={{ textTransform: 'capitalize', borderRadius:0, color: "#b01b1f", borderColor: "#b01b1f", backgroundColor:"white", ':hover': {backgroundColor:"#b01b1f", color:"white"}, ':click': {backgroundColor:"#b01b1f", color:"white"} }} onClick={() => {
            if (fInput.length > 0 && lInput.length > 0) {
              search();
            }
          }}>Search</Button>
            </div>
            <div>
                {() => {if (results!== []) {
                    results.map((val, k) => {
                        return (<div key={k}>
                          <div>{val.ticketCode}, {val.first_name}, {val.last_name}</div></div>)})
                }}}
            </div>
        </div>
    )
}
export default PeopleInput