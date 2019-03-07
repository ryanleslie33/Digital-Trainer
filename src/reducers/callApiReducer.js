import constants from './../constants';
const { initialState, types } = constants;

const callApiReducer = (state = initialState, action) => {
  console.log("state in reducer: ", state);
  console.log("action after state: ", action);

let newResultsByIdEntry;
let newResultsbyIdStateSlice;
  switch (action.type){

    //----------------------------------------------------------
    case types.REQUEST_CATEGORY:

    newResultsByIdEntry = {
      isFetching: true,
      categoryName: action.categoryName,
      categoryDescription: action.categoryDescription,
      categoryMuscles: action.categoryMuscles
    }
    newResultsbyIdStateSlice = Object.assign({}, state, {
      results : newResultsByIdEntry});
    return newResultsbyIdStateSlice;
    //----------------------------------------------------------
    case types.RECEIVE_RESULTS:
      console.log("action inside REQUEST_CATEGORY: ", action.categoryName);
      newResultsByIdEntry = {
        isFectching: false,
        categoryName: action.categoryName,
        categoryDescription: action.categoryDescription,
        categoryMuscles: action.categoryMuscles
      }
      console.log(newResultsByIdEntry)
      newResultsbyIdStateSlice = Object.assign({}, state, {
      results: newResultsByIdEntry});
      console.log(newResultsbyIdStateSlice)


    return newResultsbyIdStateSlice;
    //----------------------------------------------------------

    default: //Added by Robert
    return initialState;  //Added by Robert
  }


};

export default callApiReducer;
