import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveCategory, receiveResults } from './../actions';

const boxStyle = {
  border: "solid black"
}

const ApiDisplay = ({ dispatch, categories }) => {
  console.log("categories inside the const ApiDisplay: " + JSON.stringify(categories))

  return categories.results.map(function(category){
    return(<div style={boxStyle}>
<img src={"../assets/images/"+category.image}  />


      <h2> Category: {category.image}</h2>
      <h2> Category: {category.name}</h2>
      <h2> Name of exercise: {category.exerciseName}</h2>
      <h2> Category name : {category.category}</h2>
      <h2> Amount of reps: {category.reps}</h2>
      <h2>Amount of sets: {category.sets}</h2>
      <h2> Day: {category.day}</h2>
        <h2>Completed:<input type="checkbox"/></h2> 
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
