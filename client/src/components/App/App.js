import React from 'react';
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
      

      <AddEntry />
      {/* <hr /> */}
      {/* <Blacklist /> */}
      {/* <hr /> */}
      <CurrentEntries />

      {/* <Whitelist /> */}
      <hr /> 
      {/* <Footer /> */}
    </div>


    
  
  )
}

// function ListPage() {

//   return (
//     <div

//   )

// }

export default App;