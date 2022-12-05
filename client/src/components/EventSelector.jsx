import React from "react"
import { useState, useEffect } from "react"
import Select from "react-select"
import axios from "axios"
import Button from '@mui/material/Button'

const EventSelector = (props) => {
    const [selectedEvent, setSelectedEvent] = useState('default')
    const options = [{value:"1", label:"1"},{value:"2", label:"2"},{value:"3", label:"3"},{value:"4", label:"4"}] //create query for events list
    const searchType = props.selectedValue

    const [results1, setResults1] = useState([])
    const [results2, setResults2] = useState([])
    const [columns, setColumns] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByEvent/${selectedEvent}`).then((response) => {
        setResults1(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByEvents/${selectedEvent}`).then((response) => {
        setResults2(response.data)
        })
    }, [])

    const search = () => {
        if(searchType === "codesByEvent"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByEvent/${selectedEvent}`).then((response) => {
                setResults1(response.data)}).catch(function (error) {if (error.response) {
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
            setColumns(["Event Name", "Event Date", "Ticket Code"])
        }
        if(searchType === "peopleByEvents"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByEvents/${selectedEvent}`).then((response) => {
                setResults2(response.data)}).catch(function (error) {if (error.response) {
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
            setColumns(["Event Name", "Event Date", "First Name", "Last Name"])
        }
    }

    const mappedResults = () => {
        if(searchType === "codesByEvent"){
            results1.map((val, k) => {
                return (<div key={k}>
                  <div>{val.event_name}, {val.event_date}, {val.ticketCode}</div></div>)})
        }
        if(searchType === "peopleByEvents"){
            results2.map((val, k) => {
                return (<div key={k}>
                  <div>{val.event_name}, {val.event_date}, {val.first_name}, {val.last_name}</div></div>)})
        }
    }

    return(
        <div>
            <form id="event-selector-form">
                <Select 
                id="event-selector" 
                options={options}
                placeholder="Select event"
                value = {options.find(obj => obj.value === selectedEvent)}
                onChange={e=> {setSelectedEvent(e.value)}} />
            </form>
            <div>
                <br/>
            <Button id="search-button" variant="contained" sx={{ textTransform: 'capitalize', borderRadius:0, color: "#b01b1f", borderColor: "#b01b1f", backgroundColor:"white", ':hover': {backgroundColor:"#b01b1f", color:"white"}, ':click': {backgroundColor:"#b01b1f", color:"white"} }} onClick={() => {
            if (selectedEvent.length > 0) {
              search(); mappedResults()
            }
          }}>Search</Button>
            </div>
            <div id="table">
            </div>
            <div>
                {() => {if(results1 !== []){
                    if(searchType === "codesByEvent"){
                        results1.map((val, k) => {
                            return (<div key={k}>
                              <div>{val.event_name}, {val.event_date}, {val.ticketCode}</div></div>)})
                    }
                    
                }}}
                {() => {if(results2 !== []){
                    if(searchType === "peopleByEvents"){
                        results2.map((val, k) => {
                            return (<div key={k}>
                              <div>{val.event_name}, {val.event_date}, {val.first_name}, {val.last_name}</div></div>)})
                    }
                }}}
                
            </div>
        </div>
    )
}
export default EventSelector