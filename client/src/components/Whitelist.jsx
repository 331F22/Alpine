import { useState, useEffect } from 'react';
import axios from 'axios'

import './App/App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Whitelist = () => {

  const [entryList, setEntryList] = useState([])
  const [viewingID, setViewingID] = useState([])
  const [stringStatus, setStringStatus] = useState("Blacklist")
  const [newReason, setNewReason] = useState('')
  const [newListing, setNewListing] = useState()

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

  function getObjectByValue(objVal) {
    let objectWithValue = {}
    entryList.forEach(entry => {
      if (Object.values(entry).indexOf(objVal) > -1) 
      { // email value is inside obj inside array
        console.log('entry', entry)
        objectWithValue = entry
      }
    })
    return objectWithValue
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

  // UPDATE (PUT)
  const updateReason = (email) => {
    axios.put(`${process.env.REACT_APP_HOST}/api/blacklist`, { old: email, whitelist: newListing, reasons: newReason }).then((response) => {
      let objToChange = getObjectByValue(email)
      const index = entryList.indexOf(objToChange)
      
      objToChange.reason = newReason
      objToChange.listing = 0;

      if (index > -1) {
        let entryListCopy = [...entryList]
        entryListCopy[index] = objToChange
        setEntryList(entryListCopy)
      }

    })
  }

    // // UPDATE (PUT)
    // const updateEmail = (email) => { // replaces ALL such email instances in the database
    //   axios.put(`${process.env.REACT_APP_HOST}/api/update`, { old: email, new: newEmail }).then((response) => {
    //     let objToChange = getObjectByValue(email)
    //     const index = entryList.indexOf(objToChange)  // deletes ONE instance in the state var
    //     objToChange.email_address = newEmail
    //     if (index > -1) {
    //       let entryListCopy = [...entryList]
    //       entryListCopy[index] = objToChange
    //       setEntryList(entryListCopy)
    //     }
    //   }) //close .then()
  
    //   setNewEmail('') // clear all update email input fields
    //   let updateInputs = document.getElementsByClassName('updateInput');
    //   for (let i = 0; i < updateInputs.length; i++) {
    //     updateInputs[i].value = ''
    //   }
    // }

    // -----------------------------------------------------------------------------------------

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
          <textarea type="input" className="form-control" rows="6" placeholder="Reason for Volunteers Banning" onChange={(e) => setNewReason(e.target.value)}>{viewingID?.reason}</textarea>
          <br />
          <button type="button" className="Update" class="btn btn-danger btn-lg" onClick={() => {
            setNewListing(0);
            if (newReason.length > 0) {
              updateReason(viewingID?.email_address);
            }
          }}>Submit Reason</button>
      </div>
    </div>
  )
}

export default Whitelist;
