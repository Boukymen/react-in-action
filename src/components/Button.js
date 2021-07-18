import React from 'react'
import './Todo.css';

function Button(props) {

  return (
    <div>
      <button className={props.class} onClick={props.onClick}>{props.name} <i className={props.ico}/> </button>
    </div>
  )
}

export default Button
