import constants from './../constants';
const { initialState, types } = constants;

const callApiReducer = (state = initialState.category, action) => {

  switch (action.type){
    case types.REQUEST_CATEGORY:
    
      return action.category;

    default: //Added by Robert
    return state;  //Added by Robert
  }
};

export default callApiReducer;
