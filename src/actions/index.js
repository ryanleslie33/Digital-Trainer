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
  id: id,
  categoryId
});



export function fetchHistory(category) {

  return function (dispatch) {


    return fetch('http://localhost:53950/home/Gethistory?Id=' + category.id).then(
      response => response.json(),

    ).then(function(json) {

      if (json) {
        for (let item of json){
          if(category.id = item.lastCompleted){
            dispatch({results:category.id, type: types.RECEIVE_HISTORY,});
          }



        }

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
