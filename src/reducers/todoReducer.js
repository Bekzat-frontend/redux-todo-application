import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    DELETE_ALL_TODOS,
  } from "../actions/actionTypes";
  
  const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [
            ...state.todos,
            { id: Date.now(), text: action.payload, completed: false },
          ],
        };
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        };
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      case DELETE_ALL_TODOS:
        return {
          ...state,
          todos: [],
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  