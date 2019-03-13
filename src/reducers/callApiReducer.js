import constants from './../constants';
const { initialState, types } = constants;
const callApiReducer = (state = initialState, action) => {
  let newResultsByIdEntry;
  let newResultsbyIdStateSlice;
  let newHistoryId;
  let newHistoryReset;

  switch (action.type){

    case types.RECEIVE_HISTORY:

    newResultsByIdEntry = {
      isFectching: false,
      resultsHistory: action.results,


    }

    newHistoryId = Object.assign({}, state,
      newResultsByIdEntry);

      return newHistoryId;

      case types.RECEIVE_RESULTS:

      newResultsByIdEntry = {
        isFectching: false,
        results: action.results

      }

      newResultsbyIdStateSlice = Object.assign({}, state,
        newResultsByIdEntry);

        return newResultsbyIdStateSlice;

        default:
        return initialState;
      }
    };

    export default callApiReducer;
