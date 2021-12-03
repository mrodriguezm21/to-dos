import ReactDOM from "react-dom";

/* Styles */
import "./styles/Modal.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
      <div className="modal-overlay"> 
      {children}
      </div>,
    document.getElementById("modal")
  );
}
export { Modal };
