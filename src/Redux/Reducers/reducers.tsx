const initialState = {
  userData: {},
  conditionConfiguration: [],
};

const reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case 'ALL_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
    }
};

export default reducer;
