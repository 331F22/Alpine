import React from 'react';
import { useState, useEffect, queries } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route}
    from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import Footer from '../Footer.jsx';
import Whitelist from '../Whitelist.jsx';
import Navigation from '../Navigation'



function App() {


  return (

    <div className="App">
      <div className="footerPlacement">
      <Router>

        <Navigation />
        <Routes>
          <Route path = '/' element = {<AddEntry />} />
          <Route path = '/currententries' element = {<CurrentEntries />} />
          <Route path = '/whitelist' element = {<Whitelist />} />
        </Routes>

        </Router>
      </div>

      <Footer />

    </div>
      
     
   
  )

}

export default App;