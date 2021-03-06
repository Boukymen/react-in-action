import React from 'react'
import Button from './Button';
import './Todo.css';
function Modal(props) {
  const cancleHandler = () => {
      props.onCancel();
  }

  const confirmHandler = () => {
    props.onConfirm();
  };


  return (
    <div
      className="modal"
      autoFocus
      onKeyDown={(e) =>
        props.keyEvents(
          e,
          e.key === "Enter" ? confirmHandler : e.key === "Escape" ? cancleHandler : null
          )
        }
        tabIndex="0"
    >
      <p> are you sure ?</p>
      <div className="btns">
        <Button
          name="Cancel"
          onClick={cancleHandler}
          class="btn cancel"
          ico="fas fa-undo"
        />
        <Button
          name="Confirm"
          onClick={confirmHandler}
          class="btn"
          ico="fa fa-check"
        />
      </div>
    </div>
  );
}

export default Modal
