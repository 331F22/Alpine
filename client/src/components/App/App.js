import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import Footer from '../Footer.jsx'

function App() {

  return (
    <div className="App">
      <img id="logo" src={require('./BSFlogo.jpg')} />
      <h1>Volunteer Signup</h1>
      <h1>Entries</h1>

      <AddEntry />
      <hr />
      <CurrentEntries />
      <hr />
      <Footer />
    </div>
  )
}

export default App;

