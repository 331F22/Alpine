import "./App.css";
import { ToastContainer } from "react-toastify";
// Context API import
import { ModalProvider } from "../../context/ModalContext";
import Logo from "./BSFbanner.jpeg";

// Component imports
import AddEntry from "../AddEntry.jsx";
import CurrentEntries from "../CurrentEntries.jsx";
import Footer from "../Footer.jsx";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <header class="header"><img class="logo" src ={Logo} alt = "BSF Logo"/></header>
        <h2>Volunteer Sign Up</h2>
        <AddEntry />
        <hr />
        <CurrentEntries />
        <hr />
        <div class="footer">
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </ModalProvider>
  );
}

export default App;
