import React, {useState} from 'react'
import Button from './Button';
import './Todo.css';
function Modaladd(props) {
  const cancleHandler = () => {
      props.onCancel();
  }

  const confirmHandler = () => {
      props.onConfirm(value);
  }
  const [value, SetValue]=useState('');
  const handleChange = (event) => {
    console.log(value);
    SetValue(event.target.value);
  }
  return (
    <div className="modal" >
      <p> Add a Title</p>
      <input type="text" placeholder="...Title here" autofocus value={value} onChange={handleChange} className="input"/>
      <div className="btns">
        <Button name ="Cancel" onClick={cancleHandler} class ="btn cancel" ico="fas fa-undo" />
        <Button name ="Confirm" onClick={confirmHandler} class ="btn" ico="fa fa-check" />
      </div>
    </div>
  )
}

export default Modaladd
