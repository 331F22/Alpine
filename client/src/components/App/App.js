import React, { useState } from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import Footer from '../Footer.jsx'
import Popup from '../Popup';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  function enablePopup() {
      setButtonPopup(true);
  }

  function disablePopup() {
			setButtonPopup(false);
  }
		
  return (
    <div className="App">
      <h1>Entries</h1>
      <AddEntry enablePopup={enablePopup}/>
      <hr />
      <CurrentEntries />
      <hr />
      <Footer />
				<Popup trigger={buttonPopup} disablePopup={disablePopup}>
          <h1>TEST POPUP</h1>
      </Popup>
    </div>
  )
}

export default App;

