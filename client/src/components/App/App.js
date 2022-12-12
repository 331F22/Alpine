import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import Footer from '../footer.js'
import VoucherTable from "../vouchers";
import Header from "../header";
import VoucherGrid from "../VoucherGrid";

function App() {

  return (
    <div className="App">
        <Header/>
      <h1>Entries</h1>

      <AddEntry />
      <hr />
      <CurrentEntries />
      <hr />
        <VoucherTable/>
        <VoucherGrid/>
    </div>
  )
}

export default App;

