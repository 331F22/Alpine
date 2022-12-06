import { useState, useRef } from 'react';
import axios from 'axios'
import './App/App.css';
import image from './Background.jpg';

const AddEntry = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [entryList, setEntryList] = useState([])
  const externalImage = 'https://skinorthamerica100.com/wp-content/uploads/2017/02/17062241359_186265fcc5_o-768x576.jpg'

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

  return (
    <div>
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
          <button className="submitBtn"
            onClick={() => {
              if (firstName.length > 0 && lastName.length > 0 && emailAddress.length > 0) {
                submitEntry()
              }
            }}
          >Add Entry</button>
        </div>
      </div>
      <img id="Bridger" src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/14138246_1186809578049376_4550261594034015295_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nXWVTdE5WuAAX-ZCMme&_nc_ht=scontent-sea1-1.xx&oh=00_AfCBdRrBLMpoxth3S_g4JLpepm6t0Xq0ngIgz-Rlq4YSNg&oe=63B5F395" alt="bridger"/>
      
      
    </div>
  )
}

export default AddEntry;