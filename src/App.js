
import React, { Component } from 'react';
import Form from './Form'; 
import View from './View';
import './App.css';
import Popup from './Popup';

class App extends Component{
state= {
  f_name:"",
  l_name:"",
  p_number:"",
  role: "",
  message:"",
  show:false,
};



 onchangeHandler = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  

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


render(){
  return(
    <div>
      <Form onChange={this.onchangeHandler} submit={this.submitHandler} />
      <View
      f_name={this.state.f_name}
      l_name={this.state.l_name}
      p_number={this.state.p_number}
      role={this.state.role}  
      message={this.state.message}
        />

      {this.state.show && (<Popup 
      f_name={this.state.f_name}
      l_name={this.state.l_name}
      p_number={this.state.p_number}
      role={this.state.role}  
      message={this.state.message}
      hidePopup={this.hidePopup}
       />
      )}
      
      
    </div>
  );
};
}


export default App;
