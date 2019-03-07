import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveCategory, receiveResults } from './../actions';

const boxStyle = {
  border: "solid black"
}


const ApiDisplay = ({ dispatch, categories }) => {
  console.log("categories inside the const ApiDisplay: " + JSON.stringify(categories))
  console.log(categories.results.categoryDescription)
  return(
    <div style={boxStyle}>
  
      <h2>{categories.results.categoryName}</h2>
      <h3>Muscle used: {categories.results.categoryMuscles}</h3>
      <p>{categories.results.categoryDescription}</p>




    </div>
  )
};

  ApiDisplay.propTypes = {
    categories: PropTypes.object,
    dispatch: PropTypes.func,
    categoryName: PropTypes.string,
    categoryDescription: PropTypes.string,
    categoryMuscles: PropTypes.string,
    categoryId:PropTypes.number
  };

  const mapStateToProps = state => {

console.log(state)

    return {
      categories: state.results

    };
  }

  export default connect(mapStateToProps)(ApiDisplay);
