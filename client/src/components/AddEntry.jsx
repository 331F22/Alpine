import { useState, useRef } from 'react';
import axios from 'axios'
import './App/App.css';
import Logo from './logo.png';

const AddEntry = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [entryList, setEntryList] = useState([])


  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // CREATE (POST)
  function submitEntry() {
    axios.post(`${process.env.REACT_APP_HOST}/api/create`, { first: firstName, last: lastName, email: emailAddress }).then((response) => {
      setEntryList([...entryList, { first_name: firstName, last_name: lastName, email_address: emailAddress }]
      )
    })

    ref1.current.value = ""
    setFirstName('')
    ref2.current.value = ""
    setLastName('')
    ref3.current.value = ""
    setEmailAddress('')
  }

  function refreshPage() {
    window.location.reload(true);
  }

  return (
    <div>
      <div className="container">
      <div className="addEntry">
        <h2 class="display-1">Add Volunteers</h2>
        <div id='userInput'>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input ref={ref1} id="firstName" name="firstName" type="text" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input ref={ref2} id="lastName" name="lastName" type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" onChange={(e) => setLastName(e.target.value)} />
          </div><br />
          <div className="emailField" >
            <label htmlFor="email">Email Address</label>
            <input ref={ref3} id="email" type="email" class="form-control" placeholder="Email@example.com" aria-label="Email" aria-describedby="basic-addon1"  name="email" onChange={(e) => setEmailAddress(e.target.value)} />
          </div>
          <button type="button" className="btn btn-outline-dark submitBtn"
            onClick={() => {
              if (firstName.length > 0 && lastName.length > 0 && emailAddress.length > 0) {
                submitEntry()
                refreshPage()
              }
            }}
          >Add Entry</button>
        </div>
      </div>
      </div>

      
    </div>
  )
}

export default AddEntry;
