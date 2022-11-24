import React from 'react';
import './Popup.css'

function refreshPage() {
    window.location.reload(false);
}

// TODO: Implement frontend confirmation popup
function PopUp(props) {
    return (props.trigger) ? (
	<div className="popup">
	    <div className="popup-inner">
		<button className="close-btn" onClick={() => {props.disablePopup(); refreshPage();}}>Close</button>
		{ props.children }
	    </div>
	</div>
    ) : "";
}

export default PopUp
