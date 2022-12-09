import { useState, useEffect } from 'react';
import axios from 'axios'

import './App/App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Whitelist = () => {

  const [entryList, setEntryList] = useState([])
  const [newReason, setNewReason] = useState('');

  const whiteliststatus = "Whitelist";
  // var first_name;
  // var last_name;
  // var reason;
  // var email_address;
  // var id;

  // READ (GET)
  useEffect(() => 
  {
    axios.get(`${process.env.REACT_APP_HOST}/api/read`).then((response) => 
    {
      setEntryList(response.data)
    })
  }, [])

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
      <div class="table-responsive" id="tablediv">

        <table id="table" class="table border table-striped table-hover">
          
          <thead>
            <tr class="bg-primary">
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Listing</th>
              <th scope="col">Reason</th>
            </tr>
          </thead>

          <tbody>
            {entryList.map((val, k) => {
              return (<tr key={k}>
                <td>{val.id}</td>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.listing}</td>
                <td>{val.reason}</td>
              </tr>)})}
          </tbody>
        </table>

      </div>

      <hr/>
      
      <div id="rightside">

        {/* {entryList.find((val) => {
          return(<div id="information" key={1}>
            <p> Name: {val.last_name}, {val.first_name} </p>
            <p> Email: {val.email_address} </p>
            <button>${whiteliststatus}</button>
            <p> Reason: {val.reason}</p>
          </div>
        )})} */}

          <label htmlFor="reasonBl">Reasons</label>

          <input className="reasonItem" type="text" name="reason" onChange={(e) => setNewReason(e.target.value)} />
          <button className="submitButton">Submit Reason</button>

      </div>

    </div>
  )
}

export default Whitelist;
