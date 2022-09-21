import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState'


const defaultTodos = [
    { id: 1, task: "Drink milk", completed: false },
    { id: 2, task: "Spend time with children", completed: true }
  ];

  export const TodosContext = createContext();

  export function TodosProvider(props){
      const todoFunctions = useTodoState(defaultTodos)
      return(
          <TodosContext.Provider value={todoFunctions}>
              {props.children}
          </TodosContext.Provider>
      )
  }