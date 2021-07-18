import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from "uuid";
import Backdrop from './Backdrop';
import Modaladd from './Modaladd'
import Modal from './Modal';
import Button from './Button';
import './Todo.css'
function Todo(props) {

  const [itemsTitle, SetItemsTitle] = useState([]);
  var testValues = [
                    { id : uuidv4(),
                      title:"my first task of day is"}, 
                    { id : uuidv4(),
                      title:"call MIT university for"}, 
                    { id : uuidv4(),
                      title:"I'm a great developer!!"}];

  const addSomethingHandler = (title) => {
    let item = {
    id: uuidv4(),
    title
    }
    if(item!==''){
      if(testValues.find((val) => val.title === item.title)){
        console.log('ca existe deja ca');
      }
      testValues.push(item);
    }
    SetItemsTitle([...testValues]) ;
    console.log('items added',item, itemsTitle);

    }
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modaladdIsOpen, setModaladdIsOpen] = useState(false);

  useEffect(() => {
    SetItemsTitle(...itemsTitle, [...testValues]) ;

  },[])

  const deleteHandler = () => {
    // console.log('Clicked !! : ', index);
    setModalIsOpen(!modalIsOpen);
  }
  function addHandler () {
    setModaladdIsOpen(!modaladdIsOpen);
  }

  const closeModalHandler = () => {
    setModalIsOpen(false);
    setModaladdIsOpen(false);
  }
  const closeModalHandlerAndDeleteItems = (id) => {

    console.log(itemsTitle); 
    SetItemsTitle(itemsTitle.filter((item) => item.id !==id));
    console.log(itemsTitle); 
    setModalIsOpen(false);
    
  }
  return (
    <>
    {itemsTitle.map((todoEl) => {
      return(
        <>
          <div className="box-container">
            <h2 className="title" > {todoEl.title} </h2>
            <Button name='Delete' class="btn" onClick={deleteHandler} ico="fas fa-trash"/>
          </div>
     
          {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={(id)=>closeModalHandlerAndDeleteItems(todoEl.id) } />}
          {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
        </>
       
     )
    })}

    <Button class="btn add" name = "Add more" ico="fa fa-plus" onClick={addHandler} />
    {modaladdIsOpen && <Modaladd onCancel={closeModalHandler} onConfirm={(title)=>addSomethingHandler(title)} />}
    {modaladdIsOpen && <Backdrop onClick={closeModalHandler}/>}
    </>
  )
}
export default Todo;
