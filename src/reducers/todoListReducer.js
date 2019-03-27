import { SAVE_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from './../actions';

let nextId = 1;

const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_TODO:
            const newTodo = {
                id: nextId++,
                text: action.text,
                done: false
            }
            return [...state, newTodo];
        case UPDATE_TODO:
            return state.map(todo => {
                if (todo.id === action.todo.id)
                    return action.todo
                return todo;
            }); 
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.todoId); 
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.todoId)
                    return {
                        ...todo,
                        done: !todo.done
                    };
                return todo;
            });
        default:
            return state; 
    }
}

export default todoListReducer;