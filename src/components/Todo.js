import React, { useState, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import Backdrop from './Backdrop';
import Modaladd from './Modaladd'
import Modal from './Modal';
import Button from './Button';
import './Todo.css'
function Todo(props) {
  const [deletBtn, setDeleteBtn] =useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modaladdIsOpen, setModaladdIsOpen] = useState(false);
  const testValues = useMemo(() => {
    return [
      { id: uuidv4(), title: "my first task of day is" },
      { id: uuidv4(), title: "call MIT university for" },
      { id: uuidv4(), title: "I'm a great developer!!" },
    ];
  }, []);
  const [itemsTitle, SetItemsTitle] = useState(
    JSON.parse(localStorage.getItem("items")) || testValues
  );

  const addSomethingHandler = (title) => {

    let item = {
    id: new uuidv4(),
    title
    }
    if(item.title!==''){
      if(testValues.find((val) => val.title === item.title)){
        console.log('ca existe deja ca');
      } else {
        if (testValues.find((val) => val.id === item.id)) {
          item = {
            id: uuidv4(),
            title,
          };
        }
        SetItemsTitle([...itemsTitle, item]);
        localStorage.setItem("items", JSON.stringify(itemsTitle));


      }
    }
   
    
    setModaladdIsOpen(false);

    }

  const handleKeyPress = (event, func) => {
    if (event.key === "Enter" || event.key === "Escape") {
      func();
    }
  };
  const deleteHandler = (id) => {
    setModalIsOpen(!modalIsOpen);
    setDeleteBtn(
      <Modal
        keyEvents={handleKeyPress}
        onCancel={closeModalHandler}
        onConfirm={() => closeModalHandlerAndDeleteItems(id)}
      />
    );
  }
  function addHandler () {
    setModaladdIsOpen(!modaladdIsOpen);
  }

  const closeModalHandler = () => {
    setModalIsOpen(false);
    setModaladdIsOpen(false);
  }
  const closeModalHandlerAndDeleteItems = (id) => {
    SetItemsTitle(itemsTitle.filter((item) => item.id !== id));    
    localStorage.setItem("items", JSON.stringify(itemsTitle));
    setModalIsOpen(false); 
  }


  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemsTitle));
  }, [itemsTitle]);

  return (
    <div className="todo-app">
      <div className="header">
        <div className="entete">
          <h1>My todos List</h1>
        </div>
        <div className="ajout">
          <Button
            class="btn add"
            name="Add more"
            ico="fa fa-plus"
            onClick={addHandler}
          />
          {modaladdIsOpen && (
            <Modaladd
              onCancel={closeModalHandler}
              onConfirm={(title) => addSomethingHandler(title)}
            />
          )}
          {modaladdIsOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
      </div>
      <div className="todo-items">
      {itemsTitle.map((todoEl, index) => {
        return (
          <div key={index}>
            <div className="box-container">
              <h2 className="title"> {todoEl.title} </h2>
              <Button
                name="Delete"
                class="btn"
                onClick={() => deleteHandler(todoEl.id)}
                ico="fas fa-trash"
                focus={`false`}
              />
            </div>
              {modalIsOpen && deletBtn}
          </div>
        );
        
      })}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    </div>
  );
}

export default Todo;
