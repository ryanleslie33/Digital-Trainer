import * as types from "./../constants/ActionTypes";
import v4 from 'uuid/v4';
import moment from 'moment';

export const receiveResults = (categoryName,categoryId) => ({
  type: types.RECEIVE_RESULTS,
  categoryName: categoryName,
  categoryId
});
export const receiveHistory = (id,categoryId) => ({
  type: types.RECEIVE_HISTORY,
  id: categoryName,
  categoryId
});
export function fetchHistory(id) {
  console.log(id)

  return function (dispatch) {
    const localCategoryId = v4();
      
    return fetch('http://localhost:53950/home/Gethistory?Id=' + id).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log("the json is: " , json);
      if (json) {
        for (let item of json){
          item.lastCompleted = moment(item.lastCompleted);
        }
        dispatch({results:json, type: types.RECEIVE_HISTORY,});
      } else {
        console.log('something wrong!');
      }
    });
  };
}

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
        console.log('something wrong!');
      }
    });
  };
}
