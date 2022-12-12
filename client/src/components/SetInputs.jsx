import React from "react";
import EventSelector from "./EventSelector";
import PeopleInput from "./PeopleInput";
import CodeInput from "./CodeInput";
import Button from '@mui/material/Button';

const SetInputs = (props) => {
    const searchType = props.searchType

    if(searchType === "codesByEvent"){

        return (<div><br/><EventSelector searchType={searchType}/></div>)
    }
    if(searchType === "peopleByCodes"){
        return (<div><br/><CodeInput /></div>)
    }
    if(searchType === "codesByPeople"){
        return (<div><br/><PeopleInput /></div>)
    }
    if(searchType === "peopleByEvents"){
        return (<div><br/><EventSelector searchType={searchType}/></div>)
    }
        if(searchType === "emailList") {
        return (<div><br/><Button id="showEmails" className='showEmails' variant="contained" sx={{ textTransform: 'capitalize', borderRadius:0, color: "#b01b1f", borderColor: "#b01b1f", backgroundColor:"white", ':hover': {backgroundColor:"#b01b1f", color:"white"}, ':click': {backgroundColor:"#b01b1f", color:"white"} }}>Search</Button></div>)}
        if(searchType === "issuedTickets"){
                return (<div><br/><Button id="showTickets" className='showTickets' variant="contained" sx={{ textTransform: 'capitalize', borderRadius:0, color: "#b01b1f", borderColor: "#b01b1f", backgroundColor:"white", ':hover': {backgroundColor:"#b01b1f", color:"white"}, ':click': {backgroundColor:"#b01b1f", color:"white"} }}>Search</Button></div>)}

}

export default SetInputs
