import { AnyAction, Dispatch } from 'redux';

const initialState = {
  userData: {},
  conditionConfiguration: {},
};

interface IProps {
  type: string,
  payload: unknown;
}
// Typescrip action.payload

const reducer = (state = initialState, action: any) : any => {
  switch (action.type) {
    case 'ALL_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'ALL_CONDITION_CONFIGURATION':
      return {
        ...state,
        conditionConfiguration: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
