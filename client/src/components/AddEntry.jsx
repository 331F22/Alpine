import { useState, useRef } from 'react';
import axios from 'axios'
import WaiverSigner from './WaiverSigner';



const AddEntry = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [signatureImage, setSignatureImage] = useState('');
  const [entryList, setEntryList] = useState([])


  // CREATE (POST)
  function submitEntry() {
    axios.post(`${process.env.REACT_APP_HOST}/api/create`, { first: firstName, last: lastName, email: emailAddress, home: homeAddress, signature: signatureImage }).then((response) => {
      setEntryList([...entryList, { first_name: firstName, last_name: lastName, email_address: emailAddress, home: homeAddress, signature: signatureImage }]
      )
    })


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
          <input id="firstName" type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
        </div><br />
        <div className="emailField" >
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" onChange={(e) => setEmailAddress(e.target.value)} />
        </div>
        <div className="addressField" >
          <label htmlFor="address">Home Address</label>
          <input id="address" type="address" name="address" onChange={(e) => setHomeAddress(e.target.value)} />
        </div><br />

        <h4>Waiver</h4>
        <WaiverSigner
          firstName={firstName}
          lastName={lastName}
          emailAddress={emailAddress}
          homeAddress={homeAddress}
          setSignatureImage={setSignatureImage}
        />

        <button className="submitBtn"
          onClick={() => {



            if (firstName.length > 0 && lastName.length > 0 && emailAddress.length > 0 && homeAddress.length > 0 && signatureImage.length > 0) {
              submitEntry(); updateDate(); refreshPage();
            }
          }}
        >Add Entry</button>
      </div>
    </div>
  )
}

export default AddEntry;
