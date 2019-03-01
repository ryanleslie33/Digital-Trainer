import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


let page = {
  backgroundColor:'grey',
  textAlign:'center',
  fontSize:'40px',
  borderRadius:'30px'
}
class Welcome extends React.Component {

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
    <Link style={page} to="/Trainer">Start</Link>
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



export default Welcome;