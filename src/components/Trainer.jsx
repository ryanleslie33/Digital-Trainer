import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMuscleGroup } from './../actions';
import ApiDisplay from './ApiDisplay';

let border =  {
  border: '20px solid black',
  borderRadius: '10px',
  width:'220px',
  height:'410px'
}
let border2 =  {
  border: '20px solid black',
  borderRadius: '10px',
  width:'800px',
  height:'900px',
  position:'relative',
  left:'350px',
  top:'-650px',
  backgroundColor:'blue'
}
let button =  {
  border: '6px solid black',
  borderRadius: '18px',
  width:'210px',
  height:'55px',
  padding:'30px',
  margin:'5px',
  fontSize:'33px',
  backgroundColor:'grey',
  fontFamily: 'Times New Roman, Times, serif'
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
  fontSize:'40px',
  borderRadius:'30px',
  position:'relative',
  left:'50px',
  height:'54px',
  backgroundColor:'grey',
  hover:'20px'
}

const category = "Biceps Curls With Barbell";

class Trainer extends React.Component {
  constructor(props) {

    super(props);
    this.dispatch = this.props.dispatch
  }
  render(){

    return (
      <div style={page}>
      <br/>
      <br/>
      <br/>
      <button  style={button2} type="text" text='button'>History</button>
      <p style={header}>Workouts</p>

      <div style={border}>

      <form onClick={
        event => {
          event.preventDefault();
          this.dispatch(fetchMuscleGroup(category));
        }
      }>
      <button style={button} type="text" alt="example">BUILD</button>
      <button style={button} type="text" alt="example">LOSE</button>
      <button style={button} type="text" alt="example">ABS AND CORE</button>
      <button style={button} type="text" alt="example">LEGS</button>
      <button style={button} type="text" alt="example">CHEST</button>
      </form>

      </div>
      <div style={border2}>
      <ApiDisplay/>
        <p>hello</p>
      </div>

      <div>

      <hr/>
      </div>
      </div>
    );
  }
}
const mapStateToProps = state => {

  return {
    categoryName: state.categoryName,
    categoryDescription: state.categoryDescription,
    categoryMuscles: state.categoryMuscles

  };
}


export default connect(mapStateToProps)(Trainer);
