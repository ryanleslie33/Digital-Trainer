import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveCategory, receiveResults, fetchHistory } from './../actions';
import moment from 'moment';

const boxStyle = {
  border: "solid black",
  backgroundColor:'grey'
}
const masterImage = {
  border: "solid black",
  height:'200px',
  width:'200px'
}

const History = ({ dispatch, categories }) => {

  return categories.results.map(function(category){
    return(<div style={boxStyle}>

  <h2> last Completed workout: {category.lastCompleted}</h2>
  <h2> last Completed workout: {category.id}</h2>
      <h2> Category: {category.name}</h2>
      <h2> Name of exercise: {category.exerciseName}</h2>
      <h2> Day: {category.day}</h2>

      </div>
    );
  })
}

const mapStateToProps = state => {

  return {
    categories: state.results

  };
}

export default connect(mapStateToProps)(History);
