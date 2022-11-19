import React from 'react';
import './Home.css';
import AddEntry from '../../components/AddEntry.jsx';
import CurrentEntries from '../../components/CurrentEntries';

/**
 * The Homepage where volunteers can create a sign-in entry 
 * @returns 
 */
function Home() {

  return (
    <div className="App">
      <h1>Entries</h1>
      <AddEntry />
    </div>
  )
}

export default Home;

