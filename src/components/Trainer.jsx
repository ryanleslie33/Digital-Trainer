import React from 'react';
import PropTypes from 'prop-types';


let border =  {
  border: '30px solid black',
  borderRadius: '10px',
}
let page = {
  backgroundColor:'grey',
  borderRadius:'30px'
}
class Trainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    
    };
  
  }


  render(){
    return (
      <div style={page}>
    <br/>       
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <div style={border}>
    <p style={border}>test</p>
    </div>
    <br/>       
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/>       
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
      </div>
    );
  }
}



export default Trainer;