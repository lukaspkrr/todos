import { SET_TODO_TEXT, SET_EDITING_TODO, SAVE_TODO, UPDATE_TODO } from './../actions';

const INITIAL_STATE = {
    id: null,
    text: '',
    done: false
};

const editingTodoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TODO_TEXT:
            return {
                ...state,
                text: action.text
            };
        case SET_EDITING_TODO:
            return action.todo;
        case SAVE_TODO: 
        case UPDATE_TODO:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default editingTodoReducer;