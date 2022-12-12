import { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button'
import Input from '@mui/material/Input';


const CurrentEntries = () => {

  const SECRET = process.env.REACT_APP_PASSCODE

  const [entryList, setEntryList] = useState([])
  let [disabled, setDisabled] = useState(true)

   //READ (GET)
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_HOST}/api/read`).then((response) => {
    setEntryList(response.data)
    })
}, [])

  const [newEmail, setNewEmail] = useState('')
  const [passcode, setPasscode] = useState('')
function getObjectByValue(objVal) {
    let objectWithValue = {}
    entryList.forEach(entry => {
      if (Object.values(entry).indexOf(objVal) > -1) { // email value is inside obj inside array
        console.log('entry', entry)
        objectWithValue = entry
      }
    })
    return objectWithValue
  }

  // DELETE
  const deleteEntry = (email) => { // deletes ALL such email instances in the database
    axios.delete(`${process.env.REACT_APP_HOST}/api/delete/${email}`).then((response) => {
      let objToDelete = getObjectByValue(email)
      const index = entryList.indexOf(objToDelete) // deletes ONE instance in the state var
      if (index > -1) {
        let entryListCopy = [...entryList] // copy
        entryListCopy.splice(index, 1) // remove index
        setEntryList(entryListCopy)
      }
    }) //close .then()
  }
// UPDATE (PUT)
  const updateEmail = (email) => { // replaces ALL such email instances in the database
    axios.put(`${process.env.REACT_APP_HOST}/api/update`, { old: email, new: newEmail }).then((response) => {
      let objToChange = getObjectByValue(email)
      const index = entryList.indexOf(objToChange)  // deletes ONE instance in the state var
      objToChange.email_address = newEmail
      if (index > -1) {
        let entryListCopy = [...entryList]
        entryListCopy[index] = objToChange
        setEntryList(entryListCopy)
      }
    }) //close .then()

    setNewEmail('') // clear all update email input fields
    let updateInputs = document.getElementsByClassName('updateInput');
    for (let i = 0; i < updateInputs.length; i++) {
      updateInputs[i].value = ''
    }
  }

  const refPass = useRef(null);
function handleEditList(e) {
    const collection = document.getElementsByClassName("editing")
    const editButton = document.getElementById('editButton')
    const doneButton = document.getElementById('doneButton')
    const editPasscodeInput = document.getElementById('editPasscodeInput')
    const submitEmailsButton = document.getElementById('submitEmailsButton')

    if (passcode === SECRET) {
      for (let i = 0; i < collection.length; i++){
        collection[i].style.display = 'table-cell'
      }
      doneButton.style.display = 'inline'
      editButton.style.display = 'none'
      editPasscodeInput.style.visibility = 'hidden'
      submitEmailsButton.style.display = 'block'
      setDisabled(false)

    } else {
      for (let i = 0; i < collection.length; i++){
        collection[i].style.display = 'none'
      }
      doneButton.style.display = 'none'
      editButton.style.display = 'inline'
      editPasscodeInput.style.visibility = 'visible'
      setDisabled(true)
      editPasscodeInput.focus()
    }
    setPasscode('')
    refPass.current.value = ''
  }
function handleFinishedEditing() {
    const editPasscodeInput = document.getElementById('editPasscodeInput')
    const editButton = document.getElementById('editButton')
    const doneButton = document.getElementById('doneButton')
    const collection = document.getElementsByClassName("editing")
    const submitEmailsButton = document.getElementById('submitEmailsButton')

    for (let i = 0; i < collection.length; i++){
      collection[i].style.display = 'none'
    }
    editPasscodeInput.style.visibility = 'hidden'
    doneButton.style.display = 'none'
    editButton.style.display = 'inline'
    editButton.innerHTML = "Edit List"
    submitEmailsButton.style.display = 'none'
    setDisabled(true)
  }

  function checkPasscode(e) {
    const editButton = document.getElementById('editButton')
    if ((e.target.value) === SECRET) {
      editButton.innerHTML = "OK"
      editButton.focus()
    }
    else {
      editButton.innerHTML = "Edit List"
    }
    setPasscode(e.target.value)
  }

  function abortPasscodeAttempt(e) {
    const editPasscodeInput = document.getElementById('editPasscodeInput')
    if (e !== SECRET) {
      setPasscode('')
      refPass.current.value = ''
      editPasscodeInput.style.visibility = 'hidden'
    }
  }
 return (

    <div className="currentEntries posRel">
<h2>Current Entries</h2>
<TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="right">Email Address</TableCell>
            <TableCell align="center" className='editing' sx={{display: 'none',}}>Edit</TableCell>
            <TableCell align="center" className='editing' sx={{display: 'none'}}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entryList.map((val, k) => (
            <TableRow
              key={k}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left">{val.first_name}</TableCell>
              <TableCell align="left">{val.last_name}</TableCell>
              <TableCell align="right">
                <Input
                  fullWidth={true}
                  disabled={disabled}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="email"
                  defaultValue={val.email_address}
                  /></TableCell>
              <TableCell align="right" className='editing' sx={{display: 'none', alignContent: 'right',}}>
              <div className='centered'>
              <Button align="right" m={'auto'} className="update editing" sx={{display: 'none',}} variant="text" onClick={() => {
                if (newEmail.length > 0) {
                  updateEmail(val.email_address);
                }
              }}>Update</Button></div></TableCell>
              <TableCell align="right" className='editing' sx={{display: 'none', alignContent: 'right',}}>
              <div className='centered'>
              <Button align="right" m={'auto'} className="delete editing" sx={{display: 'none', color:"red",}} variant="text" onClick={() => {
                deleteEntry(val.email_address)
              }}>Delete</Button>
              </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      <div className='userData'>
        <div className="editField editGui">
          <br/>
          <Button id="editButton" variant="contained" onClick={handleEditList} sx={{ textTransform: 'capitalize', borderRadius:0, color: "#b01b1f", borderColor: "#b01b1f", backgroundColor:"white", ':hover': {backgroundColor:"#b01b1f", color:"white"}, ':click': {backgroundColor:"#b01b1f", color:"white"} }}>Edit List</Button>
          <Button id="doneButton" variant="contained" onClick={handleFinishedEditing} sx={{ textTransform: 'capitalize', borderRadius:0, color: "#b01b1f", borderColor: "#b01b1f", backgroundColor:"white", ':hover': {backgroundColor:"#b01b1f", color:"white"}, ':click': {backgroundColor:"#b01b1f", color:"white"} }}>Finished Editing</Button>
          <br/><br/>
          <Input id="editPasscodeInput" ref={refPass} type="password"
            placeholder='Enter passcode' onChange={checkPasscode}
            onBlur={(e) => abortPasscodeAttempt(e.target.value)} />
        </div>
<br/><br/>
        <Button id="submitEmailsButton" className='submitBtn' variant="contained" sx={{ textTransform: 'capitalize', borderRadius:0, color: "#b01b1f", borderColor: "#b01b1f", backgroundColor:"white", ':hover': {backgroundColor:"#b01b1f", color:"white"}, ':click': {backgroundColor:"#b01b1f", color:"white"} }} onClick={() => alert('TODO: Send It!')}>Email Vouchers</Button>
      </div>
    </div>
  )
}

export default CurrentEntries;
