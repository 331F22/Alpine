import './App/App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Whitelist = () => {

  const whiteliststatus = "Blacklist";
  var fname;
  var lname;
  var reason;

  return (
    <div>
    <div id="butt">
      <button class="btn btn-lg btn-primary active" onclick="history.back()">Click Me Boi!</button>
    </div>
      
      <hr/>
      <div class="table-responsive" id="tablediv">
      <table id="table" class="table border table-striped table-hover">
        
        <thead>
          <tr class="bg-primary">
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
          <tr>
            <td scope="row">first_name</td>
            <td>last_name</td>
            <td>white_listed</td>
            <td>reasoning is followed</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div id="information">
        <p>
          ${fname}
          ${lname}
          ${whiteliststatus}
          ${reason}
        </p>
      </div>
      
      <button class="btn btn-large btn-primary active" id="whitelist" onclick="history.back()">Add to ${whiteliststatus}</button>
    </div>
  )
}

export default Whitelist;
