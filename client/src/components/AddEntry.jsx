import { useState, useRef } from 'react';
import axios from 'axios'
import WaiverSigner from './WaiverSigner';



const AddEntry = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [entryList, setEntryList] = useState([])


  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // CREATE (POST)
  function submitEntry() {
    axios.post(`${process.env.REACT_APP_HOST}/api/create`, { first: firstName, last: lastName, email: emailAddress, home: homeAddress }).then((response) => {
      setEntryList([...entryList, { first_name: firstName, last_name: lastName, email_address: emailAddress, home: homeAddress }]
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
    window.location.reload(false);
  }

  function updateDate() {
        axios.put(`${process.env.REACT_APP_HOST}/api/updatewaiver`, { first: firstName, last: lastName, email: emailAddress }).then((response) => {
          console.log("date updated");
        })
    }
    
  
    

  return (
    <div className="addEntry">
      <h2>Add an Entry</h2>
      <div id='userInput'>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input ref={ref1} id="firstName" type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input ref={ref2} id="lastName" type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
        </div><br />
        <div className="emailField" >
          <label htmlFor="email">Email Address</label>
          <input ref={ref3} id="email" type="email" name="email" onChange={(e) => setEmailAddress(e.target.value)} />
        </div>
         <div className="addressField" >
          <label htmlFor="address">Home Address</label>
          <input ref={ref3} id="address" type="address" name="address" onChange={(e) => setHomeAddress(e.target.value)} />
        </div><br />

        <h4>Waiver</h4>
        <WaiverSigner
          firstName={firstName}
          lastName={lastName}
          emailAddress={emailAddress}
          homeAddress={homeAddress}
        />

        <button className="submitBtn"
          onClick={() => {
            if (firstName.length > 0 && lastName.length > 0 && emailAddress.length > 0) {
              submitEntry(); updateDate(); refreshPage();
            }
          }}
        >Add Entry</button>
      </div>
    </div>
  )
}

export default AddEntry;
