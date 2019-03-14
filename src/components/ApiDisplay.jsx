import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveCategory, receiveResults } from './../actions';
import { masterImageList } from '../public/images/masterImageList.js'
import { fetchHistory } from './../actions';
const boxStyle = {
  border: "solid black",
  fontFamily: 'Times New Roman, Times, serif',
  fontSize:'20px'
}
const masterImage = {
  border: "solid black",
  width:'500px',
  height:'500px',
  maxWidth:'100%',
  maxHeight:'auto',
  postion:'relative',
  top:'-100px'

}
let exerciseName = {
  fontSize:'37px',
  fontFamily: 'Times New Roman, Times, serif',
  border: " 3px solid black",
}
let text = {
  padding:'10px',
  marginRight:'100px',
  backgroundColor:'white'

}

const ApiDisplay = ({ dispatch, categories }) => {

  return categories.results.map(function(category){
    return(<div style={boxStyle}>
      <h2 style={exerciseName}> Name of exercise: {category.exerciseName}</h2>
<img style={masterImage} src={masterImageList[category.image]}/>
      <h2 style={text}> Category name : {category.category}</h2>
      <h2 style={text}> Amount of reps: {category.reps}</h2>
      <h2 style={text}>Amount of sets: {category.sets}</h2>
      <h2 style={text}> Day: {category.day}</h2>



        <h2>Completed:<input onClick={ event => {

          dispatch(fetchHistory(category))
        }} type="checkbox"/></h2>
      </div>
    );
  })
}



  const mapStateToProps = state => {

console.log(state)

    return {
      categories: state.results

    };
  }

  export default connect(mapStateToProps)(ApiDisplay);
