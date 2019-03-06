import * as types from "./../constants/ActionTypes";
import v4 from 'uuid/v4';


export const requestCategory = (category, localCategoryId) => ({
  type: types.REQUEST_CATEGORY,
  category,
  categoryId: localCategoryId
});
export const receiveResults = (categoryName,categoryDescription,categoryMuscles) => ({
  type: types.RECEIVE_RESULTS,
  categoryName: categoryName,
  categoryDescription: categoryDescription,
  categoryMuscles: categoryMuscles
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
        const categoryName = json.results[0].name;
        const categoryDescription = json.results[0].description;
        const categoryMuscles = json.results[0].muscles;
        console.log('categoryName');
        console.log(categoryName);
        console.log('categoryDescription');
        console.log(categoryDescription);
        console.log('categoryMuscles');
        console.log(categoryMuscles);
        dispatch(receiveResults(categoryName,categoryDescription,categoryMuscles));
      } else {
        console.log('catgeory results: ' +  categoryDescription);
        console.log('We couldn\'t locate a song under that ID!');
      }
    });
  };
}
