
import {useState } from 'react';
import axios from 'axios';


import Form from './Form'; 
import View from './View';
import './App.css';
import Popup from './Popup';
import Notes from './Notes';





const App = () => {

  const [note, setNote]= useState({
    "firstName": "",
    "lastName": "",
    "phone":"",
    "role": "",
    "message": "",
   
});
 const [show, setShow]= useState(false)

 const onchangeHandler = (e) => {
  setNote({...note,[e.target.name]: e.target.value})
  };



const hidePopup = (e) => {
  e.preventDefault();
  
  setNote({ 
    firstName:"",
    lastName:"",
    phone:"",
    role: "",
    message:""
 });

  setShow(false)
  
};


const submitHandler = (e) => {
  e.preventDefault();
 setShow(
  true
);

}

const postHandler = () => {
  axios
  .post("http://localhost:3001/notes", note)
  .then(window.location.reload())
  .catch((error) => console.log(error))

};

  return(
    <div>
      {!show && <Form onChange={onchangeHandler} submit={submitHandler}{...note} />}
      
      {!show && <View
     {...note}
        />}

      {show && (<Popup 
      firstName={note.firstName}
      lastName={note.lastName}
      phone={note.phone}
      role={note.role}  
      message={note.message}
      hidePopup={hidePopup}
      post={postHandler}
       />
      )}
     <div>
     <Notes/>
     </div>
      
    </div>

    

  
  );
      };




export default App; 




