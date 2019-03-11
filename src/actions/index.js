import * as types from "./../constants/ActionTypes";
import v4 from 'uuid/v4';



export const receiveResults = (categoryName,categoryId) => ({
  type: types.RECEIVE_RESULTS,
  categoryName: categoryName,
  categoryId
});
export function fetchMuscleGroup(category) {
  console.log(category)

  return function (dispatch) {
    const localCategoryId = v4();


    return fetch('http://localhost:53950/home/Getexercises?category=' + category).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log("the json is: " , json);

      if (json) {

        dispatch({results:json, type: types.RECEIVE_RESULTS,});
      } else {
        console.log('We couldn\'t locate a song under that ID!');
      }
    });
  };
}
