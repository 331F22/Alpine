import { useState, useRef, useContext, useEffect} from "react";
import axios from "axios";
import { ModalContext } from "../context/ModalContext";

const CurrentEntries = () => {
  let { handleModal } = useContext(ModalContext);

  const SECRET = process.env.REACT_APP_PASSCODE;

  const [entryList, setEntryList] = useState([]);

  // READ (GET)
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_HOST}/api/read`).then((response) => {
      setEntryList(response.data);
    });
  }, []);

  const [newEmail, setNewEmail] = useState("");
  const [passcode, setPasscode] = useState("");

  function getObjectByValue(objVal) {
    let objectWithValue = {};
    entryList.forEach((entry) => {
      if (Object.values(entry).indexOf(objVal) > -1) {
        // email value is inside obj inside array
        console.log("entry", entry);
        objectWithValue = entry;
      }
    });
    return objectWithValue;
  }

  // DELETE
  const deleteEntry = (email) => {
    // deletes ALL such email instances in the database
    axios
      .delete(`${process.env.REACT_APP_HOST}/api/delete/${email}`)
      .then((response) => {
        let objToDelete = getObjectByValue(email);
        const index = entryList.indexOf(objToDelete); // deletes ONE instance in the state var
        if (index > -1) {
          let entryListCopy = [...entryList]; // copy
          entryListCopy.splice(index, 1); // remove index
          setEntryList(entryListCopy);
        }
      }); //close .then()
  };

  // UPDATE (PUT)
  const updateEmail = (email) => {
    // replaces ALL such email instances in the database
    axios
      .put(`${process.env.REACT_APP_HOST}/api/update`, {
        old: email,
        new: newEmail,
      })
      .then((response) => {
        let objToChange = getObjectByValue(email);
        const index = entryList.indexOf(objToChange); // deletes ONE instance in the state var
        objToChange.email_address = newEmail;
        if (index > -1) {
          let entryListCopy = [...entryList];
          entryListCopy[index] = objToChange;
          setEntryList(entryListCopy);
        }
      }); //close .then()

    setNewEmail(""); // clear all update email input fields
    let updateInputs = document.getElementsByClassName("updateInput");
    for (let i = 0; i < updateInputs.length; i++) {
      updateInputs[i].value = "";
    }
  };

  const refPass = useRef(null);

  function handleEditList(e) {
    const collection = document.getElementsByClassName("editControls");
    const editButton = document.getElementById("editButton");
    const doneButton = document.getElementById("doneButton");
    const editPasscodeInput = document.getElementById("editPasscodeInput");
    const submitEmailsButton = document.getElementById("submitEmailsButton");

    if (passcode === SECRET) {
      for (let i = 0; i < collection.length; i++)
        collection[i].style.display = "block";
      doneButton.style.display = "inline";
      editButton.style.display = "none";
      editPasscodeInput.style.visibility = "hidden";
      submitEmailsButton.style.display = "block";
    } else {
      for (let i = 0; i < collection.length; i++)
        collection[i].style.display = "none";
      doneButton.style.display = "none";
      editButton.style.display = "inline";
      editPasscodeInput.style.visibility = "visible";
      editPasscodeInput.focus();
    }
    setPasscode("");
    refPass.current.value = "";
  }

  function handleFinishedEditing() {
    const editPasscodeInput = document.getElementById("editPasscodeInput");
    const editButton = document.getElementById("editButton");
    const doneButton = document.getElementById("doneButton");
    const collection = document.getElementsByClassName("editControls");
    const submitEmailsButton = document.getElementById("submitEmailsButton");

    for (let i = 0; i < collection.length; i++)
      collection[i].style.display = "none";
    editPasscodeInput.style.visibility = "hidden";
    doneButton.style.display = "none";
    editButton.style.display = "inline";
    editButton.innerHTML = "Edit List";
    submitEmailsButton.style.display = "none";
  }

  function checkPasscode(e) {
    const editButton = document.getElementById("editButton");
    if (e.target.value === SECRET) {
      editButton.innerHTML = "OK";
      editButton.focus();
    } else {
      editButton.innerHTML = "Edit List";
    }
    setPasscode(e.target.value);
  }

  function abortPasscodeAttempt(e) {
    const editPasscodeInput = document.getElementById("editPasscodeInput");
    if (e !== SECRET) {
      setPasscode("");
      refPass.current.value = "";
      editPasscodeInput.style.visibility = "hidden";
    }
  }

  return (
    <div className="currentEntries posRel">
      <h2>Current Volunteers</h2>

      <div className="userData">
        {entryList.map((val, k) => {
          return (
            <div key={k}>
              <div>
                {val.last_name}, {val.first_name}{" "}
                <span className="emailListed">{val.email_address}</span>{" "}
              </div>

              <div className="editControls editGui">
                <button
                  className="formbold-btn-small"
                  onClick={() => {
                    deleteEntry(val.email_address);
                    handleModal(<DeletedEmailConfirmModal />);
                  }}
                >
                  delete
                </button>
                <button
                  className="formbold-btn-small"
                  onClick={() => {
                    if (newEmail.length > 0) {
                      updateEmail(val.email_address);
                      handleModal(<UpdateConfirmModal />);
                    }
                  }}
                >
                  update
                </button>
                <input
                  type="email"
                  className="formbold-form-input"
                  placeholder={val.email_address}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
            </div>
          );
        })}
        <div className="formbold-form-wrapper">
          <button id="editButton" className="formbold-btn-small" onClick={handleEditList}>
            Edit List
          </button>
          <button id="doneButton" className="formbold-btn-small" onClick={handleFinishedEditing}>
            Done
          </button>
          <input
            id="formbold-form-input"
            ref={refPass}
            type="password"
            placeholder="Enter passcode"
            onChange={checkPasscode}
            onBlur={(e) => abortPasscodeAttempt(e.target.value)}
          />
        </div>
        <button
          id="submitEmailsButton"
          className="formbold-btn-small"
          onClick={() => alert("TODO: Send It!")}
        >
          Email Vouchers
        </button>
      </div>
    </div>
  );
};

// The message of the popup that should be displayed should be styled and implemented here
function DeletedEmailConfirmModal() {
  return (
    <>
      <h1>Volunteer deleted successfully</h1>
    </>
  );
}

function UpdateConfirmModal() {
  return (
    <>
      <h1>Volunteer update successfully</h1>
    </>
  );
}


export default CurrentEntries;
