import constants from './../constants';
const { initialState, types } = constants;

const callApiReducer = (state = initialState, action) => {

let newResultsByIdEntry;
let newResultsbyIdStateSlice;
  switch (action.type){

    case types.RECEIVE_RESULTS:

      newResultsByIdEntry = {
        isFectching: false,
      results: action.results

      }

      newResultsbyIdStateSlice = Object.assign({}, state,
      newResultsByIdEntry);



    return newResultsbyIdStateSlice;
    //----------------------------------------------------------

    default: 
    return initialState;
  }


};

export default callApiReducer;
