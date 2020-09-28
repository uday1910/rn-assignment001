import {SAVE_NAME, REMOVE_NAME, Action} from '../Actions/NameAction';

interface NameState {
  userName: string;
}

const initialState = {
  userName: '',
};

const mealsReducer = (state: NameState = initialState, action: Action) => {
  switch (action.type) {
    case SAVE_NAME:
      return {...state, userName: action.userName};
    case REMOVE_NAME:
      return {...state, userName: action.userName};
    default:
      return state;
  }
};

export default mealsReducer;
