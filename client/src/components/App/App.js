import React from 'react';
import { useState, useEffect, queries } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import AddEntry from '../AddEntry.jsx';
// import Blacklist from '../Blacklist.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
// import Footer from '../Footer.jsx';
import Whitelist from '../Whitelist.jsx';



function App() {


  return (
    <div className="App">
      <div className="container">

      <AddEntry />
      {/* <hr /> */}
      {/* <CurrentEntries /> */}
      {/* <hr /> */}
      <br />

      <div className="ListDivider">
        <Whitelist />
        <br /> 
        {/* <Footer /> */}
      </div>

      </div>
    </div>
  )
}

export default App;