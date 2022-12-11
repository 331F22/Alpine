import { useState, useEffect } from 'react';
import axios from 'axios'

import './App/App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Whitelist = () => {

  const [entryList, setEntryList] = useState([])
  const [viewingID, setViewingID] = useState([])
  const [stringStatus, setStringStatus] = useState("Blacklist")

  // ----------------------------------------------------------------------------------------

  function setWhitelistUserView(e) {
    var tempID = entryList[e];
    setViewingID(tempID);
    console.log("Print Email: " + e);
    //setViewingID(viewingID, 2);
  }

  function setListingStatus(e) {
    var listing_string;

    if(e === 1)
    {
      listing_string = "Blacklist";
    }
    else
    {
      listing_string = "Whitelist";
    }

    setStringStatus(listing_string);
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
    <div id="grid-container">
      <div className="table-responsive" id="grid-inner-right">

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
              var listing_string;

              if(val.listing === 1)
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
      <div id="grid-inner-left">
        
          <p className="h4"> Name: {viewingID?.last_name}, {viewingID?.first_name} </p>
          <p className="h5"> Email: {viewingID?.email_address} </p>
          <br />
          <button type="button" className="btn btn-dark" onLoad={() => setListingStatus(viewingID?.listing)}>{stringStatus}</button>
          <br /><br />
          <textarea type="input" className="form-control" rows="6" placeholder="Reason for Volunteers Banning">{viewingID?.reason}</textarea>
          <br />
          <button type="button" className="btn btn-dark">Submit Reason</button>
      </div>
    </div>
  )
}

export default Whitelist;
