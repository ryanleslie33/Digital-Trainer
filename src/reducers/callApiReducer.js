import constants from './../constants';
const { initialState, types } = constants;
const callApiReducer = (state = action) => {

  switch (action.type){
    case types.CALL_EXCERCISE:
    newExcercise = {
      isFetching: true,

    };

    return isFetching;

  }
}

export default callApiReducer;
