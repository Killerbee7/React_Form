
import React, { Component } from 'react';
import Form from './Form'; 
import View from './View';
import './App.css';
import Popup from './Popup';

class App extends Component{
state= {
 note:{
  f_name:"",
  l_name:"",
  p_number:"",
  role: "",
  message:""},
  show:false,
};



 onchangeHandler = (e) => {
  this.setState({
    note:{...this.state.note,[e.target.name]: e.target.value},
  

  });

}

hidePopup = (e) => {
  e.preventDefault();
 
  this.setState({
    show:false,
  });
};

submitHandler = (e) => {
  e.preventDefault();
 this.setState({
  show: true,
});
}

closeHandler = () => {
  
}


render(){
  return(
    <div>
      {!this.state.show &&<Form onChange={this.onchangeHandler} submit={this.submitHandler}{...this.state.note} />}
      
      {!this.state.show && <View
     {...this.state.note}
        />}

      {this.state.show && (<Popup 
      f_name={this.state.note.f_name}
      l_name={this.state.note.l_name}
      p_number={this.state.note.p_number}
      role={this.state.note.role}  
      message={this.state.note.message}
      hidePopup={this.hidePopup}
       />
      )}
      
      
    </div>
  );
};
}


export default App;
