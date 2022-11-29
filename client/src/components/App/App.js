import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';

function App() {

  return (
    <div className="App">
      <h1>Admin Page</h1>

      {/* <AddEntry /> */}
      {/* <hr /> */}
      {/* <CurrentEntries /> */}
      {/* <hr /> */}
      <button>Click Me Boi!</button>
      <hr />

      <table id="table" class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Listing</th>
            <th scope="col">Reason</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td scope="row">first_name</td>
            <td>last_name</td>
            <td>white_listed</td>
            <td>reasoning is followed</td>
          </tr>
          <tr>
            <td scope="row">first_name</td>
            <td>last_name</td>
            <td>white_listed</td>
            <td>reasoning is followed</td>
          </tr>
          <tr>
            <td scope="row">first_name</td>
            <td>last_name</td>
            <td>white_listed</td>
            <td>reasoning is followed</td>
          </tr>
        </tbody>
      </table>

      <hr />
      {/* <Footer />  */}
    </div>
  )
}

// function ListPage() {

//   return (
//     <div

//   )

// }

export default App;