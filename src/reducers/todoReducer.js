const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
        };
      case "DELETE_ALL_TODOS":
        return {
          ...state,
          todos: [],
        };
      case "TOGGLE_TODO":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  