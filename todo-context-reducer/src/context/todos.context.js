import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/todos.reducer';


const defaultTodos = [
    { id: 1, task: "Drink milk", completed: false },
    { id: 2, task: "Spend time with children", completed: true }
  ];

  export const TodosContext = createContext();
  export const DispatchContext = createContext()

  export function TodosProvider(props){
      const [todos, dispatch] = useReducer(reducer, defaultTodos)
      return(
          <TodosContext.Provider value={todos}>
              <DispatchContext.Provider value={dispatch}>
                    {props.children}
              </DispatchContext.Provider>
          </TodosContext.Provider>
      )
  }