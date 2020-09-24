import { SAVE_NAME, REMOVE_NAME } from '../Actions/NameAction';

const initialState = {
    userName: ''
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_NAME:
            return { ...state, userName: action.userName }
        case REMOVE_NAME:
            return { ...state, userName: action.userName }
        default:
            return state;
    }
};

export default mealsReducer;