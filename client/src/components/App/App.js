import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route}
    from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import AddEntry from '../AddEntry.jsx';
// import Blacklist from '../Blacklist.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
// import Footer from '../Footer.jsx';
import Whitelist from '../Whitelist.jsx';
import Navigation from '../Navigation'

function App() {

  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path = '/' element = {<AddEntry />} />
        <Route path = '/currententries' element = {<CurrentEntries />} />
        <Route path = '/whitelist' element = {<Whitelist />} />

<<<<<<< HEAD
      </Routes>
=======
      <AddEntry />
      {/* <hr /> */}
      {/* <CurrentEntries /> */}
      {/* <hr /> */}
      <br />
<<<<<<< HEAD
>>>>>>> 854de3eda7f68a6d3a76c168abed5b31fd3fc4cb
=======
>>>>>>> 854de3eda7f68a6d3a76c168abed5b31fd3fc4cb

      {/* <div className="ListDivider">
        <Whitelist />
<<<<<<< HEAD
<<<<<<< HEAD
        <hr />  */}
=======
        <br /> 
>>>>>>> 854de3eda7f68a6d3a76c168abed5b31fd3fc4cb
=======
        <br /> 
>>>>>>> 854de3eda7f68a6d3a76c168abed5b31fd3fc4cb
        {/* <Footer /> */}
      {/* </div> */}

     </div>
    </Router>
  )
}

export default App;