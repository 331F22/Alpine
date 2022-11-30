import { useState, useRef, useEffect } from 'react';
import axios from 'axios'

const Search = () => {
    
    const [selectedValue, setSelectedValue] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [code, setCode] = useState('')
    const [evt, setEvt] = useState('');
    const [resultList, setResultList] = useState([])
    const [headers, setHeaders] = useState([])
    const [evts, setEvts] = useState([])

    function setHeaders(){
        if(evt === "codesByEvents"){
            headers = [] // list of headers for this search
        }
        if(evt === "peopleByCodes"){
            headers = [] // list of headers for this search
        }
        if(evt === "peopleByCodes"){
            headers = [] // list of headers for this search
        }
        if(evt === "peopleByEvents"){
            headers = [] // list of headers for this search
        }
    }

    function handleSelectorChange(event){
        setSelectedValue(event.target.value)
        //clear values before input
        setFirst('')
        setLast('')
        setCode('')
        setEvt('')
        setHeaders()
    }

    function makeEventSelector(){
        axios.get(`${process.env.REACT_APP_HOST}/api/read/eventsList`).then((response) => {
            setEvts(response.data)})
        for(let anEvt in evts){
            return(
                <option value={anEvt}>{anEvt}</option>
            )
        }
    }

    function setInputFields(){
        if(selectedValue === "codesByEvents"){
            return(
                <div id="codesByEventsInputs">
                    <label htmlFor='eventSelector'>
                        Select an event:
                        <select id="eventSelector" name="eventSelector" onChange={setEvt(value)}>
                            {makeEventSelector}
                        </select>
                    </label>
                </div>
            )
        }
        if(selectedValue === "peopleByCodes"){
            return(
                <div id="peopleByCodesInputs">
                    <label htmlFor='codeInput'>
                        <input id="codeInput" name="codeInput" type="text" value={code}></input>
                    </label>
                </div>
            )
        }
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
        if(selectedValue === "peopleByEvents"){
            return(
                <div id="peopleByEventsInputs">
                    <label htmlFor='firstName'>
                        <input id="firstName" name="firstName" type="text" value={first}></input>
                    </label>
                    <label htmlFor='lastName'>
                        <input id="lastName" name="lastName" type="text" value={last}></input>
                    </label>
                </div>
            )
        }
        if(selectedValue === ""){
            return(
                <div id="noInputs"></div>
            )
        }
    }

    function handleSearch(){
        if(selectedValue === codesByEvents){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByEvents/${evt}`).then((response) => {
                setResultList(response.data)})
        }
        if(selectedValue === peopleByCodes){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByCodes/${code}`).then((response) => {
                setResultList(response.data)})
        }
        if(selectedValue === codesByPeople){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/codesByPeople`, {fn: first, ln:last}).then((response) => {
                setResultList(response.data)})
        }
        if(selectedValue === peopleByEvents){
            axios.get(`${process.env.REACT_APP_HOST}/api/read/peopleByEvents/${evt}`).then((response) => {
                setResultList(response.data)})
        }
        else{
            return
        }
    }

    function makeHeaders(){
        return(
        {const: () => {
            for(head in headers){
                <th>{head}</th>
            }
        }}
        )
    }

    function getItems(res){
        return(
            {const: () => {
                for(item in res){
                    <td>{item}</td>
                }
            }}
        )
    }

    function makeEntries(){
        return(
            {const: () => {
                for(result in resultList){
                    <tr>
                    {getItems(result)}
                    </tr>
                }
            }}
        )
    }

    function makeTable(){
        const htmlToReturn = 
        <table>
            <tr>
                {makeHeaders}
            </tr>
            {makeEntries}
        </table>
        return(htmlToReturn)
    }

    // need search functionality
        // need selector
            // need inputs based on selector
        // need search button
    // need search results
        // get results based on above inputs
        // display results as table based on results (size)

    //return html that does all of the above
    return (
        <div>
            <div>
                // form/search div
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