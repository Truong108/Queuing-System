// // src/reducers/todosReducer.ts

// import { TodoActionType, TodoActionTypes } from '../types'; // Import your action types
// import { Todo } from '../models'; // Import your models

// const initialState: Todo[] = [];

// const todosReducer = (state = initialState, action: TodoActionTypes): Todo[] => {
//   switch (action.type) {
//     case TodoActionType.ADD_TODO:
//       return [...state, action.payload];
//     case TodoActionType.TOGGLE_TODO:
//       return state.map((todo) =>
//         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todosReducer;
export{}
