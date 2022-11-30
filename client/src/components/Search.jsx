import { useState, useRef, useEffect } from 'react';
import axios from 'axios'

// one component to take the input, search based on the input, and display the results
const Search = () => {
    
    const [selectedValue, setSelectedValue] = useState('')  // stores the type of search to perform
    const [first, setFirst] = useState('')  // stores first name param to search by
    const [last, setLast] = useState('')    // stores last name param to search by
    const [code, setCode] = useState('')    // stores code param to search by   
    const [evt, setEvt] = useState('')      // stores event param to search by
    const [resultList, setResultList] = useState([])    // stores results of db query for search
    let headers = useState([])  // stores headers for table
    const [evts, setEvts] = useState([])    // stores all events for event selection

    // updates selectedValue based on search type selected,
    // clears stored vals for params, and sets header list
    function handleSelectorChange(event, value){
        // set the search type
        setSelectedValue(event.target.value)
        // clear values before input
        setFirst('')
        setLast('')
        setCode('')
        setEvt('')
        // set headers based on search type
        setHeaders()
    }

    // fills up select options based on events available for search
    function makeEventSelector(){
        axios.get(`${process.env.REACT_APP_HOST}/api/read/eventsList`).then((response) => {
            setEvts(response.data)})
        for(let anEvt in evts){
            return(
                <option value={anEvt}>{anEvt}</option>
            )
        }
    }

    // sets the input fields based on what the user selected for search type
    function setInputFields(){
        // Search codes by events, makes drop-down to select an event to search by
        if(selectedValue === "codesByEvents"){
            return(
                <div id="codesByEventsInputs">
                    <label htmlFor='eventSelector'>
                        Select an event:
                        <select id="eventSelector" name="eventSelector" value="" onChange={setEvt()}>
                            {makeEventSelector()}
                        </select>
                    </label>
                </div>
            )
        }
        // Search people by codes, makes text input field to input code to search by
        if(selectedValue === "peopleByCodes"){
            return(
                <div id="peopleByCodesInputs">
                    <label htmlFor='codeInput'>
                        <input id="codeInput" name="codeInput" type="text" value={code}></input>
                    </label>
                </div>
            )
        }
        // Search codes by people, makes text input fields for first name and last name
        // may need to adjust search query to be able to search for one or the other or both?
        if(selectedValue === "codesByPeople"){
            return(
                <div id="codesByPeopleInputs">
                    <label htmlFor='firstName'>
                        <input id="firstName" name="firstName" type="text" value={first}></input>
                    </label>
                    <label htmlFor='lastName'>
                        <input id="lastName" name="lastName" type="text" value={last}></input>
                    </label>
                </div>
            )
        }
        // Search people by events, dropdown to search events
        if(selectedValue === "peopleByEvents"){
            return(
                <div id="codesByEventsInputs">
                    <label htmlFor='eventSelector'>
                        Select an event:
                        <select id="eventSelector" name="eventSelector" value="" onChange={setEvt()}>
                            {makeEventSelector()}
                        </select>
                    </label>
                </div>
            )
        }
        // don't add input fields if nothing has been selected
        if(selectedValue === ""){
            return(
                <div id="noInputs"></div>
            )
        }
    }

    // calls server to search
    function handleSearch(){
        if(selectedValue === "codesByEvents"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByEvents/${evt}`).then((response) => {
                setResultList(response.data)})
        }
        if(selectedValue === "peopleByCodes"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByCodes/${code}`).then((response) => {
                setResultList(response.data)})
        }
        if(selectedValue === "codesByPeople"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByPeople`, {fn: first, ln:last}).then((response) => {
                setResultList(response.data)})
        }
        if(selectedValue === "peopleByEvents"){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByEvents/${evt}`).then((response) => {
                setResultList(response.data)})
        }
        else{
            return
        }
    }

    // sets headers to use when making table, based on search type
    function setHeaders(){
        if(evt === "codesByEvents"){
            headers = [`Event Name`, `Event Date`, `Ticket Codes`] // TODO: list of headers for this search
        }
        if(evt === "peopleByCodes"){
            headers = [`First Name`, `Last Name`, `Email Address`, `Ticket Code`] // TODO: list of headers for this search
        }
        if(evt === "codesByPeople"){
            headers = [`Ticket Code`, `First Name`, `Last Name`] // TODO: list of headers for this search
        }
        if(evt === "peopleByEvents"){
            headers = [`Event Name`, `Event Date`, `First Name`, `Last Name`] // TODO: list of headers for this search
        }
    }

    // make table from results
    function makeTable(){
        const htmlToReturn = <table><thead><tr>{makeHeaders()}</tr></thead><tbody>{makeEntries()}</tbody></table>
        return(htmlToReturn)
    }

    // make headers for table
    function makeHeaders(){
        var htmlToReturn = null
        for(var head in headers){htmlToReturn += <th>{head}</th>}
        return(htmlToReturn)
    }

    
    // make rows in table for each result
    function makeEntries(){
        var htmlToReturn = null
        for(var result in resultList){htmlToReturn += <tr>{getItems(result)}</tr>}
        return(htmlToReturn)
    }

    // make table data for each row
    function getItems(res){
        var htmlToReturn = null
        for(var item in res){htmlToReturn += <td>{item}</td>}
        return(htmlToReturn)
    }

    return (
        <div>
            <div>
                <label htmlFor="select">
                    <select id="select" onChange={handleSelectorChange} value={selectedValue}>
                        <option vlaue="codesByEvents">Codes by events</option>
                        <option value="peopleByCodes">People by codes</option>
                        <option value="codesByPeople">Codes by People</option>
                        <option value="peopleByEvents">People by Events</option>
                    </select>
                </label>
                <div>
                    {useEffect(setInputFields)}
                </div>
                <div>
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div id="results">
                {useEffect(makeTable)}
            </div>
        </div>
    )
}

export default Search