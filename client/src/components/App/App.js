import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import Footer from '../Footer.jsx'
import FileInput from "../FileInput.jsx";
import TicketSheets from "../TicketSheets.jsx";

function App() {

  return (
    <div className="App">
      <h1>Entries</h1>

      <AddEntry />
      <hr />
      <CurrentEntries />
      <hr />
      <Footer />
      <FileInput/>
      <TicketSheets/>
    </div>
  )
}

export default App;

