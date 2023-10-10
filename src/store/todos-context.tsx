/* eslint-disable @typescript-eslint/no-unused-vars */
import Todo from "../models/todo";
import React, { ReactNode, useState } from "react";

type TodosContextObg = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObg>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [todos, settodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    settodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };
  const deleteTodoHandler = (id: string) => {
    settodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const contextValue: TodosContextObg = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
