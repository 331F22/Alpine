import React from "react";
import EventSelector from "./EventSelector";
import PeopleInput from "./PeopleInput";
import CodeInput from "./CodeInput";

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
    
}

export default SetInputs