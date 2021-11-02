/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const initialState = {
  userData: [],
  conditionConfiguration: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_USER':
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
    }
};

export default reducer;
