import { useState, useRef } from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddEntry = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [volunteerList, setVolunteerList] = useState([])

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // CREATE (POST)
  function submitEntry() {
    axios.post(`${process.env.REACT_APP_HOST}/api/create`, { first: firstName, last: lastName, email: emailAddress }).then((response) => {
      setVolunteerList([...volunteerList, { first_name: firstName, last_name: lastName, email_address: emailAddress }]
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

  return (
    <div>
      <Box
      component="form"
      justifyContent="center"
      alignItems="center"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
      margin={"auto"}
    >
      <Stack spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      alignContent={"center"}
      justifyItems={"center"}>
        <span>
  <div className='centered'>
  <TextField
          fullWidth
          sx={{
            width: .98, 
            justifySelf: "center"
          }}
          id="firstName"
          label="First Name"
          ref={ref1}
          onChange={(e) => setFirstName(e.target.value)}
        />
  </div>

        </span>
       <span>

  <div className='centered'>
  <TextField
          fullWidth
          id="lastName"
          label="Last Name"
          ref={ref2}
          onChange={(e) => setLastName(e.target.value)}
        />
</div></span>
        <span>
  <div className='centered'>
<TextField
          fullWidth
          id="email"
          label="Email Address"
          ref={ref3}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
</div></span>
        </Stack>
        </Box>
        <div className='centered'>
        <Button className="submitBtn" variant="contained" size="large" sx={{ textTransform: 'capitalize', borderRadius:0, color: "#b01b1f", borderColor: "#b01b1f", backgroundColor:"white", ':hover': {backgroundColor:"#b01b1f", color:"white"}, ':click': {backgroundColor:"#b01b1f", color:"white"} }}
          onClick={() => {
            if (firstName.length > 0 && lastName.length > 0 && emailAddress.length > 0) {
              submitEntry(); refreshPage();
            }
          }}
        >Check In</Button>
        </div>
       
    </div>
  )
}

export default AddEntry;
