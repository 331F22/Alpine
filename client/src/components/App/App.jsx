import "./App.css";
import { ToastContainer } from "react-toastify";
// Context API import
import { ModalProvider } from "../../context/ModalContext";

// Component imports
import AddEntry from "../AddEntry.jsx";
import CurrentEntries from "../CurrentEntries.jsx";
import Footer from "../Footer.jsx";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <h1>Volunteer Signup</h1>
        <AddEntry />
        <hr />
        <CurrentEntries />
        <hr />
        <Footer />
      </div>
      <ToastContainer />
    </ModalProvider>
  );
}

export default App;
