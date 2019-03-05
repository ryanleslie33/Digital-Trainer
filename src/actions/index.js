import * as types from "./../constants/ActionTypes";
import v4 from 'uuid/v4';


export const requestCategory = (category, localCategoryId) => ({
  type: types.REQUEST_CATEGORY,
  category,
  categoryId: localCategoryId
});
export function fetchMuscleGroup(category) {
  console.log(category)

  return function (dispatch) {
    const localCategoryId = v4();

    dispatch(requestCategory(category, localCategoryId));
    return fetch('https://wger.de/api/v2/exerciseinfo?format=json&ordering=id&language=2&name=' + category).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log("the json is: " , json);
      if (json.results.length ) {
        const categoryResults = json.results.description;
      } else {
        console.log('catgeory results: ' +  categoryResults);
        console.log('We couldn\'t locate a song under that ID!');
      }
    });
  };
}
