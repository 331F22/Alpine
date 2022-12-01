import axios from "axios";
import { FcCheckmark } from "react-icons/fc";
import { useState, useRef, useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { toast } from "react-toastify";

const AddEntry = () => {
  let { handleModal } = useContext(ModalContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [entryList, setEntryList] = useState([]);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // CREATE (POST)
  function submitEntry() {
    axios
      .post(`${process.env.REACT_APP_HOST}/api/create`, {
        first: firstName,
        last: lastName,
        email: emailAddress,
      })
      .then((response) => {
        setEntryList([
          ...entryList,
          {
            first_name: firstName,
            last_name: lastName,
            email_address: emailAddress,
          },
        ]);
      });

    ref1.current.value = "";
    setFirstName("");
    ref2.current.value = "";
    setLastName("");
    ref3.current.value = "";
    setEmailAddress("");
  }

  function onSubmit(e) {
    e.preventDefault(); // Prevents the default action of a form. SEE: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    // Test to check if values are read properly on form submission
    // console.log(firstName);
    // console.log(lastName);
    // console.log(emailAddress);
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      emailAddress.length > 0
    ) {
      submitEntry();
      handleModal(
        <AddEntryModal
          firstName={firstName}
          lastName={lastName}
          emailAddress={emailAddress}
        />
      );
    } else {
      toast.error("Fields cannot be blank");
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="formbold-mb-5">
            <label htmlFor="firstName">First Name</label>
            <input
              ref={ref1}
              placeholder="First Name"
              className="formbold-form-input"
              id="firstName"
              type="text"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="firstName">Last Name</label>

            <input
              ref={ref2}
              placeholder="Last Name"
              className="formbold-form-input"
              id="lastName"
              type="text"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="email" className="formbold-form-label">
              Email Address
            </label>
            <input
              ref={ref3}
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              className="formbold-form-input"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>

          <div>
            <button className="formbold-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// The message of the popup that should be displayed should be styled and implemented here
function AddEntryModal({ firstName, lastName, emailAddress }) {
  return (
    <>
      <div id="confirmation">
        <FcCheckmark size="50px"/>
        <h1>Confirmation Email Sent</h1>
      </div>

      <p>
        The confirmation email for {firstName} {lastName} has been sent
        successfully to {emailAddress}
      </p>
    </>
  );
}

export default AddEntry;
