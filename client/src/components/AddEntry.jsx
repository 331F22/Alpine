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
    if (firstName.length > 0 && lastName.length > 0 && emailAddress.length > 0) {
      submitEntry();
      handleModal(<AddEntryModal />);
    } else {
      toast.error('Fields cannot be blank');
    }
  }

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  return (
    <form onSubmit={onSubmit}>
      <div className="addEntry">
        <h2>Add an Entry</h2>
        <div id="userInput">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              ref={ref1}
              id="firstName"
              type="text"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              ref={ref2}
              id="lastName"
              type="text"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <br />
          <div className="emailField">
            <label htmlFor="email">Email Address</label>
            <input
              ref={ref3}
              id="email"
              type="email"
              name="email"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <button type="submit" className="submitBtn">Add Entry</button>
        </div>
      </div>
    </form>
  );
};

// The message of the popup that should be displayed should be styled and implemented here
function AddEntryModal() {
  return (
    <>
      <h1>Confirmation Email Sent</h1>
    </>
  );
}

export default AddEntry;