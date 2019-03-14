import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMuscleGroup } from './../actions';
import ApiDisplay from './ApiDisplay';
import { Link } from 'react-router-dom';
import space2 from '../public/images/space2.jpg';
import space3 from '../public/images/space3.jpg'

let border =  {
  border: '20px solid black',
  borderRadius: '10px',
  width:'220px',
  height:'410px'
}
let border2 =  {
  border: '20px solid black',
  borderRadius: '10px',
  width:'1485px',
  height:'13500px',
  position:'relative',
  left:'350px',
  top:'-650px',
  backgroundImage:'url(' + space3 + ')',
}
let button =  {
  border: '6px solid black',
  borderRadius: '18px',
  width:'210px',
  height:'55px',
  padding:'30px',
  margin:'5px',
  fontSize:'33px',
  backgroundImage:'url(' + space3 + ')',
  fontFamily: 'Times New Roman, Times, serif'
}
let page = {
  backgroundImage:'url(' + space2 + ')',
  borderRadius:'30px'
}
let header = {
  width:'160px',
  border: '3px solid black',
  borderRadius: '10px',
  fontSize:'40px',
  borderRadius:'30px',
  position:'relative',
  left:'50px',
  backgroundImage:'url(' + space3 + ')',
}
let button2 = {
  width:'168px',
  border: '3px solid black',
  fontSize:'40px',
  borderRadius:'30px',
  position:'relative',
  left:'50px',
  height:'54px',
  backgroundImage:'url(' + space3 + ')',
  hover:'20px',
  fontFamily: 'Times New Roman, Times, serif'
}


let abs = "abs"
let chest = "chest"
let legs = "legs"
let muscle = "muscle"
let fat = "fat"
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
      <Link to="/history">
      <button  style={button2} type="text" >History</button>
      </Link>
      <p style={header}>Workouts</p>


      <div style={border}>
      <button  onClick={
        event => {
          this.dispatch(fetchMuscleGroup(muscle));
        }}  style={button} type="text" >BUILD</button>
      <button  onClick={
        event => {
          this.dispatch(fetchMuscleGroup(fat));
        }} style={button} type="text" >LOSE</button>
      <button  onClick={
        event => {
          this.dispatch(fetchMuscleGroup(abs));
        }} style={button} type="text" >ABS AND CORE</button>
      <button  onClick={
        event => {
          this.dispatch(fetchMuscleGroup(legs));
        }} style={button} type="text" >LEGS</button>
      <button onClick={
        event => {
          this.dispatch(fetchMuscleGroup(chest));
        }}  style={button} type="text" >CHEST</button>


      </div>
      <div style={border2}>
      <ApiDisplay/>

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
