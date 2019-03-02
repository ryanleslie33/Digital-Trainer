import React from 'react';
import PropTypes from 'prop-types';


let border =  {
  border: '20px solid black',
  borderRadius: '10px',
  width:'220px',
  height:'400px'
}

let button =  {
  border: '5px solid black',
  borderRadius: '10px',
  width:'210px',
  height:'50px',
  padding:'20px',
  margin:'5px'
}
let page = {
  backgroundColor:'grey',
  borderRadius:'30px'
}
let header = {
  width:'160px',
  border: '5px solid black',
  borderRadius: '10px',
  fontSize:'40px',
  borderRadius:'30px',
  position:'relative',
  left:'50px'
}
let button2 = {
  width:'168px',
  border: '5px solid black',
  borderRadius: '10px',
  fontSize:'40px',
  borderRadius:'30px',
  position:'relative',
  left:'50px',
  height:'54px',
  backgroundColor:'grey',
  hover:'20px'
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
    <button style={button2} type="text" text='button'>History</button>
    <p style={header}>Workouts</p>
    <div style={border}>
    <button style={button} type="text" alt="example"/>
    <button style={button} type="text" placeholder="example"/>
    <button style={button} type="text" placeholder="example"/>
    <button style={button} type="text" placeholder="example"/>
    <button style={button} type="text" placeholder="example"/>
    <button style={button} type="text" placeholder="example"/>
    </div>
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