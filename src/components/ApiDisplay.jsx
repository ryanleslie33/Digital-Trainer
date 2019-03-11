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
<img src="assets/images/{category.imagename}" />

      <h2>{category.name}</h2>
      <h2>{category.exercise}</h2>
      <h2>{category.category}</h2>
      <h2>{category.reps}</h2>
      <h2>{category.sets}</h2>
      <h2>{category.days}</h2>
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
