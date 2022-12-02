import ReactDOM from "react-dom";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import "./styles/Modal.css";

const ModalDisplay = () => {
  let { modalContent, handleModal, modal } = useContext(ModalContext);

  function refreshPage() {
    window.location.reload(false);
  }
  if (modal) {
    return ReactDOM.createPortal(
      <div className="popup">
          <div className="card">
            <div className="card-body">
              {modalContent}
            </div>
            <div className="card-footer text-center">
            <button className="btn btn-danger btn-sm float-right"
                    id="right" style={{color: 'white'}} onClick={() => {handleModal(); refreshPage()}}>
                Close
            </button>
            </div>
          </div>
      </div>,
      // This is to create a modal-root dom element. **DON"T DELETE or the modal will not work correctly
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default ModalDisplay;