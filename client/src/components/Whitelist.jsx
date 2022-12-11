import { useState, useEffect } from 'react';
import axios from 'axios'

import './App/App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Whitelist = () => {

  const [entryList, setEntryList] = useState([])
  const [viewingID, setViewingID] = useState([])
  const [whitelistStatus, setStatus] = useState("Blacklist");
  const [newReason, setNewReason] = useState('')

  var listing_string;
  // var first_name;
  // var last_name;
  // var reason;
  var email_address = "edward";

  // ----------------------------------------------------------------------------------------
  const changeStatus = (id) => {

    if (id == 1)
    {
      setStatus("Whitelist")

    }
    else
    {
      setStatus("Blacklist")
    }
  }


  // -----------------------------------------------------------------------------------------

  // READ (GET)
  useEffect(() => 
  {
    axios.get(`${process.env.REACT_APP_HOST}/api/read`).then((response) => 
    {
      setEntryList(response.data)
    })
  }, [])

  function setWhitelistUserView(e) {
    var tempID = entryList[e];
    setViewingID(tempID);
    console.log("Print Email: " + e);
    //setViewingID(viewingID, 2);
  }

  // In Rows
  // value={email_address} onClick={setWhitelistUserView}

  // const updateReason = (reason) => 
  // { // replaces ALL such email instances in the database
  //   axios.put(`${process.env.REACT_APP_HOST}/api/update`, { old: reason, new: newReason }).then((response) => 
    
  //   {
  //     let objToChange = reason
  //     objToChange.reason = newReason
  //   })

  //   setNewReason('') // clear all update email input fields
  //   let updateInputs = document.getElementsByClassName('reasonItem');
  //   for (let i = 0; i < updateInputs.length; i++) 
  //   {
  //     updateInputs[i].value = ''
  //   }
  // }

  // <button className="submitButton"
  // onClick={() => {
  //   if (newReason.length > 0)
  //   {
  //     updateReason(newReason);
  //   }
  // }}>Submit Reason</button>


  return (
    <div>
      <div className="table-responsive" id="tablediv">

        <table id="table" className="table border table-striped table-hover table-dark table-striped">
          
          <thead>
            <tr className="table-light">
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Listing</th>
              <th scope="col">Reason</th>
            </tr>
          </thead>

          <tbody>
            {entryList.map((val, index) => {
              email_address = "emailTest";

              if(val.listing == 1)
              {
                listing_string = "Whitelisted"
              }
              else
              {
                listing_string = "Blacklisted"
              }
              return (
              <tr key={index} onClick={() => setWhitelistUserView(index)}>
                <td>{val.id}</td>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{listing_string}</td>
                <td>{val.reason}</td>
              </tr>)})}
          </tbody>
        </table>

      </div>

      <hr/>
      
      <div id="rightside">
        
          <p> Name: {viewingID?.last_name}, {viewingID?.first_name} </p>
          <p> Email: {viewingID?.email_address} </p>
          
          {/* <button type="button" className="btn btn-dark" onClick={() => changeStatus(tempID)}>{whitelistStatus}</button> */}
          
          {/* <button type="button" className="btn" onClick={this.handleState}>Click Here to Test View</button>
          <p>{this.state.content}</p> */}
      
      </div>
    </div>
  )
}

export default Whitelist;
